(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng['angular-fusioncharts'] = {}),global.ng.core));
}(this, (function (exports,_angular_core) { 'use strict';

var FusionChartsStatic = /** @class */ (function () {
    function FusionChartsStatic() {
    }
    FusionChartsStatic.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    FusionChartsStatic.ctorParameters = function () { return []; };
    return FusionChartsStatic;
}());
var FusionChartsService = /** @class */ (function () {
    function FusionChartsService(FCStatic) {
        var fcRoot;
        if (FusionChartsService.isFCRootSet()) {
            fcRoot = FusionChartsService.getFCRoot();
        }
        else {
            fcRoot = {
                core: FCStatic.core,
                modules: FCStatic.modules
            };
        }
        this.resolveFusionCharts(fcRoot.core, fcRoot.modules);
    }
    FusionChartsService.setFCRoot = function (fcRoot) {
        FusionChartsService._fcRoot = fcRoot;
    };
    FusionChartsService.getFCRoot = function () {
        return FusionChartsService._fcRoot;
    };
    FusionChartsService.isFCRootSet = function () {
        return !!FusionChartsService._fcRoot;
    };
    FusionChartsService.prototype.resolveFusionCharts = function (core, modules) {
        if (core && core.id && core.id === 'FusionCharts') {
            this._fusionchartsStatice = core;
        }
        else {
            this._fusionchartsStatice = core();
        }
        if (modules) {
            modules.forEach(function (FusionChartsModules) {
                if ((FusionChartsModules.getName && FusionChartsModules.getType) ||
                    (FusionChartsModules.name && FusionChartsModules.type)) {
                    core.addDep(FusionChartsModules);
                }
                else {
                    FusionChartsModules(core);
                }
            });
        }
    };
    FusionChartsService.prototype.getFusionChartsStatic = function () {
        return this._fusionchartsStatice;
    };
    FusionChartsService.prototype.getNextItemCount = function () {
        FusionChartsService.itemCount++;
        return FusionChartsService.itemCount;
    };
    FusionChartsService._fcRoot = null;
    FusionChartsService.itemCount = 0;
    FusionChartsService.decorators = [
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    FusionChartsService.ctorParameters = function () { return [
        { type: FusionChartsStatic, },
    ]; };
    return FusionChartsService;
}());

function FusionChartsConstructor(fusionchartsService, chartConfig) {
    var FusionCharts = fusionchartsService.getFusionChartsStatic();
    return new FusionCharts(chartConfig);
}

var eventList = [
    "beforeLinkedItemOpen",
    "linkedItemOpened",
    "beforeLinkedItemClose",
    "linkedItemClosed",
    "printReadyStateChange",
    "dataLoadRequestCompleted",
    "dataLoadError",
    "dataLoadCancelled",
    "dataLoadRequestCancelled",
    "dataUpdated",
    "dataUpdateCancelled",
    "dataLoadRequested",
    "beforeDataUpdate",
    "realTimeUpdateComplete",
    "chartCleared",
    "slicingEnd",
    "slicingStart",
    "entityRollOut",
    "entityRollOver",
    "entityClick",
    "connectorRollOver",
    "connectorRollOut",
    "connectorClick",
    "markerRollOver",
    "markerRollOut",
    "markerClick",
    "pageNavigated",
    "rotationEnd",
    "rotationStart",
    "centerLabelRollover",
    "centerLabelRollout",
    "centerLabelClick",
    "centerLabelChanged",
    "chartClick",
    "chartMouseMove",
    "chartRollOver",
    "chartRollOut",
    "backgroundLoaded",
    "backgroundLoadError",
    "legendItemClicked",
    "legendItemRollover",
    "legendItemRollout",
    "logoRollover",
    "logoRollout",
    "logoClick",
    "logoLoaded",
    "logoLoadError",
    "beforeExport",
    "exported",
    "exportCancelled",
    "beforePrint",
    "printComplete",
    "printCancelled",
    "dataLabelClick",
    "dataLabelRollOver",
    "dataLabelRollOut",
    "scrollStart",
    "scrollEnd",
    "onScroll",
    "zoomReset",
    "zoomedOut",
    "zoomedIn",
    "zoomed",
    "zoomModeChanged",
    "pinned",
    "dataRestored",
    "beforeDataSubmit",
    "dataSubmitError",
    "dataSubmitted",
    "dataSubmitCancelled",
    "chartUpdated",
    "nodeAdded",
    "nodeUpdated",
    "nodeDeleted",
    "connectorAdded",
    "connectorUpdated",
    "connectorDeleted",
    "labelAdded",
    "labelDeleted",
    "selectionRemoved",
    "selectionStart",
    "selectionEnd",
    "labelClick",
    "labelRollOver",
    "labelRollOut",
    "labelDragStart",
    "labelDragEnd",
    "dataplotDragStart",
    "dataplotDragEnd",
    "processClick",
    "processRollOver",
    "processRollOut",
    "categoryClick",
    "categoryRollOver",
    "categoryRollOut",
    "milestoneClick",
    "milestoneRollOver",
    "milestoneRollOut",
    "chartTypeChanged",
    "overlayButtonClick",
    "loaded",
    "rendered",
    "drawComplete",
    "renderComplete",
    "dataInvalid",
    "dataXMLInvalid",
    "dataLoaded",
    "noDataToDisplay",
    "legendPointerDragStart",
    "legendPointerDragStop",
    "legendRangeUpdated",
    "alertComplete",
    "realTimeUpdateError",
    "dataplotRollOver",
    "dataplotRollOut",
    "dataplotClick",
    "linkClicked",
    "beforeRender",
    "renderCancelled",
    "beforeResize",
    "resized",
    "resizeCancelled",
    "beforeDispose",
    "disposed",
    "disposeCancelled",
    "linkedChartInvoked",
    "beforeDrillDown",
    "drillDown",
    "beforeDrillUp",
    "drillUp",
    "drillDownCancelled",
    "drillUpCancelled",
];

var FusionChartsComponent = /** @class */ (function () {
    function FusionChartsComponent(element, fusionchartsService, differs, zone) {
        this.differs = differs;
        this.zone = zone;
        /**
         * All Events List
         */
        this.eventList = eventList;
        /**
         * All events emitter
         */
        this.beforeLinkedItemOpen = new _angular_core.EventEmitter();
        this.linkedItemOpened = new _angular_core.EventEmitter();
        this.beforeLinkedItemClose = new _angular_core.EventEmitter();
        this.linkedItemClosed = new _angular_core.EventEmitter();
        this.printReadyStateChange = new _angular_core.EventEmitter();
        this.dataLoadRequestCompleted = new _angular_core.EventEmitter();
        this.dataLoadError = new _angular_core.EventEmitter();
        this.dataLoadCancelled = new _angular_core.EventEmitter();
        this.dataLoadRequestCancelled = new _angular_core.EventEmitter();
        this.dataUpdated = new _angular_core.EventEmitter();
        this.dataUpdateCancelled = new _angular_core.EventEmitter();
        this.dataLoadRequested = new _angular_core.EventEmitter();
        this.beforeDataUpdate = new _angular_core.EventEmitter();
        this.realTimeUpdateComplete = new _angular_core.EventEmitter();
        this.chartCleared = new _angular_core.EventEmitter();
        this.slicingEnd = new _angular_core.EventEmitter();
        this.slicingStart = new _angular_core.EventEmitter();
        this.entityRollOut = new _angular_core.EventEmitter();
        this.entityRollOver = new _angular_core.EventEmitter();
        this.entityClick = new _angular_core.EventEmitter();
        this.connectorRollOver = new _angular_core.EventEmitter();
        this.connectorRollOut = new _angular_core.EventEmitter();
        this.connectorClick = new _angular_core.EventEmitter();
        this.markerRollOver = new _angular_core.EventEmitter();
        this.markerRollOut = new _angular_core.EventEmitter();
        this.markerClick = new _angular_core.EventEmitter();
        this.pageNavigated = new _angular_core.EventEmitter();
        this.rotationEnd = new _angular_core.EventEmitter();
        this.rotationStart = new _angular_core.EventEmitter();
        this.centerLabelRollover = new _angular_core.EventEmitter();
        this.centerLabelRollout = new _angular_core.EventEmitter();
        this.centerLabelClick = new _angular_core.EventEmitter();
        this.centerLabelChanged = new _angular_core.EventEmitter();
        this.chartClick = new _angular_core.EventEmitter();
        this.chartMouseMove = new _angular_core.EventEmitter();
        this.chartRollOver = new _angular_core.EventEmitter();
        this.chartRollOut = new _angular_core.EventEmitter();
        this.backgroundLoaded = new _angular_core.EventEmitter();
        this.backgroundLoadError = new _angular_core.EventEmitter();
        this.legendItemClicked = new _angular_core.EventEmitter();
        this.legendItemRollover = new _angular_core.EventEmitter();
        this.legendItemRollout = new _angular_core.EventEmitter();
        this.logoRollover = new _angular_core.EventEmitter();
        this.logoRollout = new _angular_core.EventEmitter();
        this.logoClick = new _angular_core.EventEmitter();
        this.logoLoaded = new _angular_core.EventEmitter();
        this.logoLoadError = new _angular_core.EventEmitter();
        this.beforeExport = new _angular_core.EventEmitter();
        this.exported = new _angular_core.EventEmitter();
        this.exportCancelled = new _angular_core.EventEmitter();
        this.beforePrint = new _angular_core.EventEmitter();
        this.printComplete = new _angular_core.EventEmitter();
        this.printCancelled = new _angular_core.EventEmitter();
        this.dataLabelClick = new _angular_core.EventEmitter();
        this.dataLabelRollOver = new _angular_core.EventEmitter();
        this.dataLabelRollOut = new _angular_core.EventEmitter();
        this.scrollStart = new _angular_core.EventEmitter();
        this.scrollEnd = new _angular_core.EventEmitter();
        this.onScroll = new _angular_core.EventEmitter();
        this.zoomReset = new _angular_core.EventEmitter();
        this.zoomedOut = new _angular_core.EventEmitter();
        this.zoomedIn = new _angular_core.EventEmitter();
        this.zoomed = new _angular_core.EventEmitter();
        this.zoomModeChanged = new _angular_core.EventEmitter();
        this.pinned = new _angular_core.EventEmitter();
        this.dataRestored = new _angular_core.EventEmitter();
        this.beforeDataSubmit = new _angular_core.EventEmitter();
        this.dataSubmitError = new _angular_core.EventEmitter();
        this.dataSubmitted = new _angular_core.EventEmitter();
        this.dataSubmitCancelled = new _angular_core.EventEmitter();
        this.chartUpdated = new _angular_core.EventEmitter();
        this.nodeAdded = new _angular_core.EventEmitter();
        this.nodeUpdated = new _angular_core.EventEmitter();
        this.nodeDeleted = new _angular_core.EventEmitter();
        this.connectorAdded = new _angular_core.EventEmitter();
        this.connectorUpdated = new _angular_core.EventEmitter();
        this.connectorDeleted = new _angular_core.EventEmitter();
        this.labelAdded = new _angular_core.EventEmitter();
        this.labelDeleted = new _angular_core.EventEmitter();
        this.selectionRemoved = new _angular_core.EventEmitter();
        this.selectionStart = new _angular_core.EventEmitter();
        this.selectionEnd = new _angular_core.EventEmitter();
        this.labelClick = new _angular_core.EventEmitter();
        this.labelRollOver = new _angular_core.EventEmitter();
        this.labelRollOut = new _angular_core.EventEmitter();
        this.labelDragStart = new _angular_core.EventEmitter();
        this.labelDragEnd = new _angular_core.EventEmitter();
        this.dataplotDragStart = new _angular_core.EventEmitter();
        this.dataplotDragEnd = new _angular_core.EventEmitter();
        this.processClick = new _angular_core.EventEmitter();
        this.processRollOver = new _angular_core.EventEmitter();
        this.processRollOut = new _angular_core.EventEmitter();
        this.categoryClick = new _angular_core.EventEmitter();
        this.categoryRollOver = new _angular_core.EventEmitter();
        this.categoryRollOut = new _angular_core.EventEmitter();
        this.milestoneClick = new _angular_core.EventEmitter();
        this.milestoneRollOver = new _angular_core.EventEmitter();
        this.milestoneRollOut = new _angular_core.EventEmitter();
        this.chartTypeChanged = new _angular_core.EventEmitter();
        this.overlayButtonClick = new _angular_core.EventEmitter();
        this.loaded = new _angular_core.EventEmitter();
        this.rendered = new _angular_core.EventEmitter();
        this.drawComplete = new _angular_core.EventEmitter();
        this.renderComplete = new _angular_core.EventEmitter();
        this.dataInvalid = new _angular_core.EventEmitter();
        this.dataXMLInvalid = new _angular_core.EventEmitter();
        this.dataLoaded = new _angular_core.EventEmitter();
        this.noDataToDisplay = new _angular_core.EventEmitter();
        this.legendPointerDragStart = new _angular_core.EventEmitter();
        this.legendPointerDragStop = new _angular_core.EventEmitter();
        this.legendRangeUpdated = new _angular_core.EventEmitter();
        this.alertComplete = new _angular_core.EventEmitter();
        this.realTimeUpdateError = new _angular_core.EventEmitter();
        this.dataplotRollOver = new _angular_core.EventEmitter();
        this.dataplotRollOut = new _angular_core.EventEmitter();
        this.dataplotClick = new _angular_core.EventEmitter();
        this.linkClicked = new _angular_core.EventEmitter();
        this.beforeRender = new _angular_core.EventEmitter();
        this.renderCancelled = new _angular_core.EventEmitter();
        this.beforeResize = new _angular_core.EventEmitter();
        this.resized = new _angular_core.EventEmitter();
        this.resizeCancelled = new _angular_core.EventEmitter();
        this.beforeDispose = new _angular_core.EventEmitter();
        this.disposed = new _angular_core.EventEmitter();
        this.disposeCancelled = new _angular_core.EventEmitter();
        this.linkedChartInvoked = new _angular_core.EventEmitter();
        this.beforeDrillDown = new _angular_core.EventEmitter();
        this.drillDown = new _angular_core.EventEmitter();
        this.beforeDrillUp = new _angular_core.EventEmitter();
        this.drillUp = new _angular_core.EventEmitter();
        this.drillDownCancelled = new _angular_core.EventEmitter();
        this.drillUpCancelled = new _angular_core.EventEmitter();
        this.initialized = new _angular_core.EventEmitter();
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
        this.containerId = fusionchartsService.getNextItemCount();
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
    /*
      // Removed as some events will be fired
      attachChartEventListener(chartObj: any, eventName: string){
          chartObj.addEventListener(eventName, (eventObj:any, dataObj:any) => {
              let fEventObj:FusionChartsEvent = { eventObj:{}, dataObj:{} };
              if(eventObj) fEventObj.eventObj  = eventObj;
              if(dataObj) fEventObj.dataObj = dataObj;
              this[eventName].emit(fEventObj);
          });
      }
  
      attachAllChartEvents(chartObj:any, eventList:Array<string>){
          eventList.forEach(eventName => {
              this.attachChartEventListener(chartObj, eventName);
          });
      }
      */
    FusionChartsComponent.prototype.generateEventsCallback = function (eventList$$1) {
        var _this_1 = this;
        var events = {};
        eventList$$1.forEach(function (eventName) {
            events[eventName] = function (eventObj, dataObj) {
                var fEventObj = { eventObj: {}, dataObj: {} };
                if (eventObj)
                    fEventObj.eventObj = eventObj;
                if (dataObj)
                    fEventObj.dataObj = dataObj;
                _this_1[eventName].emit(fEventObj);
            };
        });
        return events;
    };
    FusionChartsComponent.prototype.ngAfterViewInit = function () {
        var _this_1 = this;
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
            var events = _this.generateEventsCallback(_this.eventList);
            if (!configObj['events']) {
                configObj['events'] = events;
            }
            else {
                configObj['events'] = Object.assign(events, configObj['events']);
            }
            // configObj['renderAt'] = 'container-' + _this.chartObj.id;
            // _this.containerId = _this.chartObj.id;
            this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.chartObj = FusionChartsConstructor(_this.fusionchartsService, configObj);
                    _this_1.initialized.emit({ chart: _this.chartObj });
                    _this.chartObj.render(_this.element.nativeElement.querySelector('div'));
                }, 1);
            });
        }
    };
    FusionChartsComponent.prototype.ngOnDestroy = function () {
        this.chartObj.dispose();
    };
    FusionChartsComponent.decorators = [
        { type: _angular_core.Component, args: [{
                    selector: 'fusioncharts',
                    template: "\n    <div attr.id=\"container-{{containerId}}\" style=\"width:100%;height:100%\">\n      {{ placeholder }}\n    </div>\n  ",
                    providers: [FusionChartsService]
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
        'beforeLinkedItemOpen': [{ type: _angular_core.Output },],
        'linkedItemOpened': [{ type: _angular_core.Output },],
        'beforeLinkedItemClose': [{ type: _angular_core.Output },],
        'linkedItemClosed': [{ type: _angular_core.Output },],
        'printReadyStateChange': [{ type: _angular_core.Output },],
        'dataLoadRequestCompleted': [{ type: _angular_core.Output },],
        'dataLoadError': [{ type: _angular_core.Output },],
        'dataLoadCancelled': [{ type: _angular_core.Output },],
        'dataLoadRequestCancelled': [{ type: _angular_core.Output },],
        'dataUpdated': [{ type: _angular_core.Output },],
        'dataUpdateCancelled': [{ type: _angular_core.Output },],
        'dataLoadRequested': [{ type: _angular_core.Output },],
        'beforeDataUpdate': [{ type: _angular_core.Output },],
        'realTimeUpdateComplete': [{ type: _angular_core.Output },],
        'chartCleared': [{ type: _angular_core.Output },],
        'slicingEnd': [{ type: _angular_core.Output },],
        'slicingStart': [{ type: _angular_core.Output },],
        'entityRollOut': [{ type: _angular_core.Output },],
        'entityRollOver': [{ type: _angular_core.Output },],
        'entityClick': [{ type: _angular_core.Output },],
        'connectorRollOver': [{ type: _angular_core.Output },],
        'connectorRollOut': [{ type: _angular_core.Output },],
        'connectorClick': [{ type: _angular_core.Output },],
        'markerRollOver': [{ type: _angular_core.Output },],
        'markerRollOut': [{ type: _angular_core.Output },],
        'markerClick': [{ type: _angular_core.Output },],
        'pageNavigated': [{ type: _angular_core.Output },],
        'rotationEnd': [{ type: _angular_core.Output },],
        'rotationStart': [{ type: _angular_core.Output },],
        'centerLabelRollover': [{ type: _angular_core.Output },],
        'centerLabelRollout': [{ type: _angular_core.Output },],
        'centerLabelClick': [{ type: _angular_core.Output },],
        'centerLabelChanged': [{ type: _angular_core.Output },],
        'chartClick': [{ type: _angular_core.Output },],
        'chartMouseMove': [{ type: _angular_core.Output },],
        'chartRollOver': [{ type: _angular_core.Output },],
        'chartRollOut': [{ type: _angular_core.Output },],
        'backgroundLoaded': [{ type: _angular_core.Output },],
        'backgroundLoadError': [{ type: _angular_core.Output },],
        'legendItemClicked': [{ type: _angular_core.Output },],
        'legendItemRollover': [{ type: _angular_core.Output },],
        'legendItemRollout': [{ type: _angular_core.Output },],
        'logoRollover': [{ type: _angular_core.Output },],
        'logoRollout': [{ type: _angular_core.Output },],
        'logoClick': [{ type: _angular_core.Output },],
        'logoLoaded': [{ type: _angular_core.Output },],
        'logoLoadError': [{ type: _angular_core.Output },],
        'beforeExport': [{ type: _angular_core.Output },],
        'exported': [{ type: _angular_core.Output },],
        'exportCancelled': [{ type: _angular_core.Output },],
        'beforePrint': [{ type: _angular_core.Output },],
        'printComplete': [{ type: _angular_core.Output },],
        'printCancelled': [{ type: _angular_core.Output },],
        'dataLabelClick': [{ type: _angular_core.Output },],
        'dataLabelRollOver': [{ type: _angular_core.Output },],
        'dataLabelRollOut': [{ type: _angular_core.Output },],
        'scrollStart': [{ type: _angular_core.Output },],
        'scrollEnd': [{ type: _angular_core.Output },],
        'onScroll': [{ type: _angular_core.Output },],
        'zoomReset': [{ type: _angular_core.Output },],
        'zoomedOut': [{ type: _angular_core.Output },],
        'zoomedIn': [{ type: _angular_core.Output },],
        'zoomed': [{ type: _angular_core.Output },],
        'zoomModeChanged': [{ type: _angular_core.Output },],
        'pinned': [{ type: _angular_core.Output },],
        'dataRestored': [{ type: _angular_core.Output },],
        'beforeDataSubmit': [{ type: _angular_core.Output },],
        'dataSubmitError': [{ type: _angular_core.Output },],
        'dataSubmitted': [{ type: _angular_core.Output },],
        'dataSubmitCancelled': [{ type: _angular_core.Output },],
        'chartUpdated': [{ type: _angular_core.Output },],
        'nodeAdded': [{ type: _angular_core.Output },],
        'nodeUpdated': [{ type: _angular_core.Output },],
        'nodeDeleted': [{ type: _angular_core.Output },],
        'connectorAdded': [{ type: _angular_core.Output },],
        'connectorUpdated': [{ type: _angular_core.Output },],
        'connectorDeleted': [{ type: _angular_core.Output },],
        'labelAdded': [{ type: _angular_core.Output },],
        'labelDeleted': [{ type: _angular_core.Output },],
        'selectionRemoved': [{ type: _angular_core.Output },],
        'selectionStart': [{ type: _angular_core.Output },],
        'selectionEnd': [{ type: _angular_core.Output },],
        'labelClick': [{ type: _angular_core.Output },],
        'labelRollOver': [{ type: _angular_core.Output },],
        'labelRollOut': [{ type: _angular_core.Output },],
        'labelDragStart': [{ type: _angular_core.Output },],
        'labelDragEnd': [{ type: _angular_core.Output },],
        'dataplotDragStart': [{ type: _angular_core.Output },],
        'dataplotDragEnd': [{ type: _angular_core.Output },],
        'processClick': [{ type: _angular_core.Output },],
        'processRollOver': [{ type: _angular_core.Output },],
        'processRollOut': [{ type: _angular_core.Output },],
        'categoryClick': [{ type: _angular_core.Output },],
        'categoryRollOver': [{ type: _angular_core.Output },],
        'categoryRollOut': [{ type: _angular_core.Output },],
        'milestoneClick': [{ type: _angular_core.Output },],
        'milestoneRollOver': [{ type: _angular_core.Output },],
        'milestoneRollOut': [{ type: _angular_core.Output },],
        'chartTypeChanged': [{ type: _angular_core.Output },],
        'overlayButtonClick': [{ type: _angular_core.Output },],
        'loaded': [{ type: _angular_core.Output },],
        'rendered': [{ type: _angular_core.Output },],
        'drawComplete': [{ type: _angular_core.Output },],
        'renderComplete': [{ type: _angular_core.Output },],
        'dataInvalid': [{ type: _angular_core.Output },],
        'dataXMLInvalid': [{ type: _angular_core.Output },],
        'dataLoaded': [{ type: _angular_core.Output },],
        'noDataToDisplay': [{ type: _angular_core.Output },],
        'legendPointerDragStart': [{ type: _angular_core.Output },],
        'legendPointerDragStop': [{ type: _angular_core.Output },],
        'legendRangeUpdated': [{ type: _angular_core.Output },],
        'alertComplete': [{ type: _angular_core.Output },],
        'realTimeUpdateError': [{ type: _angular_core.Output },],
        'dataplotRollOver': [{ type: _angular_core.Output },],
        'dataplotRollOut': [{ type: _angular_core.Output },],
        'dataplotClick': [{ type: _angular_core.Output },],
        'linkClicked': [{ type: _angular_core.Output },],
        'beforeRender': [{ type: _angular_core.Output },],
        'renderCancelled': [{ type: _angular_core.Output },],
        'beforeResize': [{ type: _angular_core.Output },],
        'resized': [{ type: _angular_core.Output },],
        'resizeCancelled': [{ type: _angular_core.Output },],
        'beforeDispose': [{ type: _angular_core.Output },],
        'disposed': [{ type: _angular_core.Output },],
        'disposeCancelled': [{ type: _angular_core.Output },],
        'linkedChartInvoked': [{ type: _angular_core.Output },],
        'beforeDrillDown': [{ type: _angular_core.Output },],
        'drillDown': [{ type: _angular_core.Output },],
        'beforeDrillUp': [{ type: _angular_core.Output },],
        'drillUp': [{ type: _angular_core.Output },],
        'drillDownCancelled': [{ type: _angular_core.Output },],
        'drillUpCancelled': [{ type: _angular_core.Output },],
        'initialized': [{ type: _angular_core.Output },],
    };
    return FusionChartsComponent;
}());

var FusionChartsDirective = /** @class */ (function () {
    function FusionChartsDirective(el) {
        this.el = el;
    }
    FusionChartsDirective.decorators = [
        { type: _angular_core.Directive, args: [{
                    selector: '[appFusionchartsDirective]'
                },] },
    ];
    /** @nocollapse */
    FusionChartsDirective.ctorParameters = function () { return [
        { type: _angular_core.ElementRef, },
    ]; };
    return FusionChartsDirective;
}());

/**
 * Transforms any input value
 */
var FusionChartsPipe = /** @class */ (function () {
    function FusionChartsPipe() {
    }
    FusionChartsPipe.prototype.transform = function (value, args) {
        return value;
    };
    FusionChartsPipe.decorators = [
        { type: _angular_core.Pipe, args: [{
                    name: 'fusionchartsPipe'
                },] },
        { type: _angular_core.Injectable },
    ];
    /** @nocollapse */
    FusionChartsPipe.ctorParameters = function () { return []; };
    return FusionChartsPipe;
}());

var FusionChartsModule = /** @class */ (function () {
    function FusionChartsModule() {
    }
    // Keep this for backward compatible
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
    FusionChartsModule.fcRoot = function (fcCore) {
        var fcModules = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            fcModules[_i - 1] = arguments[_i];
        }
        FusionChartsService.setFCRoot({
            core: fcCore,
            modules: fcModules
        });
    };
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
                    ],
                    providers: [
                        FusionChartsService,
                        FusionChartsStatic
                    ]
                },] },
    ];
    /** @nocollapse */
    FusionChartsModule.ctorParameters = function () { return []; };
    return FusionChartsModule;
}());

exports.FusionChartsComponent = FusionChartsComponent;
exports.FusionChartsDirective = FusionChartsDirective;
exports.FusionChartsPipe = FusionChartsPipe;
exports.FusionChartsStatic = FusionChartsStatic;
exports.FusionChartsModule = FusionChartsModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
