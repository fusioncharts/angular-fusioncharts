import { NgModule } from '@angular/core';
import { FusionChartsComponent } from './src/fusioncharts.component';
import { FusionChartsDirective } from './src/fusioncharts.directive';
import { FusionChartsPipe } from './src/fusioncharts.pipe';
import { FusionChartsStatic, FusionChartsService } from './src/fusioncharts.service';
export { FusionChartsComponent, FusionChartsDirective, FusionChartsPipe, FusionChartsStatic };
var FusionChartsModule = (function () {
    function FusionChartsModule() {
    }
    // Keep this for backward compatible
    FusionChartsModule.forRoot = function (fcCore) {
        var fcModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fcModules[_i - 1] = arguments[_i];
        }
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
    };
    FusionChartsModule.fcRoot = function (fcCore) {
        var fcModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fcModules[_i - 1] = arguments[_i];
        }
        FusionChartsService.setFCRoot({
            core: fcCore,
            modules: fcModules
        });
    };
    return FusionChartsModule;
}());
export { FusionChartsModule };
FusionChartsModule.decorators = [
    { type: NgModule, args: [{
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
            },] },
];
/** @nocollapse */
FusionChartsModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index.js.map