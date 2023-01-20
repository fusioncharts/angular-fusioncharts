import { ModuleWithProviders } from '@angular/core';
import { FusionChartsComponent } from './src/fusioncharts.component';
import { FusionChartsDirective } from './src/fusioncharts.directive';
import { FusionChartsPipe } from './src/fusioncharts.pipe';
import { FusionChartsStatic } from './src/fusioncharts.service';
import * as i0 from "@angular/core";
import * as i1 from "./src/fusioncharts.component";
import * as i2 from "./src/fusioncharts.directive";
import * as i3 from "./src/fusioncharts.pipe";
export { FusionChartsComponent, FusionChartsDirective, FusionChartsPipe, FusionChartsStatic };
export declare class FusionChartsModule {
    static forRoot(fcCore?: any, ...fcModules: any[]): ModuleWithProviders<FusionChartsModule>;
    static fcRoot(fcCore?: any, ...fcModules: any[]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FusionChartsModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<FusionChartsModule, [typeof i1.FusionChartsComponent, typeof i2.FusionChartsDirective, typeof i3.FusionChartsPipe], never, [typeof i1.FusionChartsComponent, typeof i2.FusionChartsDirective, typeof i3.FusionChartsPipe]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<FusionChartsModule>;
}
