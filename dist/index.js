import { NgModule } from '@angular/core';
import { FusionChartsComponent } from './src/fusioncharts.component';
import { FusionChartsDirective } from './src/fusioncharts.directive';
import { FusionChartsPipe } from './src/fusioncharts.pipe';
import { FusionChartsStatic, FusionChartsService } from './src/fusioncharts.service';
import * as i0 from "@angular/core";
export { FusionChartsComponent, FusionChartsDirective, FusionChartsPipe, FusionChartsStatic };
var FusionChartsModule = /** @class */ (function () {
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
    FusionChartsModule.ɵfac = function FusionChartsModule_Factory(t) { return new (t || FusionChartsModule)(); };
    FusionChartsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FusionChartsModule });
    FusionChartsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            FusionChartsService,
            FusionChartsStatic
        ] });
    return FusionChartsModule;
}());
export { FusionChartsModule };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FusionChartsModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FusionChartsModule, { declarations: [FusionChartsComponent,
        FusionChartsDirective,
        FusionChartsPipe], exports: [FusionChartsComponent,
        FusionChartsDirective,
        FusionChartsPipe] }); })();
//# sourceMappingURL=index.js.map