(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng['angular2-fusioncharts'] = {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

var FusionChartsStatic = (function () {
    function FusionChartsStatic() {
    }
    return FusionChartsStatic;
}());
FusionChartsStatic.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
FusionChartsStatic.ctorParameters = function () { return []; };
var FusionChartsService = (function () {
    function FusionChartsService(FCStatic) {
        /* TODO: Need to remove this when FusionCharts becomes ES6 modules */
        if (FCStatic.core && FCStatic.core.getCurrentRenderer &&
            FCStatic.core.getCurrentRenderer() === 'javascript') {
            this._fusionchartsStatice = FCStatic.core;
        }
        else {
            this._fusionchartsStatice = FCStatic.core();
        }
        if (FCStatic && FCStatic.modules) {
            FCStatic.modules.forEach(function (FusionChartsModules) {
                FusionChartsModules(FCStatic.core);
            });
        }
    }
    FusionChartsService.prototype.getFusionChartsStatic = function () {
        return this._fusionchartsStatice;
    };
    return FusionChartsService;
}());
FusionChartsService.decorators = [
    { type: _angular_core.Injectable },
];
/** @nocollapse */
FusionChartsService.ctorParameters = function () { return [
    { type: FusionChartsStatic, },
]; };

function FusionChartsConstructor(fusionchartsService, chartConfig) {
    var FusionCharts = fusionchartsService.getFusionChartsStatic();
    return new FusionCharts(chartConfig);
}

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
FusionChartsComponent.decorators = [
    { type: _angular_core.Component, args: [{
                selector: 'fusioncharts',
                template: "<div attr.id=\"container-{{containerId}}\" >{{placeholder}}</div>\n    ",
                providers: [FusionChartsService],
            },] },
];
/** @nocollapse */
FusionChartsComponent.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
    { type: FusionChartsService, },
    { type: _angular_core.KeyValueDiffers, },
    { type: _angular_core.NgZone, },
]; };
FusionChartsComponent.propDecorators = {
    'placeholder': [{ type: _angular_core.Input },],
    'dataSource': [{ type: _angular_core.Input },],
    'type': [{ type: _angular_core.Input },],
    'id': [{ type: _angular_core.Input },],
    'width': [{ type: _angular_core.Input },],
    'height': [{ type: _angular_core.Input },],
    'renderAt': [{ type: _angular_core.Input },],
    'dataFormat': [{ type: _angular_core.Input },],
    'events': [{ type: _angular_core.Input },],
    'link': [{ type: _angular_core.Input },],
    'showDataLoadingMessage': [{ type: _angular_core.Input },],
    'showChartLoadingMessage': [{ type: _angular_core.Input },],
    'baseChartMessageFont': [{ type: _angular_core.Input },],
    'baseChartMessageFontSize': [{ type: _angular_core.Input },],
    'baseChartMessageColor': [{ type: _angular_core.Input },],
    'dataLoadStartMessage': [{ type: _angular_core.Input },],
    'dataLoadErrorMessage': [{ type: _angular_core.Input },],
    'dataInvalidMessage': [{ type: _angular_core.Input },],
    'dataEmptyMessage': [{ type: _angular_core.Input },],
    'typeNotSupportedMessage': [{ type: _angular_core.Input },],
    'loadMessage': [{ type: _angular_core.Input },],
    'renderErrorMessage': [{ type: _angular_core.Input },],
    'containerBackgroundColor': [{ type: _angular_core.Input },],
    'containerBackgroundOpacity': [{ type: _angular_core.Input },],
    'containerClassName': [{ type: _angular_core.Input },],
    'baseChartMessageImageHAlign': [{ type: _angular_core.Input },],
    'baseChartMessageImageVAlign': [{ type: _angular_core.Input },],
    'baseChartMessageImageAlpha': [{ type: _angular_core.Input },],
    'baseChartMessageImageScale': [{ type: _angular_core.Input },],
    'typeNotSupportedMessageImageHAlign': [{ type: _angular_core.Input },],
    'typeNotSupportedMessageImageVAlign': [{ type: _angular_core.Input },],
    'typeNotSupportedMessageImageAlpha': [{ type: _angular_core.Input },],
    'typeNotSupportedMessageImageScale': [{ type: _angular_core.Input },],
    'dataLoadErrorMessageImageHAlign': [{ type: _angular_core.Input },],
    'dataLoadErrorMessageImageVAlign': [{ type: _angular_core.Input },],
    'dataLoadErrorMessageImageAlpha': [{ type: _angular_core.Input },],
    'dataLoadErrorMessageImageScale': [{ type: _angular_core.Input },],
    'dataLoadStartMessageImageHAlign': [{ type: _angular_core.Input },],
    'dataLoadStartMessageImageVAlign': [{ type: _angular_core.Input },],
    'dataLoadStartMessageImageAlpha': [{ type: _angular_core.Input },],
    'dataLoadStartMessageImageScale': [{ type: _angular_core.Input },],
    'dataInvalidMessageImageHAlign': [{ type: _angular_core.Input },],
    'dataInvalidMessageImageVAlign': [{ type: _angular_core.Input },],
    'dataInvalidMessageImageAlpha': [{ type: _angular_core.Input },],
    'dataInvalidMessageImageScale': [{ type: _angular_core.Input },],
    'dataEmptyMessageImageHAlign': [{ type: _angular_core.Input },],
    'dataEmptyMessageImageVAlign': [{ type: _angular_core.Input },],
    'dataEmptyMessageImageAlpha': [{ type: _angular_core.Input },],
    'dataEmptyMessageImageScale': [{ type: _angular_core.Input },],
    'renderErrorMessageImageHAlign': [{ type: _angular_core.Input },],
    'renderErrorMessageImageVAlign': [{ type: _angular_core.Input },],
    'renderErrorMessageImageAlpha': [{ type: _angular_core.Input },],
    'renderErrorMessageImageScale': [{ type: _angular_core.Input },],
    'loadMessageImageHAlign': [{ type: _angular_core.Input },],
    'loadMessageImageVAlign': [{ type: _angular_core.Input },],
    'loadMessageImageAlpha': [{ type: _angular_core.Input },],
    'loadMessageImageScale': [{ type: _angular_core.Input },],
    'chartConfig': [{ type: _angular_core.Input },],
};

var FusionChartsDirective = (function () {
    function FusionChartsDirective(el) {
        this.el = el;
    }
    return FusionChartsDirective;
}());
FusionChartsDirective.decorators = [
    { type: _angular_core.Directive, args: [{
                selector: '[appFusionchartsDirective]'
            },] },
];
/** @nocollapse */
FusionChartsDirective.ctorParameters = function () { return [
    { type: _angular_core.ElementRef, },
]; };

/**
 * Transforms any input value
 */
var FusionChartsPipe = (function () {
    function FusionChartsPipe() {
    }
    FusionChartsPipe.prototype.transform = function (value, args) {
        return value;
    };
    return FusionChartsPipe;
}());
FusionChartsPipe.decorators = [
    { type: _angular_core.Pipe, args: [{
                name: 'fusionchartsPipe'
            },] },
    { type: _angular_core.Injectable },
];
/** @nocollapse */
FusionChartsPipe.ctorParameters = function () { return []; };

var FusionChartsModule = (function () {
    function FusionChartsModule() {
    }
    FusionChartsModule.forRoot = function (fcCore) {
        var fcModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fcModules[_i - 1] = arguments[_i];
        }
        return {
            ngModule: FusionChartsModule,
            providers: [{
                    provide: FusionChartsStatic,
                    useValue: {
                        core: fcCore,
                        modules: fcModules
                    }
                }]
        };
    };
    return FusionChartsModule;
}());
FusionChartsModule.decorators = [
    { type: _angular_core.NgModule, args: [{
                declarations: [
                    FusionChartsComponent,
                    FusionChartsDirective,
                    FusionChartsPipe
                ],
                exports: [
                    FusionChartsComponent,
                    FusionChartsDirective,
                    FusionChartsPipe
                ]
            },] },
];
/** @nocollapse */
FusionChartsModule.ctorParameters = function () { return []; };

exports.FusionChartsComponent = FusionChartsComponent;
exports.FusionChartsDirective = FusionChartsDirective;
exports.FusionChartsPipe = FusionChartsPipe;
exports.FusionChartsStatic = FusionChartsStatic;
exports.FusionChartsModule = FusionChartsModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
