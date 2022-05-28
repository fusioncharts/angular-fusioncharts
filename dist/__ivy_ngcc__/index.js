import { NgModule } from '@angular/core';
import { FusionChartsComponent } from './src/fusioncharts.component';
import { FusionChartsDirective } from './src/fusioncharts.directive';
import { FusionChartsPipe } from './src/fusioncharts.pipe';
import { FusionChartsStatic, FusionChartsService } from './src/fusioncharts.service';
import * as ɵngcc0 from '@angular/core';
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
    /** @nocollapse */
    FusionChartsModule.ctorParameters = function () { return []; };
FusionChartsModule.ɵfac = function FusionChartsModule_Factory(t) { return new (t || FusionChartsModule)(); };
FusionChartsModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: FusionChartsModule });
FusionChartsModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ providers: [
        FusionChartsService,
        FusionChartsStatic
    ] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FusionChartsModule, [{
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
    }], function () { return []; }, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(FusionChartsModule, { declarations: function () { return [FusionChartsComponent,
        FusionChartsDirective,
        FusionChartsPipe]; }, exports: function () { return [FusionChartsComponent,
        FusionChartsDirective,
        FusionChartsPipe]; } }); })();
    return FusionChartsModule;
}());
export { FusionChartsModule };

//# sourceMappingURL=index.js.map