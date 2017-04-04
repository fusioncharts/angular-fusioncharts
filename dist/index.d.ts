import { ModuleWithProviders } from '@angular/core';
import { FusionChartsComponent } from './src/fusioncharts.component';
import { FusionChartsDirective } from './src/fusioncharts.directive';
import { FusionChartsPipe } from './src/fusioncharts.pipe';
import * as FusionCharts from 'fusioncharts';
export { FusionChartsComponent, FusionChartsDirective, FusionChartsPipe };
export declare class FusionChartsModule {
    static forRoot(routes: any, config?: any): ModuleWithProviders;
}
export default FusionCharts;
