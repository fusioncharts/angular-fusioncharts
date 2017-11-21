import { ModuleWithProviders } from '@angular/core';
import { FusionChartsComponent } from './src/fusioncharts.component';
import { FusionChartsDirective } from './src/fusioncharts.directive';
import { FusionChartsPipe } from './src/fusioncharts.pipe';
import { FusionChartsStatic } from './src/fusioncharts.service';
export { FusionChartsComponent, FusionChartsDirective, FusionChartsPipe, FusionChartsStatic };
export declare class FusionChartsModule {
    static forRoot(fcCore?: any, ...fcModules: any[]): ModuleWithProviders;
    static fcRoot(fcCore?: any, ...fcModules: any[]): void;
}
