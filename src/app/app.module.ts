import { NgModule, enableProdMode } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { CodePrev } from './fusioncharts/codepreview';
import { TabsModule } from "angularjs2-tabs";
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { Ex1 } from './fusioncharts/ex1/ex1';
import { Ex2 } from './fusioncharts/ex2/ex2';
import { Ex3 } from './fusioncharts/ex3/ex3';
import { Ex4 } from './fusioncharts/ex4/ex4';
import { Ex5 } from './fusioncharts/ex5/ex5';
import { Ex5a } from './fusioncharts/ex5a/ex5a';
import { Ex6 } from './fusioncharts/ex6/ex6';
import { Ex7 } from './fusioncharts/ex7/ex7';
import { Ex8 } from './fusioncharts/ex8/ex8';
import { Ex9 } from './fusioncharts/ex9/ex9';
import { Ex10 } from './fusioncharts/ex10/ex10';
import { Ex11 } from './fusioncharts/ex11/ex11';
import { Ex12 } from "./fusioncharts/ex12/ex12";
import { Ex13 } from "./fusioncharts/ex13/ex13";
import { Ex14 } from "./fusioncharts/ex14/ex14";
import TabbedCode from "./fusioncharts/tabbedComponent/tabbed.code.component";

import { Navigation, NavService, ObservingComponent, MyAppComponent } from './observable/observable.component';

import { FusionChartsSample } from './fusioncharts/fusioncharts.component';
import { FusionChartsModule, FusionChartsStatic } from '../angular2-fusioncharts';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';

// Load charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load PowerCharts module
import * as PowerCharts from 'fusioncharts/fusioncharts.powercharts';
// import * as PowerCharts from 'fusioncharts/fusioncharts.powercharts';
// Load Widgets module
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
// import * as Widgets from 'fusioncharts/fusioncharts.widgets';
// Load Maps module
import * as Maps from 'fusioncharts/fusioncharts.maps';
// import * as Maps from 'fusioncharts/fusioncharts.maps';
// Load WorldMap module
import * as WorldMap from 'fusioncharts/maps/fusioncharts.world';
// import * as WorldMap from 'fusioncharts/maps/fusioncharts.world';
// Load Ocean theme
import * as Ocean from 'fusioncharts/themes/fusioncharts.theme.ocean';
import * as Fint from 'fusioncharts/themes/fusioncharts.theme.fint';
// import * as Ocean from 'fusioncharts/themes/fusioncharts.theme.ocean';


require('./themes/fusioncharts.theme.fusion.js');
require('./themes/fusioncharts.theme.gammel.js');

FusionChartsModule.fcRoot(FusionCharts, Charts, Ocean, PowerCharts, Widgets, Maps, WorldMap, Fint)

@NgModule({
  declarations: [
    Ex1,
    Ex2,
    Ex3,
    Ex4,
    Ex5,
    Ex5a,
    Ex6,
    Ex7,
    Ex8,
    Ex9,
    Ex10,
    Ex11,
    Ex12,
    Ex13,
    Ex14,
    Navigation, ObservingComponent, MyAppComponent,

    CodePrev,
    AppComponent,
    FusionChartsSample,
    TabbedCode
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TabsModule,
    FusionChartsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    CodemirrorModule
  ],
  providers: [
    NavService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
