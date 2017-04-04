(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
var FusionCharts = require("fusioncharts");
var FusionChartsModule = FusionChartsModule_1 = (function () {
    function FusionChartsModule() {
    }
    // static forRoot(...fusionchartsModules: Array<Function>): ModuleWithProviders {
    // fusionchartsModules.forEach((FusionChartsModules: any) => {
    //     FusionChartsModules(FusionCharts)
    // });
    // static forRoot(...config: any[]): ModuleWithProviders {
    //   // console.log(config);
    //   // if (config) {
    //   //   for (var i in config['modules']) {
    //   //     config['modules'](config['core'])
    //   //   }        
    //   // }
    //   return {
    //     ngModule: FusionChartsModule,
    //     providers: [{ 
    //       provide: FusionChartsStatic,
    //       useValue: FusionCharts
    //     }]
    //   };
    // }
    FusionChartsModule.forRoot = function (routes, config) {
        // static forRoot(): ModuleWithProviders {
        return {
            ngModule: FusionChartsModule_1,
            providers: [{
                    provide: fusioncharts_service_1.FusionChartsStatic,
                    useValue: FusionCharts
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
exports.default = FusionCharts;
var FusionChartsModule_1;

})));
