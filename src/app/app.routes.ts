import { Routes } from '@angular/router';

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
import { Ex10 } from "./fusioncharts/ex10/ex10";
import { Ex11 } from './fusioncharts/ex11/ex11';
import { Ex12 } from './fusioncharts/ex12/ex12';
import { Ex13 } from './fusioncharts/ex13/ex13';
import { Ex14 } from './fusioncharts/ex14/ex14';
import { Ex15} from './fusioncharts/ex15/ex15';
import { Ex16 } from './fusioncharts/ex16/ex16';
import { Ex17 } from './fusioncharts/ex17/ex17';
import { Ex18 } from './fusioncharts/ex18/ex18';
import { Ex19 } from './fusioncharts/ex19/ex19';
import { Ex20 } from './fusioncharts/ex20/ex20';
import { Ex21 } from './fusioncharts/ex21/ex21';
import { Ex22 } from './fusioncharts/ex22/ex22';
// import { Ex10 } from './fusioncharts/ex10/ex10';
import { MyAppComponent } from './observable/observable.component';

// import { HomeComponent } from './home/home.component';
import { FusionChartsSample } from './fusioncharts/fusioncharts.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'ex1', pathMatch: 'full' },
  { path: 'ex1', component: Ex1 },
  { path: 'ex2', component: Ex2 },
  { path: 'ex3', component: Ex3 },
  { path: 'ex4', component: Ex4 },
  { path: 'ex5', component: Ex5 },
  { path: 'ex5a', component: Ex5a },
  { path: 'ex6', component: Ex6 },
  { path: 'ex7', component: Ex7 },
  { path: 'ex8', component: Ex8 },
  { path: 'ex9', component: Ex9 },
  { path: 'ex10', component: Ex10 },
  { path: 'ex11', component: Ex11 },
  { path: 'ex12', component: Ex12 },
  { path: 'ex13', component: Ex13 },
  { path: 'ex14', component: Ex14 },
  { path: 'ex15', component: Ex15 },
  { path: 'ex16', component: Ex16 },
  { path: 'ex17', component: Ex17 },
  { path: 'ex18', component: Ex18 },
  { path: 'ex19', component: Ex19 },
  { path: 'ex20', component: Ex20 },
  { path: 'ex21', component: Ex21 },
  { path: 'ex22', component: Ex22 },
  { path: 'fusioncharts', component: MyAppComponent },

  { path: 'fusioncharts', component: FusionChartsSample }
];

