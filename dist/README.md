# angular-fusioncharts

## Installation

To install `angular-fusioncharts` library, run:

```bash
$ npm install angular-fusioncharts --save
```

To install `fusioncharts` library:
```bash
$ npm install fusioncharts --save
```
And then in your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import FusionCharts from 'fusioncharts/core';
import Column2d from 'fusioncharts/viz/column2d';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Column2d, FusionTheme);

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
    this.title = "Angular  FusionCharts Sample";

    this.dataSource = {
      "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
      },
      "data": [
        { "label": "Venezuela", "value": "290" },
        { "label": "Saudi", "value": "260" },
        { "label": "Canada", "value": "180" },
        { "label": "Iran", "value": "140" },
        { "label": "Russia", "value": "115" },
        { "label": "UAE", "value": "100" },
        { "label": "US", "value": "30" },
        { "label": "China", "value": "30" }
      ]
    };
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
### [Demos and Documentation](http://fusioncharts.github.io/angular-fusioncharts/)
