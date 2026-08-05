# angular-fusioncharts

A simple and lightweight official Angular component for the FusionCharts JavaScript charting library. `angular-fusioncharts` lets you add JavaScript charts to your Angular application without any hassle.

> **angular-fusioncharts v5** ships as a modern Angular library (Angular Package Format, partial-Ivy / FESM2022) and supports **Angular 20, 21, and 22** from a single package. It works with **FusionCharts v3 and v4** (validated against FusionCharts **4.2.2**).

- Documentation: [https://www.fusioncharts.com/dev/getting-started/angular/your-first-chart-using-angular](https://www.fusioncharts.com/dev/getting-started/angular/your-first-chart-using-angular)
- Support: [https://www.fusioncharts.com/contact-support](https://www.fusioncharts.com/contact-support)
- Github Repo: [https://github.com/fusioncharts/angular-fusioncharts](https://github.com/fusioncharts/angular-fusioncharts)
- FusionCharts Official Website: [https://www.fusioncharts.com/](https://www.fusioncharts.com/)
- Issues: [https://github.com/fusioncharts/angular-fusioncharts/issues](https://github.com/fusioncharts/angular-fusioncharts/issues)

---

## Table of Contents

- [Compatibility](#compatibility)
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation](#installation)
- [Quick Start](#quick-start)
  - [Standalone application (Angular 17+ default)](#standalone-application-angular-17-default)
  - [NgModule application](#ngmodule-application)
- [Working with Events](#working-with-events)
- [Working with APIs](#working-with-apis)
- [Exporting charts](#exporting-charts)
- [Usage and integration of FusionTime](#usage-and-integration-of-fusiontime)
- [Consuming outside the Angular CLI](#consuming-outside-the-angular-cli)
- [Migrating to v5](#migrating-to-v5)
- [For Contributors](#for-contributors)
- [Going Beyond Charts](#going-beyond-charts)
- [Licensing](#licensing)

## Compatibility

| angular-fusioncharts | Angular | FusionCharts |
|----------------------|---------|--------------|
| **5.x** | **20, 21, 22** | **3.x / 4.x** (validated on 4.2.2) |
| 4.x | 17-19 | up to 3.23.0 / 4.x |

Applications on Angular ≤ 19 should remain on `angular-fusioncharts@4.x`.

## Getting Started

### Requirements

- **Node.js** and **npm** installed.
  - Angular 20 / 21: Node `^20.19 || ^22.12 || ^24`
  - Angular 22: Node `^22.22.3 || ^24.15.0 || ^26`
- An **Angular 20, 21, or 22** application.
- **FusionCharts** installed in your project, it is a **peer dependency** and is provided by you at runtime (it is not bundled).

### Installation

Install the wrapper and FusionCharts together:

```bash
npm install angular-fusioncharts fusioncharts --save
```

`@angular/core` and `fusioncharts` are declared as peer dependencies:

```jsonc
"peerDependencies": {
  "@angular/core": "^20.0.0 || ^21.0.0 || ^22.0.0",
  "fusioncharts": "^3.0.0 || ^4.0.0"
}
```

## Quick Start

The component API is unchanged from v4, `<fusioncharts>` with the same inputs/outputs. The only difference in v5 is packaging.

### Standalone application (Angular 17+ default)

Since Angular 17, new apps are standalone by default. Import `FusionChartsModule` into your standalone component's `imports`, and register the FusionCharts library once via `fcRoot`:

```typescript
// app.component.ts
import { Component } from '@angular/core';
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library, chart modules, and a theme
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Register FusionCharts with the wrapper (call once, at module load)
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FusionChartsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  dataSource = {
    chart: {
      caption: 'Countries With Most Oil Reserves [2017-18]',
      subCaption: 'In MMbbl = One Million barrels',
      xAxisName: 'Country',
      yAxisName: 'Reserves (MMbbl)',
      numberSuffix: 'K',
      theme: 'fusion',
    },
    data: [
      { label: 'Venezuela', value: '290' },
      { label: 'Saudi Arabia', value: '260' },
      { label: 'Canada', value: '180' },
      { label: 'Iran', value: '140' },
      { label: 'Russia', value: '115' },
      { label: 'UAE', value: '100' },
      { label: 'United States', value: '30' },
      { label: 'China', value: '30' },
    ],
  };
}
```

```html
<!-- app.component.html -->
<fusioncharts
  width="700"
  height="400"
  type="column2d"
  [dataSource]="dataSource">
</fusioncharts>
```

### NgModule application

If your app still uses NgModules, import `FusionChartsModule` into your `AppModule`:

```typescript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FusionChartsModule } from 'angular-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FusionChartsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

## Working with Events

FusionCharts events are exposed as component outputs. In the template:

```html
<fusioncharts
  width="700"
  height="400"
  type="column2d"
  [dataSource]="dataSource"
  (dataplotRollOver)="plotRollOver($event)">
</fusioncharts>
```

`$event` is an object `{ eventObj: {...}, dataObj: {...} }`:

```typescript
plotRollOver($event: any) {
  console.log('Value is', $event.dataObj.dataValue);
}
```

> **Note (zoneless / OnPush apps):** FusionCharts runs its internals outside Angular's zone (via `NgZone.runOutsideAngular`), which is intentional. If an event handler updates component state that must repaint immediately, trigger change detection yourself (e.g. inject `ChangeDetectorRef` and call `markForCheck()`, or run the update inside `NgZone.run`). This applies to Angular 21+ where zoneless change detection is the default.

See the full list of [FusionCharts events](https://www.fusioncharts.com/dev/advanced-chart-configurations/events/classifying-events).

## Working with APIs

Capture the chart instance from the `initialized` event, then call the [FusionCharts API](https://www.fusioncharts.com/dev/api/fusioncharts) on it:

```html
<fusioncharts
  type="column2d" width="100%" height="400"
  [dataSource]="dataSource"
  (initialized)="initialized($event)">
</fusioncharts>
<button (click)="changeCaption()">Change caption</button>
```

```typescript
chart: any;

initialized($event: any) {
  this.chart = $event.chart;
}

changeCaption() {
  this.chart.setChartAttribute('caption', 'Updated caption');
}
```

## Exporting charts

Set `exportEnabled: "1"` in the chart configuration. That is the only thing required: export support already ships inside the main `fusioncharts` package, and no extra module import or `fcRoot` change is needed.

```typescript
dataSource = {
  chart: {
    caption: 'Countries With Most Oil Reserves',
    theme: 'fusion',
    exportEnabled: '1',
  },
  data: [ /* ... */ ],
};
```

An export menu button then appears in the top-right corner of the chart. To export from your own control, call the API on the captured chart instance:

```typescript
exportChart() {
  this.chart.exportChart({ exportFormat: 'png' });   // png, jpg, svg, pdf
}
```

Export runs client-side by default (`exportMode` defaults to `auto`), producing the file in the browser with no export server involved.

> If `exportEnabled` is not set, `exportChart()` does nothing and reports no error. FusionCharts gates the whole export feature behind that attribute.

## Usage and integration of FusionTime

You can visualize timeseries data with FusionTime:

```typescript
import { FusionChartsModule } from 'angular-fusioncharts';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';

FusionChartsModule.fcRoot(FusionCharts, Charts, TimeSeries);
```

Then build a `DataStore`/`DataTable` and pass it as the chart's `data`. Useful links:

- [How FusionTime works](https://www.fusioncharts.com/dev/fusiontime/getting-started/how-fusion-time-works)
- [Create your first chart in FusionTime](https://www.fusioncharts.com/dev/fusiontime/getting-started/create-your-first-chart-in-fusiontime)

## Consuming outside the Angular CLI

v5 is published in **partial-Ivy** form (Angular Package Format). **Angular CLI consumers need no extra configuration**: the CLI runs the Angular Linker automatically when it builds your app.

If you build your app **without the Angular CLI** (a custom webpack/Rollup/esbuild pipeline with no Angular Linker step), you must run the Angular Linker as a Babel plugin so the partial-Ivy code is fully compiled against your Angular version:

```js
// babel.config.js (or your babel-loader options)
module.exports = {
  plugins: [],
  // Run Angular's linker over node_modules
  // see: https://angular.dev/tools/libraries/creating-libraries#consuming-partial-ivy-code-outside-the-angular-cli
};
```

Use `@angular/compiler-cli/linker/babel` via `babel-loader` for `node_modules`. This is a one-time setup and supports build caching. Reference: Angular, *Consuming partial-Ivy code outside the Angular CLI*.

## Migrating to v5

v5 is a packaging-level major. **Your application code does not change**: same `<fusioncharts>` component, same inputs/outputs, same `fcRoot`/`forRoot`.

What changed:

- **Angular floor raised to 20.** Apps on Angular ≤ 19 stay on `angular-fusioncharts@4.x`. Peer range is now `@angular/core ^20 || ^21 || ^22`.
- **`fusioncharts` is now a peer dependency.** Install it alongside the wrapper (`npm install fusioncharts`). Most projects already did this.
- **The legacy UMD bundle (`dist/dist/index.js`) is removed.** The package is ESM-only (FESM2022). Standard `npm install` + `import` consumers are unaffected. Only consumers that loaded the UMD file directly (by file path, via `<script>`, or SystemJS) are impacted, switch to the npm package import.

## For Contributors

This repository is an Angular library workspace. The library lives in `projects/angular-fusioncharts/`. Consumer validation apps live under `examples/`:

| example | Angular | FusionCharts |
|---|---|---|
| `ng-app-20-using-fusioncharts-v4` | 20 | 4.x |
| `ng-app-21-using-fusioncharts-v4` | 21 | 4.x |
| `ng-app-22-using-fusioncharts-v4` | 22 | 4.x |
| `ng-app-20-using-fusioncharts-v3` | 20 | 3.23.0 (evidences the `^3` peer) |

```bash
git clone https://github.com/fusioncharts/angular-fusioncharts.git
cd angular-fusioncharts
npm install
npm run build      # builds the library to dist/angular-fusioncharts (ng-packagr, partial-Ivy)
npm test           # runs the unit tests (vitest)
```

Each example installs `angular-fusioncharts` **from the npm registry**, so it is self-contained. Any example can be copied out of this repository and it will still install and run:

```bash
cd examples/ng-app-22-using-fusioncharts-v4
npm install        # or npm ci
npm run build
npm start
```

> The v22 example requires **Node 22.22.3+** (or 24.15.0+). Apps 20 and 21 run on Node 20.19+/22.12+/24.
> Each example pins the TypeScript its Angular major requires: 20 uses `~5.8`, 21 uses `~5.9`, 22 uses `~6.0`.

### Trying a local build of the library inside an example

```bash
npm run pack       # writes dist/_artifact/angular-fusioncharts-<version>.tgz
cd examples/ng-app-22-using-fusioncharts-v4
npm install ../../dist/_artifact/angular-fusioncharts-<version>.tgz
```

Restore the registry version afterwards by reverting that example's `package.json` and running `npm install`.

> `npm run pack` writes outside `dist/angular-fusioncharts/` on purpose. Packing into the directory you publish from would make the next `npm publish` include the tarball inside itself.

## Going Beyond Charts

- Explore 20+ pre-built business dashboards [here](https://www.fusioncharts.com/explore/dashboards).
- See [Data Stories](https://www.fusioncharts.com/explore/data-stories) built using FusionCharts.

## Licensing

The `angular-fusioncharts` component is open-source and distributed under the MIT License. You will need to download and include the FusionCharts library separately, which has a [separate license](https://www.fusioncharts.com/buy).
