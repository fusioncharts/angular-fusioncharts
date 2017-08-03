import { Injectable, Pipe } from '@angular/core';
/**
 * Transforms any input value
 */
var FusionChartsPipe = (function () {
    function FusionChartsPipe() {
    }
    FusionChartsPipe.prototype.transform = function (value, args) {
        return value;
    };
    return FusionChartsPipe;
}());
export { FusionChartsPipe };
FusionChartsPipe.decorators = [
    { type: Pipe, args: [{
                name: 'fusionchartsPipe'
            },] },
    { type: Injectable },
];
/** @nocollapse */
FusionChartsPipe.ctorParameters = function () { return []; };
//# sourceMappingURL=fusioncharts.pipe.js.map