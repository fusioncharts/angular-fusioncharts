"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var fusioncharts_component_1 = require("./fusioncharts.component.js");
var fusioncharts_directive_1 = require("./fusioncharts.directive.js");
var fusioncharts_pipe_1 = require("./fusioncharts.pipe.js");
var fusioncharts_service_1 = require("./fusioncharts.service.js");
__export(require("./fusioncharts.component.js"));
__export(require("./fusioncharts.directive.js"));
__export(require("./fusioncharts.pipe.js"));
__export(require("./fusioncharts.service.js"));
var FusionChartsModule = FusionChartsModule_1 = (function () {
    function FusionChartsModule() {
    }
    FusionChartsModule.forRoot = function () {
        return {
            ngModule: FusionChartsModule_1,
            providers: [fusioncharts_service_1.FusionChartsService]
        };
    };
    return FusionChartsModule;
}());
FusionChartsModule = FusionChartsModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            fusioncharts_component_1.FusionChartsComponent,
            fusioncharts_directive_1.FusionChartsDirective,
            fusioncharts_pipe_1.FusionChartsPipe
        ],
        exports: [
            fusioncharts_component_1.FusionChartsComponent,
            fusioncharts_directive_1.FusionChartsDirective,
            fusioncharts_pipe_1.FusionChartsPipe
        ]
    })
], FusionChartsModule);
exports.FusionChartsModule = FusionChartsModule;
var FusionChartsModule_1;
//# sourceMappingURL=index.js.map