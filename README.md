# angular2-fusioncharts

## Installation

To install this library, run:

```bash
$ npm install angular2-fusioncharts --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install angular2-fusioncharts
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { FusionChartsComponent } from 'angular2-fusioncharts';

@NgModule({
  declarations: [
    AppComponent,
    FusionChartsComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    LibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<fusioncharts
    width="600"
    height="350"
    type="Column2D"
    dataFormat="JSON"
    dataSource=`{
          "chart": {
              "caption": "Harry's SuperMart",
              "subCaption": "Top 5 stores in last month by revenue"
          },
          "data": [
              {
                  "label": "Bakersfield Central",
                  "value": "880000"
              },
              {
                  "label": "Garden Groove harbour",
                  "value": "730000"
              },
              {
                  "label": "Los Angeles Topanga",
                  "value": "590000"
              },
              {
                  "label": "Compton-Rancho Dom",
                  "value": "520000"
              },
              {
                  "label": "Daly City Serramonte",
                  "value": "330000"
              }
          ]
      }
    `
></fusioncharts>
```

## Development

To generate all `*.js`, `*.js.map` and `*.d.ts` files:

```bash
$ npm run tsc
```

To lint all `*.ts` files:

```bash
$ npm run lint
```
### [Demos and Documentation](http://fusioncharts.github.io/angular2-fusioncharts/)
