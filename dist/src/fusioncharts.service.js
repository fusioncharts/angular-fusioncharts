import { Injectable } from '@angular/core';
var FusionChartsStatic = (function () {
    function FusionChartsStatic() {
    }
    return FusionChartsStatic;
}());
export { FusionChartsStatic };
FusionChartsStatic.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FusionChartsStatic.ctorParameters = function () { return []; };
var FusionChartsService = (function () {
    function FusionChartsService(FCStatic) {
        /* TODO: Need to remove this when FusionCharts becomes ES6 modules */
        if (FCStatic.core && FCStatic.core.getCurrentRenderer &&
            FCStatic.core.getCurrentRenderer() === 'javascript') {
            this._fusionchartsStatice = FCStatic.core;
        }
        else {
            this._fusionchartsStatice = FCStatic.core();
        }
        if (FCStatic && FCStatic.modules) {
            FCStatic.modules.forEach(function (FusionChartsModules) {
                FusionChartsModules(FCStatic.core);
            });
        }
    }
    FusionChartsService.prototype.getFusionChartsStatic = function () {
        return this._fusionchartsStatice;
    };
    return FusionChartsService;
}());
export { FusionChartsService };
FusionChartsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
FusionChartsService.ctorParameters = function () { return [
    { type: FusionChartsStatic, },
]; };
//# sourceMappingURL=fusioncharts.service.js.map