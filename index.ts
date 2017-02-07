import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FusionChartsComponent} from './src/fusioncharts.component';
import {FusionChartsDirective} from './src/fusioncharts.directive';
import {FusionChartsPipe} from './src/fusioncharts.pipe';
import {FusionChartsService} from './src/fusioncharts.service';

export * from './src/fusioncharts.component';
export * from './src/fusioncharts.directive';
export * from './src/fusioncharts.pipe';
export * from './src/fusioncharts.service';

@NgModule({
  imports: [
    CommonModule
  ],
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
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FusionChartsModule,
      providers: [FusionChartsService]
    };
  }
}
