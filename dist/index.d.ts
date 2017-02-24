import { ModuleWithProviders } from '@angular/core';
import { FusionChartsComponent } from './src/fusioncharts.component';
import { FusionChartsDirective } from './src/fusioncharts.directive';
import { FusionChartsPipe } from './src/fusioncharts.pipe';
export { FusionChartsComponent, FusionChartsDirective, FusionChartsPipe };
export declare class FusionChartsModule {
    static forRoot(FusionChartsConstructor: any, ...fusionchartsModules: Array<Function>): ModuleWithProviders;
}
