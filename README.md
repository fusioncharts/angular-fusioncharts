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
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';

// For Powercharts , Widgets, and Maps
// import * as PowerCharts from 'fusioncharts/fusioncharts.powercharts';
// import * as Widgets from 'fusioncharts/fusioncharts.widgets';
// import * as Maps from 'fusioncharts/fusioncharts.maps';
// To know more about suites,
// read this https://www.fusioncharts.com/dev/getting-started/plain-javascript/install-using-plain-javascript


// For Map definition files
// import * as World from 'fusioncharts/maps/fusioncharts.world';

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

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

## Listening to events
Fusincharts events can be subscribed from component's output params.  
Usage in template :
```xml
<fusioncharts
  width="600"
  height="350"
  type="Column2D"
  dataFormat="json"
  [dataSource]="dataSource"
  (dataplotRollOver)="plotRollOver($event)">
</fusioncharts>
```
And in component's code , `$event` will be an object `{ eventObj : {...}, dataObj: {...} }`  
For more on this read [here](https://www.fusioncharts.com/dev/api/fusioncharts/fusioncharts-events)
```js
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
      ...// same data as above
    };
  }



  plotRollOver($event){
    var dataValue = $event.dataObj.dataValue;
    console.log(`Value is ${dataValue}`);
  }

}
```
Get the list of fusioncharts' [events](https://www.fusioncharts.com/dev/advanced-chart-configurations/events/classifying-events)


## Chart API
Using api of charts involves getting the FusionCharts chart instance from the `initialized` event.
It emits chart object which can be operated upon later.  
  
In template, we add `initialized` event
```xml
<fusioncharts
  type="column2d"
  width="100%"
  height="400"
  dataFormat="json"
  [dataSource]="dataSource"
  (initialized)="initialized($event)">
</fusioncharts>
<button (click)="changeLabel()">Change label</button>
```

And in component's code , we get `$event` as `{ chart : ChartInstance }`  

So in order to use the chart instance , we need to store the chart instance.

```typescript
import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {
  dataSource: Object;
  title: string;
  chart: any;
  constructor() {
    this.title = "Angular  FusionCharts Sample";

    this.dataSource = {
      ...// same data as above
    };
  }

  initialized($event){
    this.chart = $event.chart; // Storing the chart instance
  }

  changeLabel(){
    this.chart.setChartAttribute('caption', 'Changed caption');
  }

}


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
