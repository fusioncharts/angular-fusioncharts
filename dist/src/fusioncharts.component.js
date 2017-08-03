import { Component, Input, ElementRef, KeyValueDiffers, NgZone } from '@angular/core';
import { FusionChartsService } from './fusioncharts.service';
import { FusionChartsConstructor } from './fusioncharts.constructor';
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
            _this.chartObj = FusionChartsConstructor(_this.fusionchartsService, configObj);
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
export { FusionChartsComponent };
FusionChartsComponent.decorators = [
    { type: Component, args: [{
                selector: 'fusioncharts',
                template: "<div attr.id=\"container-{{containerId}}\" >{{placeholder}}</div>\n    ",
                providers: [FusionChartsService],
            },] },
];
/** @nocollapse */
FusionChartsComponent.ctorParameters = function () { return [
    { type: ElementRef, },
    { type: FusionChartsService, },
    { type: KeyValueDiffers, },
    { type: NgZone, },
]; };
FusionChartsComponent.propDecorators = {
    'placeholder': [{ type: Input },],
    'dataSource': [{ type: Input },],
    'type': [{ type: Input },],
    'id': [{ type: Input },],
    'width': [{ type: Input },],
    'height': [{ type: Input },],
    'renderAt': [{ type: Input },],
    'dataFormat': [{ type: Input },],
    'events': [{ type: Input },],
    'link': [{ type: Input },],
    'showDataLoadingMessage': [{ type: Input },],
    'showChartLoadingMessage': [{ type: Input },],
    'baseChartMessageFont': [{ type: Input },],
    'baseChartMessageFontSize': [{ type: Input },],
    'baseChartMessageColor': [{ type: Input },],
    'dataLoadStartMessage': [{ type: Input },],
    'dataLoadErrorMessage': [{ type: Input },],
    'dataInvalidMessage': [{ type: Input },],
    'dataEmptyMessage': [{ type: Input },],
    'typeNotSupportedMessage': [{ type: Input },],
    'loadMessage': [{ type: Input },],
    'renderErrorMessage': [{ type: Input },],
    'containerBackgroundColor': [{ type: Input },],
    'containerBackgroundOpacity': [{ type: Input },],
    'containerClassName': [{ type: Input },],
    'baseChartMessageImageHAlign': [{ type: Input },],
    'baseChartMessageImageVAlign': [{ type: Input },],
    'baseChartMessageImageAlpha': [{ type: Input },],
    'baseChartMessageImageScale': [{ type: Input },],
    'typeNotSupportedMessageImageHAlign': [{ type: Input },],
    'typeNotSupportedMessageImageVAlign': [{ type: Input },],
    'typeNotSupportedMessageImageAlpha': [{ type: Input },],
    'typeNotSupportedMessageImageScale': [{ type: Input },],
    'dataLoadErrorMessageImageHAlign': [{ type: Input },],
    'dataLoadErrorMessageImageVAlign': [{ type: Input },],
    'dataLoadErrorMessageImageAlpha': [{ type: Input },],
    'dataLoadErrorMessageImageScale': [{ type: Input },],
    'dataLoadStartMessageImageHAlign': [{ type: Input },],
    'dataLoadStartMessageImageVAlign': [{ type: Input },],
    'dataLoadStartMessageImageAlpha': [{ type: Input },],
    'dataLoadStartMessageImageScale': [{ type: Input },],
    'dataInvalidMessageImageHAlign': [{ type: Input },],
    'dataInvalidMessageImageVAlign': [{ type: Input },],
    'dataInvalidMessageImageAlpha': [{ type: Input },],
    'dataInvalidMessageImageScale': [{ type: Input },],
    'dataEmptyMessageImageHAlign': [{ type: Input },],
    'dataEmptyMessageImageVAlign': [{ type: Input },],
    'dataEmptyMessageImageAlpha': [{ type: Input },],
    'dataEmptyMessageImageScale': [{ type: Input },],
    'renderErrorMessageImageHAlign': [{ type: Input },],
    'renderErrorMessageImageVAlign': [{ type: Input },],
    'renderErrorMessageImageAlpha': [{ type: Input },],
    'renderErrorMessageImageScale': [{ type: Input },],
    'loadMessageImageHAlign': [{ type: Input },],
    'loadMessageImageVAlign': [{ type: Input },],
    'loadMessageImageAlpha': [{ type: Input },],
    'loadMessageImageScale': [{ type: Input },],
    'chartConfig': [{ type: Input },],
};
//# sourceMappingURL=fusioncharts.component.js.map