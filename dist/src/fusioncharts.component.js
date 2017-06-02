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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fusioncharts_service_1 = require("./fusioncharts.service");
var fusioncharts_constructor_1 = require("./fusioncharts.constructor");
var FusionChartsComponent = (function () {
    function FusionChartsComponent(element, fusionchartsService, differs, zone) {
        this.differs = differs;
        this.zone = zone;
        this.oldDataSource = this.dataSource;
        this.constructerParams = {
            type: true,
            id: true,
            width: true,
            height: true,
            renderAt: true,
            dataFormat: true,
            dataSource: true,
            events: true,
            link: true,
            showDataLoadingMessage: true,
            showChartLoadingMessage: true,
            baseChartMessageFont: true,
            baseChartMessageFontSize: true,
            baseChartMessageColor: true,
            dataLoadStartMessage: true,
            dataLoadErrorMessage: true,
            dataInvalidMessage: true,
            dataEmptyMessage: true,
            typeNotSupportedMessage: true,
            loadMessage: true,
            renderErrorMessage: true,
            containerBackgroundColor: true,
            containerBackgroundOpacity: true,
            containerClassName: true,
            baseChartMessageImageHAlign: true,
            baseChartMessageImageVAlign: true,
            baseChartMessageImageAlpha: true,
            baseChartMessageImageScale: true,
            typeNotSupportedMessageImageHAlign: true,
            typeNotSupportedMessageImageVAlign: true,
            typeNotSupportedMessageImageAlpha: true,
            typeNotSupportedMessageImageScale: true,
            dataLoadErrorMessageImageHAlign: true,
            dataLoadErrorMessageImageVAlign: true,
            dataLoadErrorMessageImageAlpha: true,
            dataLoadErrorMessageImageScale: true,
            dataLoadStartMessageImageHAlign: true,
            dataLoadStartMessageImageVAlign: true,
            dataLoadStartMessageImageAlpha: true,
            dataLoadStartMessageImageScale: true,
            dataInvalidMessageImageHAlign: true,
            dataInvalidMessageImageVAlign: true,
            dataInvalidMessageImageAlpha: true,
            dataInvalidMessageImageScale: true,
            dataEmptyMessageImageHAlign: true,
            dataEmptyMessageImageVAlign: true,
            dataEmptyMessageImageAlpha: true,
            dataEmptyMessageImageScale: true,
            renderErrorMessageImageHAlign: true,
            renderErrorMessageImageVAlign: true,
            renderErrorMessageImageAlpha: true,
            renderErrorMessageImageScale: true,
            loadMessageImageHAlign: true,
            loadMessageImageVAlign: true,
            loadMessageImageAlpha: true,
            loadMessageImageScale: true,
            chartConfig: true
        };
        this.element = element;
        this.fusionchartsService = fusionchartsService;
    }
    // @ViewChild('samplediv') chartContainer: ElementRef;
    FusionChartsComponent.prototype.ngOnInit = function () {
        this.oldDataSource = JSON.stringify(this.dataSource);
        this.placeholder = this.placeholder || 'FusionCharts will render here';
    };
    FusionChartsComponent.prototype.ngOnChanges = function (changes) {
        for (var _i = 0, _a = Object.keys(changes); _i < _a.length; _i++) {
            var i = _a[_i];
            var key = i.charAt(0).toUpperCase() + i.slice(1), THIS = this, fnName = "update" + key;
            if (THIS[fnName]) {
                THIS[fnName]();
            }
        }
    };
    FusionChartsComponent.prototype.ngDoCheck = function () {
        var data = JSON.stringify(this.dataSource);
        if (this.oldDataSource === data) {
        }
        else {
            this.updateChartData();
            this.oldDataSource = data;
        }
    };
    FusionChartsComponent.prototype.updateChartData = function () {
        var dataFormat = this.configObj.dataFormat || 'json', data = this.dataSource;
        if (this.chartObj) {
            this.chartObj.setChartData(data, dataFormat);
        }
    };
    FusionChartsComponent.prototype.updateWidth = function () {
        if (this.chartObj) {
            this.chartObj.resizeTo({
                w: this.width
            });
        }
    };
    FusionChartsComponent.prototype.updateHeight = function () {
        if (this.chartObj) {
            this.chartObj.resizeTo({
                h: this.height
            });
        }
    };
    FusionChartsComponent.prototype.updateType = function () {
        if (this.chartObj) {
            this.chartObj.chartType(this.type);
        }
    };
    FusionChartsComponent.prototype.ngAfterViewInit = function () {
        var _this = this, params = _this.constructerParams, configObj = _this.configObj || (_this.configObj = {});
        var _chartConfig = _this.chartConfig || {};
        if (typeof _chartConfig === 'string') {
            _chartConfig = JSON.parse(_chartConfig);
        }
        for (var _i = 0, _a = Object.keys(params); _i < _a.length; _i++) {
            var i = _a[_i];
            var value = _this[i] || _chartConfig[i];
            if (value) {
                configObj[i] = value;
            }
        }
        if (configObj['type']) {
            _this.chartObj = fusioncharts_constructor_1.FusionChartsConstructor(_this.fusionchartsService, configObj);
            // configObj['renderAt'] = 'container-' + _this.chartObj.id;
            // _this.containerId = _this.chartObj.id;
            this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.chartObj.render(_this.element.nativeElement.querySelector('div'));
                }, 1);
            });
        }
    };
    FusionChartsComponent.prototype.ngOnDestroy = function () {
        this.chartObj.dispose();
    };
    return FusionChartsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], FusionChartsComponent.prototype, "placeholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], FusionChartsComponent.prototype, "dataSource", void 0);
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
        template: "<div attr.id=\"container-{{containerId}}\" >{{placeholder}}</div>\n    ",
        providers: [fusioncharts_service_1.FusionChartsService],
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, fusioncharts_service_1.FusionChartsService, core_1.KeyValueDiffers, core_1.NgZone])
], FusionChartsComponent);
exports.FusionChartsComponent = FusionChartsComponent;
