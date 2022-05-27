import { Injectable } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
var FusionChartsStatic = /** @class */ (function () {
    function FusionChartsStatic() {
    }
    /** @nocollapse */
    FusionChartsStatic.ctorParameters = function () { return []; };
FusionChartsStatic.ɵfac = function FusionChartsStatic_Factory(t) { return new (t || FusionChartsStatic)(); };
FusionChartsStatic.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: FusionChartsStatic, factory: function (t) { return FusionChartsStatic.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FusionChartsStatic, [{
        type: Injectable
    }], function () { return []; }, null); })();
    return FusionChartsStatic;
}());
export { FusionChartsStatic };
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
    /** @nocollapse */
    FusionChartsService.ctorParameters = function () { return [
        { type: FusionChartsStatic, },
    ]; };
FusionChartsService.ɵfac = function FusionChartsService_Factory(t) { return new (t || FusionChartsService)(ɵngcc0.ɵɵinject(FusionChartsStatic)); };
FusionChartsService.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: FusionChartsService, factory: function (t) { return FusionChartsService.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FusionChartsService, [{
        type: Injectable
    }], function () { return [{ type: FusionChartsStatic }]; }, null); })();
    return FusionChartsService;
}());
export { FusionChartsService };

//# sourceMappingURL=fusioncharts.service.js.map