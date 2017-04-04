import {NgModule, ModuleWithProviders} from '@angular/core';

import {FusionChartsComponent} from './src/fusioncharts.component';
import {FusionChartsDirective} from './src/fusioncharts.directive';
import {FusionChartsPipe} from './src/fusioncharts.pipe';
import {FusionChartsStatic} from './src/fusioncharts.service';

import * as FusionCharts from 'fusioncharts';


export {
    FusionChartsComponent,
    FusionChartsDirective,
    FusionChartsPipe
};


@NgModule({
  declarations: [
    FusionChartsComponent,
    FusionChartsDirective,
    FusionChartsPipe
  ],
  exports: [
    FusionChartsComponent,
    FusionChartsDirective,
    FusionChartsPipe
  ]
})


export class FusionChartsModule {
    // static forRoot(...fusionchartsModules: Array<Function>): ModuleWithProviders {
        // fusionchartsModules.forEach((FusionChartsModules: any) => {
        //     FusionChartsModules(FusionCharts)
        // });

    // static forRoot(...config: any[]): ModuleWithProviders {
    //   // console.log(config);
    //   // if (config) {
    //   //   for (var i in config['modules']) {
    //   //     config['modules'](config['core'])
    //   //   }        
    //   // }

    //   return {
    //     ngModule: FusionChartsModule,
    //     providers: [{ 
    //       provide: FusionChartsStatic,
    //       useValue: FusionCharts
    //     }]
    //   };
    // }

    static forRoot(routes: any, config?: any): ModuleWithProviders {
    // static forRoot(): ModuleWithProviders {
        return {
            ngModule: FusionChartsModule,
            providers: [{ 
              provide: FusionChartsStatic,
              useValue: FusionCharts
            }]
        }
    }

}

export default FusionCharts;

