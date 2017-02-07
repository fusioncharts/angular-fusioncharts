"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var fusioncharts_component_1 = require('./src/fusioncharts.component');
var fusioncharts_directive_1 = require('./src/fusioncharts.directive');
var fusioncharts_pipe_1 = require('./src/fusioncharts.pipe');
var fusioncharts_service_1 = require('./src/fusioncharts.service');
__export(require('./src/fusioncharts.component'));
__export(require('./src/fusioncharts.directive'));
__export(require('./src/fusioncharts.pipe'));
__export(require('./src/fusioncharts.service'));
var FusionChartsModule = (function () {
    function FusionChartsModule() {
    }
    FusionChartsModule.forRoot = function () {
        return {
            ngModule: FusionChartsModule,
            providers: [fusioncharts_service_1.FusionChartsService]
        };
    };
    FusionChartsModule = __decorate([
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
        }), 
        __metadata('design:paramtypes', [])
    ], FusionChartsModule);
    return FusionChartsModule;
}());
exports.FusionChartsModule = FusionChartsModule;
//# sourceMappingURL=index.js.map