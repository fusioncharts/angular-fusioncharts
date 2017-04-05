"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fusioncharts_component_1 = require("./src/fusioncharts.component");
exports.FusionChartsComponent = fusioncharts_component_1.FusionChartsComponent;
var fusioncharts_directive_1 = require("./src/fusioncharts.directive");
exports.FusionChartsDirective = fusioncharts_directive_1.FusionChartsDirective;
var fusioncharts_pipe_1 = require("./src/fusioncharts.pipe");
exports.FusionChartsPipe = fusioncharts_pipe_1.FusionChartsPipe;
var fusioncharts_service_1 = require("./src/fusioncharts.service");
var FusionChartsModule = FusionChartsModule_1 = (function () {
    function FusionChartsModule() {
    }
    FusionChartsModule.forRoot = function (fcCore) {
        var fcModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fcModules[_i - 1] = arguments[_i];
        }
        return {
            ngModule: FusionChartsModule_1,
            providers: [{
                    provide: fusioncharts_service_1.FusionChartsStatic,
                    useValue: {
                        core: fcCore,
                        modules: fcModules
                    }
                }]
        };
    };
    return FusionChartsModule;
}());
FusionChartsModule = FusionChartsModule_1 = __decorate([
    core_1.NgModule({
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