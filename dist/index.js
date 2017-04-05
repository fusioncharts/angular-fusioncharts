var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FusionChartsComponent } from './src/fusioncharts.component';
import { FusionChartsDirective } from './src/fusioncharts.directive';
import { FusionChartsPipe } from './src/fusioncharts.pipe';
import { FusionChartsStatic } from './src/fusioncharts.service';
export { FusionChartsComponent, FusionChartsDirective, FusionChartsPipe };
var FusionChartsModule = FusionChartsModule_1 = (function () {
    function FusionChartsModule() {
    }
    FusionChartsModule.forRoot = function (fcCore) {
        var fcModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fcModules[_i - 1] = arguments[_i];
        }
        return {
            ngModule: FusionChartsModule_1,
            providers: [{
                    provide: FusionChartsStatic,
                    useValue: {
                        core: fcCore,
                        modules: fcModules
                    }
                }]
        };
    };
    return FusionChartsModule;
}());
FusionChartsModule = FusionChartsModule_1 = __decorate([
    NgModule({
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
], FusionChartsModule);
export { FusionChartsModule };
var FusionChartsModule_1;
