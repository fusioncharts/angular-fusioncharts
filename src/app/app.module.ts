import { NgModule, enableProdMode } from '@angular/core';

import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CodePrev } from './fusioncharts/codepreview';
import { CodemirrorModule } from 'ng2-codemirror';

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
import { Ex12 } from './fusioncharts/ex12/ex12';
import { Ex13 } from './fusioncharts/ex13/ex13';
import { Ex14 } from './fusioncharts/ex14/ex14';
import { Ex15 } from './fusioncharts/ex15/ex15';
import { Ex16 } from './fusioncharts/ex16/ex16';
import { Ex17 } from './fusioncharts/ex17/ex17';
import { Ex18 } from './fusioncharts/ex18/ex18';
import { Ex19 } from './fusioncharts/ex19/ex19';
import { Ex20 } from './fusioncharts/ex20/ex20';
import { Ex21 } from './fusioncharts/ex21/ex21';
import { Ex22 } from './fusioncharts/ex22/ex22';
import { Ex23 } from './fusioncharts/ex23/ex23';
import { Ex24 } from './fusioncharts/ex24/ex24';
import { Ex25 } from './fusioncharts/ex25/ex25';
import { Ex26 } from './fusioncharts/ex26/ex26';
import { Ex27 } from './fusioncharts/ex27/ex27';
import { Ex28 } from './fusioncharts/ex28/ex28';
import { Ex29 } from './fusioncharts/ex29/ex29';
import { Ex30 } from './fusioncharts/ex30/ex30';
import { Ex31 } from './fusioncharts/ex31/ex31';
import { Ex32 } from './fusioncharts/ex32/ex32';
import { Ex33 } from './fusioncharts/ex33/ex33';
import { Ex34 } from './fusioncharts/ex34/ex34';
import { Ex35 } from './fusioncharts/ex35/ex35';
import { Ex36 } from './fusioncharts/ex36/ex36';

import { FusionTime } from './fusiontime/fusiontime';

import { SafeHtmlPipe } from './pipes/trustAsHtml';
import { TabbedCode } from './fusioncharts/tabbedComponent/tabbed.code.component';

import {
  Navigation,
  NavService,
  ObservingComponent,
  MyAppComponent
} from './observable/observable.component';

import { FusionChartsSample } from './fusioncharts/fusioncharts.component';
import {
  FusionChartsModule,
  FusionChartsStatic
} from '../angular-fusioncharts';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';

// Load fusion-time module
import * as TimeSeries from 'fusioncharts/fusioncharts.timeseries';

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
import * as Candy from 'fusioncharts/themes/fusioncharts.theme.candy';
import * as Gammel from 'fusioncharts/themes/fusioncharts.theme.gammel';
import * as Zune from 'fusioncharts/themes/fusioncharts.theme.zune';
import * as Fusion from 'fusioncharts/themes/fusioncharts.theme.fusion';
import * as Carbon from 'fusioncharts/themes/fusioncharts.theme.carbon';
// import * as Ocean from 'fusioncharts/themes/fusioncharts.theme.ocean';

// require('./themes/fusioncharts.theme.fusion.js');
// require('./themes/fusioncharts.theme.gammel.js');

FusionChartsModule.fcRoot(
  FusionCharts,
  Charts,
  TimeSeries,
  PowerCharts,
  Widgets,
  Maps,
  WorldMap,
  Ocean,
  Fint,
  Gammel,
  Zune,
  Fusion,
  Candy,
  Carbon
);

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
    Ex15,
    Ex16,
    Ex17,
    Ex18,
    Ex19,
    Ex20,
    Ex21,
    Ex22,
    Ex23,
    Ex24,
    Ex25,
    Ex26,
    Ex27,
    Ex28,
    Ex29,
    Ex30,
    Ex31,
    Ex32,
    Ex33,
    Ex34,
    Ex35,
    Ex36,
    SafeHtmlPipe,
    Navigation,
    ObservingComponent,
    MyAppComponent,
    CodePrev,
    AppComponent,
    FusionChartsSample,
    TabbedCode,
    FusionTime
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FusionChartsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true }),
    CodemirrorModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule {}
