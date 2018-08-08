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
NOTE : If you are using angular 2, please refer [Rendering chart in Angular 2](#Rendering-chart-in-Angular-2)


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
  dataFormat="JSON"
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
    this.chart = $event.chart;
  }

  changeLabel(){
    this.chart.setChartAttribute('caption', 'Changed Label');
  }

}
```

## Rendering chart in Angular 2
For angular version 2.x.x , we cannot use `'fusioncharts/core'` as it uses dynamic imports , which is not compatible with older version typescripts used by Angular 2.  
To render a chart, we need to use the older way,

```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts'; // Change fusioncharts/core to fusioncharts and use `* as`  syntax
import * as Charts from 'fusioncharts/fusioncharts.charts'; // Contains all the charts under FusionCharts XT , Read below for details

import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

```
We have used `fusioncharts/fusioncharts.charts` file to use all the charts which come under FusionCharts XT.
To know more about other charts and widgets, read this [link](https://www.fusioncharts.com/dev/getting-started/plain-javascript/install-using-plain-javascript)

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
