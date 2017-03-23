import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GithubService } from './github/shared/github.service';
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

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FusionChartsSample } from './fusioncharts/fusioncharts.component';
import { FusionChartsModule } from 'angular2-fusioncharts';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load Ocean theme
import * as Ocean from 'fusioncharts/themes/fusioncharts.theme.ocean';

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
    // Ex10,
    
    Navigation, ObservingComponent, MyAppComponent,

    CodePrev,
    AppComponent,
    AboutComponent,
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent,
    HomeComponent,
    FusionChartsSample,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    TabsModule,
    FusionChartsModule.forRoot(FusionCharts, Ocean),
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    GithubService,

    NavService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
