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
var core_1 = require('@angular/core');
var AngularFusionCharts = (function () {
    function AngularFusionCharts() {
    }
    AngularFusionCharts.prototype.ngAfterViewInit = function () {
        var component = this;
        FusionCharts.ready(function () {
            var chart = new FusionCharts({
                type: component.type,
                renderAt: component.id,
                width: component.width,
                height: component.height,
                dataFormat: component.dataFormat,
                dataSource: component.dataSource
            })
                .render();
        });
    };
    AngularFusionCharts.prototype.ngOnChanges = function (changes) {
        console.log(changes);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "id", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "width", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "height", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "type", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "dataFormat", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "dataSource", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "dataset", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "categories", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "chart", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "linkeddata", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "trendlines", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "vtrendlines", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "annotations", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "colorange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "lineset", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "axis", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "connectors", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "pointers", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "value", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "processes", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "tasks", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "rows", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "columns", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "map", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "markers", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], AngularFusionCharts.prototype, "theme", void 0);
    AngularFusionCharts = __decorate([
        core_1.Component({
            selector: 'fusioncharts',
            template: '<h1>FusionCharts will render here</h1>'
        }), 
        __metadata('design:paramtypes', [])
    ], AngularFusionCharts);
    return AngularFusionCharts;
}());
exports.AngularFusionCharts = AngularFusionCharts;
//# sourceMappingURL=angular-fusioncharts.js.map