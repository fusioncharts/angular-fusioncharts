#!/usr/bin/env node
/**
 * Asserts that an installed copy of angular-fusioncharts came from a given
 * tarball, byte for byte.
 *
 * Usage: node scripts/verify-swap.mjs <tarball.tgz> <path/to/node_modules/angular-fusioncharts>
 *
 * Why this exists. CI builds each example twice: once against the wrapper
 * resolved from the npm registry, then again against a tarball packed from the
 * working tree. Nothing observable distinguishes the two. The tarball carries
 * the same version string as the published package, and `npm ls` keeps
 * reporting the registry URL out of the lockfile even after the swap
 * succeeds. So a swap that silently no ops leaves CI green while building the
 * published package twice, and the second pass proves nothing.
 *
 * Hashing every shipped file against the tarball closes that. If the working
 * tree differs from the registry copy in any way, only a real swap makes the
 * hashes agree. If it does not differ, the two passes are genuinely the same
 * build and the assertion is satisfied for the right reason.
 */
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdtempSync, readFileSync, existsSync, lstatSync, rmSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { tmpdir } from "node:os";

const [tarball, installDir] = process.argv.slice(2);
if (!tarball || !installDir) {
  console.error("usage: verify-swap.mjs <tarball.tgz> <installed package dir>");
  process.exit(2);
}
for (const p of [tarball, installDir]) {
  if (!existsSync(p)) {
    console.error(`not found: ${p}`);
    process.exit(1);
  }
}

// A symlink means the lockfile still resolves a local path rather than a real
// install, which is a different failure and worth naming separately.
if (lstatSync(installDir).isSymbolicLink()) {
  console.error(`${installDir} is a symlink, not an installed package`);
  process.exit(1);
}

const sha = (p) => createHash("sha256").update(readFileSync(p)).digest("hex");
const walk = (dir, base = dir, out = []) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p, base, out);
    else if (e.isFile()) out.push(relative(base, p));
  }
  return out;
};

const work = mkdtempSync(join(tmpdir(), "afc-swap-"));
let bad = 0;
try {
  execFileSync("tar", ["-xzf", tarball, "-C", work], { stdio: "inherit" });
  const pkgDir = join(work, "package");
  const files = walk(pkgDir).sort();

  for (const f of files) {
    const installed = join(installDir, f);
    if (!existsSync(installed) || !statSync(installed).isFile()) {
      console.error(`  MISSING   ${f}`);
      bad++;
      continue;
    }
    if (sha(join(pkgDir, f)) !== sha(installed)) {
      console.error(`  MISMATCH  ${f}`);
      bad++;
    }
  }

  if (bad) {
    console.error(
      `\n${bad} of ${files.length} shipped files do not match the tarball. ` +
        `The install did not replace the registry copy, so the second pass is not testing this branch.`,
    );
    process.exit(1);
  }
  console.log(`installed copy matches the tarball: ${files.length}/${files.length} files identical`);
} finally {
  rmSync(work, { recursive: true, force: true });
}
