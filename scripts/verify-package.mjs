#!/usr/bin/env node
/**
 * Packs the real publishable tarball out of dist/angular-fusioncharts and
 * asserts what a consumer actually receives.
 *
 * ng-packagr writes the publishable package to a directory that is not the
 * one under source control, so nothing in the repo describes the artifact.
 * `files` is not declared either: the Angular Package Format decides the
 * contents. That leaves the tarball itself as the only thing worth asserting
 * against, which is what this script does.
 *
 * Run after `npm run build`. Exits non zero with a specific message on the
 * first failure.
 */
import { execFileSync } from "node:child_process";
import { mkdtempSync, readdirSync, readFileSync, existsSync, statSync, rmSync } from "node:fs";
import { join, dirname, resolve, relative } from "node:path";
import { tmpdir } from "node:os";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = join(repoRoot, "dist", "angular-fusioncharts");

const failures = [];
const fail = (msg) => failures.push(msg);
const done = (msg) => console.log(`  ok    ${msg}`);

// The Angular Package Format contents, exactly. A new file appearing here is
// not automatically wrong, but it is a publish-surface change and should be a
// deliberate edit to this list rather than a surprise on the registry.
const EXPECTED = [
  "LICENSE.md",
  "README.md",
  "fesm2022/angular-fusioncharts.mjs",
  "fesm2022/angular-fusioncharts.mjs.map",
  "index.d.ts",
  "package.json",
];

if (!existsSync(distDir)) {
  console.error(`dist/angular-fusioncharts is missing. Run \`npm run build\` first.`);
  process.exit(1);
}

// Regression guard. `npm run pack` used to write into the directory it packs,
// so the next publish shipped a package containing a copy of itself. The pack
// destination now sits outside; this fails if that ever regresses.
const strayTarballs = readdirSync(distDir).filter((f) => f.endsWith(".tgz"));
if (strayTarballs.length) {
  fail(
    `tarball(s) inside the publish directory: ${strayTarballs.join(", ")}. ` +
      `npm pack must write outside dist/angular-fusioncharts or the artifact contains itself.`,
  );
} else {
  done("no tarball inside the publish directory");
}

const work = mkdtempSync(join(tmpdir(), "afc-verify-"));
let tarball;
try {
  execFileSync("npm", ["pack", "--silent", "--pack-destination", work], {
    cwd: distDir,
    stdio: ["ignore", "ignore", "inherit"],
  });
  const packed = readdirSync(work).filter((f) => f.endsWith(".tgz"));
  if (packed.length !== 1) throw new Error(`expected one tarball, got ${packed.length}`);
  tarball = join(work, packed[0]);

  const listing = execFileSync("tar", ["-tzf", tarball], { encoding: "utf8" })
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean)
    .filter((l) => !l.endsWith("/"))
    .map((l) => l.replace(/^package\//, ""))
    .sort();

  const missing = EXPECTED.filter((f) => !listing.includes(f));
  const extra = listing.filter((f) => !EXPECTED.includes(f));
  if (missing.length) fail(`missing from the tarball: ${missing.join(", ")}`);
  if (extra.length) fail(`unexpected in the tarball: ${extra.join(", ")}`);
  if (!missing.length && !extra.length) done(`tarball contains exactly the ${EXPECTED.length} expected files`);

  execFileSync("tar", ["-xzf", tarball, "-C", work], { stdio: "inherit" });
  const pkgDir = join(work, "package");
  const has = (p) => existsSync(join(pkgDir, p)) && statSync(join(pkgDir, p)).isFile();

  const manifest = JSON.parse(readFileSync(join(pkgDir, "package.json"), "utf8"));

  if (manifest.name !== "angular-fusioncharts") fail(`name is "${manifest.name}"`);
  else done(`name is angular-fusioncharts`);

  // Catches a half finished release bump: the workspace and the library
  // manifest are separate files and only one of them is easy to forget.
  const workspaceVersion = JSON.parse(readFileSync(join(repoRoot, "package.json"), "utf8")).version;
  if (manifest.version !== workspaceVersion) {
    fail(`version mismatch: library ${manifest.version} vs workspace ${workspaceVersion}`);
  } else {
    done(`version ${manifest.version} matches the workspace`);
  }

  // Runtime dependencies are what a consumer silently inherits. tslib is the
  // only one the Angular Package Format needs; anything else is a mistake.
  const deps = Object.keys(manifest.dependencies || {});
  if (deps.length !== 1 || deps[0] !== "tslib") fail(`dependencies should be tslib only, found: ${deps.join(", ") || "none"}`);
  else done("dependencies is tslib only");

  for (const peer of ["@angular/core", "fusioncharts"]) {
    if (!manifest.peerDependencies?.[peer]) fail(`missing peerDependency ${peer}`);
  }
  if (manifest.peerDependencies?.["@angular/core"] && manifest.peerDependencies?.["fusioncharts"]) {
    done(`peers declared: @angular/core ${manifest.peerDependencies["@angular/core"]}, fusioncharts ${manifest.peerDependencies["fusioncharts"]}`);
  }
  if (manifest.dependencies?.fusioncharts || manifest.devDependencies?.fusioncharts) {
    fail("fusioncharts must stay a peer, never a dependency");
  }

  // Every entry point npm advertises has to exist inside the tarball. A
  // dangling one fails only in the consumer, which is the worst place to
  // find out.
  const entries = [
    ["module", manifest.module],
    ["typings", manifest.typings],
    ["types", manifest.types],
    ["exports['.'].types", manifest.exports?.["."]?.types],
    ["exports['.'].default", manifest.exports?.["."]?.default],
    ["exports['./package.json'].default", manifest.exports?.["./package.json"]?.default],
  ].filter(([, v]) => typeof v === "string");

  if (!entries.length) fail("no entry points declared at all");
  for (const [field, target] of entries) {
    const rel = target.replace(/^\.\//, "");
    if (!has(rel)) fail(`${field} points at "${target}" which is not in the tarball`);
  }
  if (!failures.length || entries.every(([, t]) => has(t.replace(/^\.\//, "")))) {
    done(`${entries.length} declared entry points all resolve inside the tarball`);
  }

  // Relative specifiers inside the shipped bundle and types must stay inside
  // the tarball. `file:` installs symlink the whole repo, so a stray import
  // resolves during local development and only breaks once published.
  const specRe = /from\s*["'](\.[^"']+)["']|import\s*\(\s*["'](\.[^"']+)["']\s*\)/g;
  let checked = 0;
  for (const rel of ["fesm2022/angular-fusioncharts.mjs", "index.d.ts"]) {
    if (!has(rel)) continue;
    const src = readFileSync(join(pkgDir, rel), "utf8");
    let m;
    specRe.lastIndex = 0;
    while ((m = specRe.exec(src))) {
      const spec = m[1] || m[2];
      checked++;
      const cands = ["", ".mjs", ".js", ".d.ts", ".ts", "/index.d.ts", "/index.mjs"].map((e) =>
        resolve(dirname(join(pkgDir, rel)), spec + e),
      );
      if (!cands.some((c) => existsSync(c))) {
        fail(`${rel} imports "${spec}" which does not exist in the tarball`);
      }
      if (cands.every((c) => relative(pkgDir, c).startsWith(".."))) {
        fail(`${rel} imports "${spec}" which escapes the tarball`);
      }
    }
  }
  done(`${checked} relative specifiers in the shipped bundle and types resolve inside the tarball`);

  // Angular's library scaffold ships a Google LLC placeholder license. That
  // shipped once already; assert the real holder is in the published copy.
  const license = readFileSync(join(pkgDir, "LICENSE.md"), "utf8");
  if (!/FusionCharts/i.test(license)) fail("LICENSE.md in the tarball does not name FusionCharts");
  else if (/Google/i.test(license)) fail("LICENSE.md still carries the Angular scaffold placeholder");
  else done("LICENSE.md names FusionCharts");

  // The npm page renders projects/angular-fusioncharts/README.md, not the root
  // one. The two drifted once: the root copy was corrected in 1c7db989 and the
  // library copy was not, so 5.0.0-rc.0 shipped instructions telling consumers
  // to run `npm run pack` before installing an example, which had stopped being
  // true. Nothing caught it, because no build step reads prose. Keeping the two
  // byte-identical is the cheapest guarantee that what renders on npm is what
  // was reviewed on GitHub.
  const shippedReadme = readFileSync(join(pkgDir, "README.md"), "utf8");
  const rootReadme = readFileSync(join(repoRoot, "README.md"), "utf8");
  if (shippedReadme !== rootReadme) {
    fail(
      "README.md in the tarball differs from the repository root README.md. " +
        "The npm page comes from projects/angular-fusioncharts/README.md; update both together.",
    );
  } else {
    done("README.md in the tarball matches the root README.md");
  }

  // @angular/core must stay an external import. If ng-packagr ever inlines it
  // the consumer ends up with two copies of Angular.
  const fesm = readFileSync(join(pkgDir, "fesm2022/angular-fusioncharts.mjs"), "utf8");
  if (!/from ['"]@angular\/core['"]/.test(fesm)) fail("the FESM bundle does not import @angular/core as an external");
  else done("@angular/core stays external in the FESM bundle");

  console.log(`\n  tarball: ${manifest.name}@${manifest.version}, ${listing.length} files`);
} finally {
  rmSync(work, { recursive: true, force: true });
}

if (failures.length) {
  console.error(`\nverify:package failed with ${failures.length} problem(s):`);
  for (const f of failures) console.error(`  - ${f}`);
  process.exit(1);
}
console.log("\nverify:package passed");
