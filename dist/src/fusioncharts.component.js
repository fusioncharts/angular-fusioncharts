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
var core_1 = require("@angular/core");
var FusionCharts = require("fusioncharts");
var FusionChartsComponent = (function () {
    function FusionChartsComponent(element) {
        this.element = element;
    }
    FusionChartsComponent.prototype.ngAfterViewInit = function () {
        var _this = this, element = _this.element.nativeElement, _chartConfig = _this.chartConfig || {}, configObj;
        if (typeof _chartConfig === 'string') {
            _chartConfig = JSON.parse(_chartConfig);
        }
        configObj = {
            type: _this.type || _chartConfig['type'],
            height: _this.height || _chartConfig['height'],
            width: _this.width || _chartConfig['width'],
            id: _this.id || (_chartConfig && _chartConfig['id']),
            dataFormat: _this.dataFormat || _chartConfig['dataFormat'],
            dataSource: _this.dataSource || _chartConfig['dataSource']
        };
        if (configObj.type) {
            _this.chartObj = new FusionCharts(configObj);
            _this.chartObj.render(element.childNodes[0]);
        }
    };
    return FusionChartsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "renderAt", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataFormat", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataSource", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "events", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "link", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FusionChartsComponent.prototype, "showDataLoadingMessage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], FusionChartsComponent.prototype, "showChartLoadingMessage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "baseChartMessageFont", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "baseChartMessageFontSize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "baseChartMessageColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataLoadStartMessage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataLoadErrorMessage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataInvalidMessage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataEmptyMessage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "typeNotSupportedMessage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "loadMessage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "renderErrorMessage", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "containerBackgroundColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "containerBackgroundOpacity", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "containerClassName", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "baseChartMessageImageHAlign", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "baseChartMessageImageVAlign", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FusionChartsComponent.prototype, "baseChartMessageImageAlpha", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FusionChartsComponent.prototype, "baseChartMessageImageScale", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "typeNotSupportedMessageImageHAlign", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "typeNotSupportedMessageImageVAlign", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FusionChartsComponent.prototype, "typeNotSupportedMessageImageAlpha", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FusionChartsComponent.prototype, "typeNotSupportedMessageImageScale", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataLoadErrorMessageImageHAlign", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataLoadErrorMessageImageVAlign", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FusionChartsComponent.prototype, "dataLoadErrorMessageImageAlpha", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FusionChartsComponent.prototype, "dataLoadErrorMessageImageScale", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataLoadStartMessageImageHAlign", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataLoadStartMessageImageVAlign", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FusionChartsComponent.prototype, "dataLoadStartMessageImageAlpha", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FusionChartsComponent.prototype, "dataLoadStartMessageImageScale", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataInvalidMessageImageHAlign", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataInvalidMessageImageVAlign", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FusionChartsComponent.prototype, "dataInvalidMessageImageAlpha", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FusionChartsComponent.prototype, "dataInvalidMessageImageScale", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataEmptyMessageImageHAlign", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "dataEmptyMessageImageVAlign", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FusionChartsComponent.prototype, "dataEmptyMessageImageAlpha", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FusionChartsComponent.prototype, "dataEmptyMessageImageScale", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "renderErrorMessageImageHAlign", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "renderErrorMessageImageVAlign", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FusionChartsComponent.prototype, "renderErrorMessageImageAlpha", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FusionChartsComponent.prototype, "renderErrorMessageImageScale", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "loadMessageImageHAlign", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "loadMessageImageVAlign", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FusionChartsComponent.prototype, "loadMessageImageAlpha", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], FusionChartsComponent.prototype, "loadMessageImageScale", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "chartConfig", void 0);
FusionChartsComponent = __decorate([
    core_1.Component({
        selector: 'fusioncharts',
        template: "<div>FusionCharts will render here</div>"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], FusionChartsComponent);
exports.FusionChartsComponent = FusionChartsComponent;
//# sourceMappingURL=fusioncharts.component.js.map