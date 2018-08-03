import { Injectable, Pipe } from '@angular/core';
/**
 * Transforms any input value
 */
var FusionChartsPipe = /** @class */ (function () {
    function FusionChartsPipe() {
    }
    FusionChartsPipe.prototype.transform = function (value, args) {
        return value;
    };
    FusionChartsPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'fusionchartsPipe'
                },] },
        { type: Injectable },
    ];
    /** @nocollapse */
    FusionChartsPipe.ctorParameters = function () { return []; };
    return FusionChartsPipe;
}());
export { FusionChartsPipe };
//# sourceMappingURL=fusioncharts.pipe.js.map