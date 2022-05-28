import { Injectable, Pipe } from '@angular/core';
/**
 * Transforms any input value
 */
import * as ɵngcc0 from '@angular/core';
var FusionChartsPipe = /** @class */ (function () {
    function FusionChartsPipe() {
    }
    FusionChartsPipe.prototype.transform = function (value, args) {
        return value;
    };
    /** @nocollapse */
    FusionChartsPipe.ctorParameters = function () { return []; };
FusionChartsPipe.ɵfac = function FusionChartsPipe_Factory(t) { return new (t || FusionChartsPipe)(); };
FusionChartsPipe.ɵpipe = /*@__PURE__*/ ɵngcc0.ɵɵdefinePipe({ name: "fusionchartsPipe", type: FusionChartsPipe, pure: true });
FusionChartsPipe.ɵprov = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjectable({ token: FusionChartsPipe, factory: function (t) { return FusionChartsPipe.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FusionChartsPipe, [{
        type: Pipe,
        args: [{
                name: 'fusionchartsPipe'
            }]
    }, {
        type: Injectable
    }], function () { return []; }, null); })();
    return FusionChartsPipe;
}());
export { FusionChartsPipe };

//# sourceMappingURL=fusioncharts.pipe.js.map