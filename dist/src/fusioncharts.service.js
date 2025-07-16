import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var FusionChartsStatic = /** @class */ (function () {
    function FusionChartsStatic() {
    }
    FusionChartsStatic.ɵfac = function FusionChartsStatic_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FusionChartsStatic)(); };
    FusionChartsStatic.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FusionChartsStatic, factory: FusionChartsStatic.ɵfac });
    return FusionChartsStatic;
}());
export { FusionChartsStatic };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FusionChartsStatic, [{
        type: Injectable
    }], null, null); })();
var FusionChartsService = /** @class */ (function () {
    function FusionChartsService(FCStatic) {
        var fcRoot;
        if (FusionChartsService.isFCRootSet()) {
            fcRoot = FusionChartsService.getFCRoot();
        }
        else {
            fcRoot = {
                core: FCStatic.core,
                modules: FCStatic.modules
            };
        }
        this.resolveFusionCharts(fcRoot.core, fcRoot.modules);
    }
    FusionChartsService.setFCRoot = function (fcRoot) {
        FusionChartsService._fcRoot = fcRoot;
    };
    FusionChartsService.getFCRoot = function () {
        return FusionChartsService._fcRoot;
    };
    FusionChartsService.isFCRootSet = function () {
        return !!FusionChartsService._fcRoot;
    };
    FusionChartsService.prototype.resolveFusionCharts = function (core, modules) {
        if (core && core.id && core.id === 'FusionCharts') {
            this._fusionchartsStatice = core;
        }
        else {
            this._fusionchartsStatice = core();
        }
        if (modules) {
            modules.forEach(function (FusionChartsModule) {
                // Handle both function and object-with-default (ESM interop)
                var moduleFn = FusionChartsModule;
                if (FusionChartsModule && typeof FusionChartsModule === 'object' && FusionChartsModule.default) {
                    moduleFn = FusionChartsModule.default;
                }
                if ((moduleFn.getName && moduleFn.getType) ||
                    (moduleFn.name && moduleFn.type)) {
                    core.addDep(moduleFn);
                }
                else if (typeof moduleFn === 'function') {
                    moduleFn(core);
                }
            });
        }
    };
    FusionChartsService.prototype.getFusionChartsStatic = function () {
        return this._fusionchartsStatice;
    };
    FusionChartsService.prototype.getNextItemCount = function () {
        FusionChartsService.itemCount++;
        return FusionChartsService.itemCount;
    };
    FusionChartsService._fcRoot = null;
    FusionChartsService.itemCount = 0;
    FusionChartsService.ɵfac = function FusionChartsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || FusionChartsService)(i0.ɵɵinject(FusionChartsStatic)); };
    FusionChartsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FusionChartsService, factory: FusionChartsService.ɵfac });
    return FusionChartsService;
}());
export { FusionChartsService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FusionChartsService, [{
        type: Injectable
    }], function () { return [{ type: FusionChartsStatic }]; }, null); })();
//# sourceMappingURL=fusioncharts.service.js.map