import { Injectable, Pipe } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Transforms any input value
 */
var FusionChartsPipe = /** @class */ (function () {
    function FusionChartsPipe() {
    }
    FusionChartsPipe.prototype.transform = function (value, args) {
        return value;
    };
    FusionChartsPipe.ɵfac = function FusionChartsPipe_Factory(t) { return new (t || FusionChartsPipe)(); };
    FusionChartsPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "fusionchartsPipe", type: FusionChartsPipe, pure: true });
    FusionChartsPipe.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FusionChartsPipe, factory: FusionChartsPipe.ɵfac });
    return FusionChartsPipe;
}());
export { FusionChartsPipe };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FusionChartsPipe, [{
        type: Pipe,
        args: [{
                name: 'fusionchartsPipe'
            }]
    }, {
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=fusioncharts.pipe.js.map