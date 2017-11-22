# angular2-fusioncharts

## Installation

To install `angular2-fusioncharts` library, run:

```bash
$ npm install angular2-fusioncharts --save
```

And then in your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import angular2-fusioncharts
import { FusionChartsModule } from 'angular2-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // Specify FusionChartsModule as import
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use its components, directives in your Angular application:

In your Angular AppComponent:

```javascript
import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  dataSource: Object;
  title: string;

  constructor() {
    this.title = "Angular 2 FusionCharts Sample";

    this.dataSource = {
      "chart": {
        "caption": "Harry's SuperMart",
        "subCaption": "Top 5 stores in last month by revenue"
      },
      "data": [{
        "label": "Bakersfield Central",
         "value": "880000"
      }, {
        "label": "Garden Groove harbour",
        "value": "730000"
      }, {
        "label": "Los Angeles Topanga",
        "value": "590000"
      }, {
        "label": "Compton-Rancho Dom",
        "value": "520000"
      }, {
        "label": "Daly City Serramonte",
        "value": "330000"
      }]
    }
  }
}
```

    
```xml
<!-- You can now use fusioncharts component in app.component.html -->
<h1>
  {{title}}
</h1>
<fusioncharts
    width="600"
    height="350"
    type="Column2D"
    dataFormat="JSON"
    [dataSource]="dataSource"
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
