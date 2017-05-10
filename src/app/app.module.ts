import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { CodePrev } from './fusioncharts/codepreview';
import { TabsModule } from "angularjs2-tabs";

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
// import { Ex10 } from './fusioncharts/ex10/ex10';
import { Navigation, NavService, ObservingComponent, MyAppComponent } from './observable/observable.component';

import { FusionChartsSample } from './fusioncharts/fusioncharts.component';
import { FusionChartsModule, FusionChartsStatic } from '../angular2-fusioncharts';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
declare const require: any;
// Load charts module
const Charts = require('fusioncharts/fusioncharts.charts');
// Load Ocean theme
const Ocean = require('fusioncharts/themes/fusioncharts.theme.ocean');


const PowerCharts = require('fusioncharts/fusioncharts.powercharts');
const Widgets = require('fusioncharts/fusioncharts.widgets');
const Maps = require('fusioncharts/fusioncharts.maps');
const World = require('fusioncharts/maps/fusioncharts.world');
const fint = require('fusioncharts/themes/fusioncharts.theme.fint');

Charts(FusionCharts);
Ocean(FusionCharts);
PowerCharts(FusionCharts);
Widgets(FusionCharts);
Maps(FusionCharts);
World(FusionCharts);

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
    
    Navigation, ObservingComponent, MyAppComponent,

    CodePrev,
    AppComponent,
    FusionChartsSample
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TabsModule,
    FusionChartsModule.forRoot(FusionCharts),
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    NavService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
