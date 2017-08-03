import { Directive, ElementRef } from '@angular/core';
var FusionChartsDirective = (function () {
    function FusionChartsDirective(el) {
        this.el = el;
    }
    return FusionChartsDirective;
}());
export { FusionChartsDirective };
FusionChartsDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appFusionchartsDirective]'
            },] },
];
/** @nocollapse */
FusionChartsDirective.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
//# sourceMappingURL=fusioncharts.directive.js.map