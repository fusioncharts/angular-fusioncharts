import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var FusionChartsStatic = /** @class */ (function () {
    function FusionChartsStatic() {
    }
    FusionChartsStatic.ɵfac = function FusionChartsStatic_Factory(t) { return new (t || FusionChartsStatic)(); };
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
            modules.forEach(function (FusionChartsModules) {
                if ((FusionChartsModules.getName && FusionChartsModules.getType) ||
                    (FusionChartsModules.name && FusionChartsModules.type)) {
                    core.addDep(FusionChartsModules);
                }
                else {
                    FusionChartsModules(core);
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
    FusionChartsService.ɵfac = function FusionChartsService_Factory(t) { return new (t || FusionChartsService)(i0.ɵɵinject(FusionChartsStatic)); };
    FusionChartsService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FusionChartsService, factory: FusionChartsService.ɵfac });
    return FusionChartsService;
}());
export { FusionChartsService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FusionChartsService, [{
        type: Injectable
    }], function () { return [{ type: FusionChartsStatic }]; }, null); })();
//# sourceMappingURL=fusioncharts.service.js.map