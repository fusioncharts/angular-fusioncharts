import { Directive, ElementRef } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
var FusionChartsDirective = /** @class */ (function () {
    function FusionChartsDirective(el) {
        this.el = el;
    }
    /** @nocollapse */
    FusionChartsDirective.ctorParameters = function () { return [
        { type: ElementRef, },
    ]; };
FusionChartsDirective.ɵfac = function FusionChartsDirective_Factory(t) { return new (t || FusionChartsDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
FusionChartsDirective.ɵdir = /*@__PURE__*/ ɵngcc0.ɵɵdefineDirective({ type: FusionChartsDirective, selectors: [["", "appFusionchartsDirective", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(FusionChartsDirective, [{
        type: Directive,
        args: [{
                selector: '[appFusionchartsDirective]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, null); })();
    return FusionChartsDirective;
}());
export { FusionChartsDirective };

//# sourceMappingURL=fusioncharts.directive.js.map