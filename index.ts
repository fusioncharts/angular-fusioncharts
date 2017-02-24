import {NgModule, ModuleWithProviders} from '@angular/core';

import {FusionChartsComponent} from './src/fusioncharts.component';
import {FusionChartsDirective} from './src/fusioncharts.directive';
import {FusionChartsPipe} from './src/fusioncharts.pipe';
import {FusionChartsStatic} from './src/fusioncharts.service';


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
    static forRoot(FusionChartsConstructor: any, ...fusionchartsModules: Array<Function>): ModuleWithProviders {
        fusionchartsModules.forEach((FusionChartsModules) => {
            FusionChartsModules(FusionChartsConstructor)
        });

        return {
            ngModule: FusionChartsModule,
            providers: [{ 
              provide: FusionChartsStatic,
              useValue: FusionChartsConstructor
            }]
        }
    }

}

