import { NgModule, ModuleWithProviders } from '@angular/core';

import { FusionChartsComponent } from './src/fusioncharts.component';
import { FusionChartsDirective } from './src/fusioncharts.directive';
import { FusionChartsPipe } from './src/fusioncharts.pipe';
import { FusionChartsStatic, FusionChartsService } from './src/fusioncharts.service';


export {
    FusionChartsComponent,
    FusionChartsDirective,
    FusionChartsPipe,
    FusionChartsStatic
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
    ],
    providers: [
        FusionChartsService,
        FusionChartsStatic
    ]
})


export class FusionChartsModule {
    // Keep this for backward compatible
    static forRoot(fcCore?: any, ...fcModules: any[]): ModuleWithProviders {
        return {
            ngModule: FusionChartsModule,
            providers: [{
                provide: FusionChartsStatic,
                useValue: {
                    core: fcCore,
                    modules: fcModules
                }
            }]
        };
    }

    static fcRoot(fcCore?: any, ...fcModules: any[]) {
        FusionChartsService.setFCRoot({
            core: fcCore,
            modules: fcModules
        });
    }
}

