import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FusionChartsModule, FusionChartsStatic } from '../angular2-fusioncharts';

declare var require: any;
const FusionCharts = require('fusioncharts');
const Charts = require('fusioncharts/fusioncharts.charts');

export function FusionChartsProvider () {
  Charts(FusionCharts);
  return FusionCharts;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FusionChartsModule
  ],
  providers: [
  {
    provide: FusionChartsStatic,
    useFactory: FusionChartsProvider
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
