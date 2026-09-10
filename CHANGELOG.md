# Changelog

All notable changes to `angular-fusioncharts` are documented here.

## 5.0.0

Major release: multi-version Angular support and vulnerability remediation. **No application code changes are required**: the `<fusioncharts>` component, its inputs/outputs, and `fcRoot`/`forRoot` are unchanged.

### Added
- Support for **Angular 20, 21, and 22** from a single published package (peer range `@angular/core ^20.0.0 || ^21.0.0 || ^22.0.0`).
- README sections for consuming the package **outside the Angular CLI** (Angular Linker as a Babel plugin) and a **v5 migration guide**.
- Consumer validation apps for Angular 20, 21, and 22 under `examples/`.
- Unit tests for the wrapper's public API (vitest).

### Changed
- **Build system migrated to ng-packagr (Angular Package Format, partial-Ivy / FESM2022)**, replacing the manual `ngc` + Rollup + UMD pipeline. This is what enables a single artifact to be consumed across Angular majors (the consumer's build finishes compilation via the Angular Linker).
- Repository restructured into a standard Angular library workspace (`projects/angular-fusioncharts/`).
- `fusioncharts` is now declared as a **peer dependency** (`^3.0.0 || ^4.0.0`); install it alongside the wrapper. Validated against FusionCharts 4.2.2.
- `@types/fusioncharts` moved to a build-time dev dependency (it is not a runtime dependency).

### Removed
- **The legacy UMD bundle (`dist/dist/index.js`) is removed.** The package is ESM-only. Standard `npm install` + `import` consumers are unaffected; only consumers loading the UMD file directly (by path, `<script>`, or SystemJS) are impacted.
- The legacy demo application and its dependency toolchain (`tslint`, `codelyzer`, `protractor`, `bootstrap`, `prismjs`, `ng2-codemirror`, etc.).

### Security
- Addressed known OSV advisories in the dependency graph.

### Compatibility
- Applications on Angular ≤ 19 should remain on `angular-fusioncharts@4.x`.

## 4.x

See the [4.x release history](https://github.com/fusioncharts/angular-fusioncharts/releases), Angular 17-19 support.
