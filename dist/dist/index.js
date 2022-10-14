'use strict';

var i0 = require('@angular/core');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var FusionChartsStatic = /** @class */ (function () {
    function FusionChartsStatic() {
    }
    FusionChartsStatic.ɵfac = function FusionChartsStatic_Factory(t) { return new (t || FusionChartsStatic)(); };
    FusionChartsStatic.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FusionChartsStatic, factory: FusionChartsStatic.ɵfac });
    return FusionChartsStatic;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FusionChartsStatic, [{
        type: i0.Injectable
    }], null, null); })();
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
    FusionChartsService.ɵfac = function FusionChartsService_Factory(t) { return new (t || FusionChartsService)(i0__namespace.ɵɵinject(FusionChartsStatic)); };
    FusionChartsService.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FusionChartsService, factory: FusionChartsService.ɵfac });
    return FusionChartsService;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FusionChartsService, [{
        type: i0.Injectable
    }], function () { return [{ type: FusionChartsStatic }]; }, null); })();

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
        this.beforeLinkedItemOpen = new i0.EventEmitter();
        this.linkedItemOpened = new i0.EventEmitter();
        this.beforeLinkedItemClose = new i0.EventEmitter();
        this.linkedItemClosed = new i0.EventEmitter();
        this.printReadyStateChange = new i0.EventEmitter();
        this.dataLoadRequestCompleted = new i0.EventEmitter();
        this.dataLoadError = new i0.EventEmitter();
        this.dataLoadCancelled = new i0.EventEmitter();
        this.dataLoadRequestCancelled = new i0.EventEmitter();
        this.dataUpdated = new i0.EventEmitter();
        this.dataUpdateCancelled = new i0.EventEmitter();
        this.dataLoadRequested = new i0.EventEmitter();
        this.beforeDataUpdate = new i0.EventEmitter();
        this.realTimeUpdateComplete = new i0.EventEmitter();
        this.chartCleared = new i0.EventEmitter();
        this.slicingEnd = new i0.EventEmitter();
        this.slicingStart = new i0.EventEmitter();
        this.entityRollOut = new i0.EventEmitter();
        this.entityRollOver = new i0.EventEmitter();
        this.entityClick = new i0.EventEmitter();
        this.connectorRollOver = new i0.EventEmitter();
        this.connectorRollOut = new i0.EventEmitter();
        this.connectorClick = new i0.EventEmitter();
        this.markerRollOver = new i0.EventEmitter();
        this.markerRollOut = new i0.EventEmitter();
        this.markerClick = new i0.EventEmitter();
        this.pageNavigated = new i0.EventEmitter();
        this.rotationEnd = new i0.EventEmitter();
        this.rotationStart = new i0.EventEmitter();
        this.centerLabelRollover = new i0.EventEmitter();
        this.centerLabelRollout = new i0.EventEmitter();
        this.centerLabelClick = new i0.EventEmitter();
        this.centerLabelChanged = new i0.EventEmitter();
        this.chartClick = new i0.EventEmitter();
        this.chartMouseMove = new i0.EventEmitter();
        this.chartRollOver = new i0.EventEmitter();
        this.chartRollOut = new i0.EventEmitter();
        this.backgroundLoaded = new i0.EventEmitter();
        this.backgroundLoadError = new i0.EventEmitter();
        this.legendItemClicked = new i0.EventEmitter();
        this.legendItemRollover = new i0.EventEmitter();
        this.legendItemRollout = new i0.EventEmitter();
        this.logoRollover = new i0.EventEmitter();
        this.logoRollout = new i0.EventEmitter();
        this.logoClick = new i0.EventEmitter();
        this.logoLoaded = new i0.EventEmitter();
        this.logoLoadError = new i0.EventEmitter();
        this.beforeExport = new i0.EventEmitter();
        this.exported = new i0.EventEmitter();
        this.exportCancelled = new i0.EventEmitter();
        this.beforePrint = new i0.EventEmitter();
        this.printComplete = new i0.EventEmitter();
        this.printCancelled = new i0.EventEmitter();
        this.dataLabelClick = new i0.EventEmitter();
        this.dataLabelRollOver = new i0.EventEmitter();
        this.dataLabelRollOut = new i0.EventEmitter();
        this.scrollStart = new i0.EventEmitter();
        this.scrollEnd = new i0.EventEmitter();
        this.onScroll = new i0.EventEmitter();
        this.zoomReset = new i0.EventEmitter();
        this.zoomedOut = new i0.EventEmitter();
        this.zoomedIn = new i0.EventEmitter();
        this.zoomed = new i0.EventEmitter();
        this.zoomModeChanged = new i0.EventEmitter();
        this.pinned = new i0.EventEmitter();
        this.dataRestored = new i0.EventEmitter();
        this.beforeDataSubmit = new i0.EventEmitter();
        this.dataSubmitError = new i0.EventEmitter();
        this.dataSubmitted = new i0.EventEmitter();
        this.dataSubmitCancelled = new i0.EventEmitter();
        this.chartUpdated = new i0.EventEmitter();
        this.nodeAdded = new i0.EventEmitter();
        this.nodeUpdated = new i0.EventEmitter();
        this.nodeDeleted = new i0.EventEmitter();
        this.connectorAdded = new i0.EventEmitter();
        this.connectorUpdated = new i0.EventEmitter();
        this.connectorDeleted = new i0.EventEmitter();
        this.labelAdded = new i0.EventEmitter();
        this.labelDeleted = new i0.EventEmitter();
        this.selectionRemoved = new i0.EventEmitter();
        this.selectionStart = new i0.EventEmitter();
        this.selectionEnd = new i0.EventEmitter();
        this.labelClick = new i0.EventEmitter();
        this.labelRollOver = new i0.EventEmitter();
        this.labelRollOut = new i0.EventEmitter();
        this.labelDragStart = new i0.EventEmitter();
        this.labelDragEnd = new i0.EventEmitter();
        this.dataplotDragStart = new i0.EventEmitter();
        this.dataplotDragEnd = new i0.EventEmitter();
        this.processClick = new i0.EventEmitter();
        this.processRollOver = new i0.EventEmitter();
        this.processRollOut = new i0.EventEmitter();
        this.categoryClick = new i0.EventEmitter();
        this.categoryRollOver = new i0.EventEmitter();
        this.categoryRollOut = new i0.EventEmitter();
        this.milestoneClick = new i0.EventEmitter();
        this.milestoneRollOver = new i0.EventEmitter();
        this.milestoneRollOut = new i0.EventEmitter();
        this.chartTypeChanged = new i0.EventEmitter();
        this.overlayButtonClick = new i0.EventEmitter();
        this.loaded = new i0.EventEmitter();
        this.rendered = new i0.EventEmitter();
        this.drawComplete = new i0.EventEmitter();
        this.renderComplete = new i0.EventEmitter();
        this.dataInvalid = new i0.EventEmitter();
        this.dataXMLInvalid = new i0.EventEmitter();
        this.dataLoaded = new i0.EventEmitter();
        this.noDataToDisplay = new i0.EventEmitter();
        this.legendPointerDragStart = new i0.EventEmitter();
        this.legendPointerDragStop = new i0.EventEmitter();
        this.legendRangeUpdated = new i0.EventEmitter();
        this.alertComplete = new i0.EventEmitter();
        this.realTimeUpdateError = new i0.EventEmitter();
        this.dataplotRollOver = new i0.EventEmitter();
        this.dataplotRollOut = new i0.EventEmitter();
        this.dataplotClick = new i0.EventEmitter();
        this.linkClicked = new i0.EventEmitter();
        this.beforeRender = new i0.EventEmitter();
        this.renderCancelled = new i0.EventEmitter();
        this.beforeResize = new i0.EventEmitter();
        this.resized = new i0.EventEmitter();
        this.resizeCancelled = new i0.EventEmitter();
        this.beforeDispose = new i0.EventEmitter();
        this.disposed = new i0.EventEmitter();
        this.disposeCancelled = new i0.EventEmitter();
        this.linkedChartInvoked = new i0.EventEmitter();
        this.beforeDrillDown = new i0.EventEmitter();
        this.drillDown = new i0.EventEmitter();
        this.beforeDrillUp = new i0.EventEmitter();
        this.drillUp = new i0.EventEmitter();
        this.drillDownCancelled = new i0.EventEmitter();
        this.drillUpCancelled = new i0.EventEmitter();
        this.initialized = new i0.EventEmitter();
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
    FusionChartsComponent.prototype.checkIfDataTableExists = function (dataSource) {
        if (dataSource && dataSource.data && dataSource.data._dataStore) {
            return true;
        }
        return false;
    };
    FusionChartsComponent.prototype.cloneDataSource = function (obj) {
        var type = typeof obj;
        if (type === 'string' ||
            type === 'number' ||
            type === 'function' ||
            type === 'boolean') {
            return obj;
        }
        if (obj === null || obj === undefined) {
            return obj;
        }
        if (Array.isArray(obj)) {
            var arr = [];
            for (var i = 0; i < obj.length; i++) {
                arr.push(this.cloneDataSource(obj[i]));
            }
            return arr;
        }
        if (typeof obj === 'object') {
            var clonedObj = {};
            for (var prop in obj) {
                // Edge case handling for DataTable
                if (prop === 'data') {
                    if (obj[prop]._dataStore) {
                        clonedObj[prop] = "-";
                    }
                    else {
                        clonedObj[prop] = this.cloneDataSource(obj[prop]);
                    }
                    continue;
                }
                clonedObj[prop] = this.cloneDataSource(obj[prop]);
            }
            return clonedObj;
        }
    };
    FusionChartsComponent.prototype.ngOnInit = function () {
        if (this.checkIfDataTableExists(this.dataSource)) {
            this.oldDataSource = JSON.stringify(this.cloneDataSource(this.dataSource));
        }
        else {
            this.oldDataSource = JSON.stringify(this.dataSource);
        }
        this.placeholder = this.placeholder || 'FusionCharts will render here';
    };
    FusionChartsComponent.prototype.ngOnChanges = function (changes) {
        for (var _i = 0, _a = Object.keys(changes); _i < _a.length; _i++) {
            var i = _a[_i];
            var key = i.charAt(0).toUpperCase() + i.slice(1), THIS = this, fnName = "update".concat(key);
            if (THIS[fnName]) {
                THIS[fnName]();
            }
        }
    };
    FusionChartsComponent.prototype.ngDoCheck = function () {
        var data;
        if (this.checkIfDataTableExists(this.dataSource)) {
            data = JSON.stringify(this.cloneDataSource(this.dataSource));
        }
        else {
            data = JSON.stringify(this.dataSource);
        }
        if (this.oldDataSource !== data ||
            this.oldDataTable !== this.dataSource.data) {
            this.oldDataTable = this.dataSource && this.dataSource.data;
            this.oldDataSource = data;
            this.updateChartData();
        }
    };
    FusionChartsComponent.prototype.updateChartData = function () {
        var dataFormat = this.configObj && this.configObj.dataFormat
            ? this.configObj.dataFormat
            : 'json', data = this.dataSource;
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
    FusionChartsComponent.prototype.generateEventsCallback = function (eventList) {
        var _this_1 = this;
        var events = {};
        eventList.forEach(function (eventName) {
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
        this.chartObj && this.chartObj.dispose();
    };
    FusionChartsComponent.ɵfac = function FusionChartsComponent_Factory(t) { return new (t || FusionChartsComponent)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef), i0__namespace.ɵɵdirectiveInject(FusionChartsService), i0__namespace.ɵɵdirectiveInject(i0__namespace.KeyValueDiffers), i0__namespace.ɵɵdirectiveInject(i0__namespace.NgZone)); };
    FusionChartsComponent.ɵcmp = /*@__PURE__*/ i0__namespace.ɵɵdefineComponent({ type: FusionChartsComponent, selectors: [["fusioncharts"]], inputs: { placeholder: "placeholder", dataSource: "dataSource", type: "type", id: "id", width: "width", height: "height", renderAt: "renderAt", dataFormat: "dataFormat", events: "events", link: "link", showDataLoadingMessage: "showDataLoadingMessage", showChartLoadingMessage: "showChartLoadingMessage", baseChartMessageFont: "baseChartMessageFont", baseChartMessageFontSize: "baseChartMessageFontSize", baseChartMessageColor: "baseChartMessageColor", dataLoadStartMessage: "dataLoadStartMessage", dataLoadErrorMessage: "dataLoadErrorMessage", dataInvalidMessage: "dataInvalidMessage", dataEmptyMessage: "dataEmptyMessage", typeNotSupportedMessage: "typeNotSupportedMessage", loadMessage: "loadMessage", renderErrorMessage: "renderErrorMessage", containerBackgroundColor: "containerBackgroundColor", containerBackgroundOpacity: "containerBackgroundOpacity", containerClassName: "containerClassName", baseChartMessageImageHAlign: "baseChartMessageImageHAlign", baseChartMessageImageVAlign: "baseChartMessageImageVAlign", baseChartMessageImageAlpha: "baseChartMessageImageAlpha", baseChartMessageImageScale: "baseChartMessageImageScale", typeNotSupportedMessageImageHAlign: "typeNotSupportedMessageImageHAlign", typeNotSupportedMessageImageVAlign: "typeNotSupportedMessageImageVAlign", typeNotSupportedMessageImageAlpha: "typeNotSupportedMessageImageAlpha", typeNotSupportedMessageImageScale: "typeNotSupportedMessageImageScale", dataLoadErrorMessageImageHAlign: "dataLoadErrorMessageImageHAlign", dataLoadErrorMessageImageVAlign: "dataLoadErrorMessageImageVAlign", dataLoadErrorMessageImageAlpha: "dataLoadErrorMessageImageAlpha", dataLoadErrorMessageImageScale: "dataLoadErrorMessageImageScale", dataLoadStartMessageImageHAlign: "dataLoadStartMessageImageHAlign", dataLoadStartMessageImageVAlign: "dataLoadStartMessageImageVAlign", dataLoadStartMessageImageAlpha: "dataLoadStartMessageImageAlpha", dataLoadStartMessageImageScale: "dataLoadStartMessageImageScale", dataInvalidMessageImageHAlign: "dataInvalidMessageImageHAlign", dataInvalidMessageImageVAlign: "dataInvalidMessageImageVAlign", dataInvalidMessageImageAlpha: "dataInvalidMessageImageAlpha", dataInvalidMessageImageScale: "dataInvalidMessageImageScale", dataEmptyMessageImageHAlign: "dataEmptyMessageImageHAlign", dataEmptyMessageImageVAlign: "dataEmptyMessageImageVAlign", dataEmptyMessageImageAlpha: "dataEmptyMessageImageAlpha", dataEmptyMessageImageScale: "dataEmptyMessageImageScale", renderErrorMessageImageHAlign: "renderErrorMessageImageHAlign", renderErrorMessageImageVAlign: "renderErrorMessageImageVAlign", renderErrorMessageImageAlpha: "renderErrorMessageImageAlpha", renderErrorMessageImageScale: "renderErrorMessageImageScale", loadMessageImageHAlign: "loadMessageImageHAlign", loadMessageImageVAlign: "loadMessageImageVAlign", loadMessageImageAlpha: "loadMessageImageAlpha", loadMessageImageScale: "loadMessageImageScale", chartConfig: "chartConfig" }, outputs: { beforeLinkedItemOpen: "beforeLinkedItemOpen", linkedItemOpened: "linkedItemOpened", beforeLinkedItemClose: "beforeLinkedItemClose", linkedItemClosed: "linkedItemClosed", printReadyStateChange: "printReadyStateChange", dataLoadRequestCompleted: "dataLoadRequestCompleted", dataLoadError: "dataLoadError", dataLoadCancelled: "dataLoadCancelled", dataLoadRequestCancelled: "dataLoadRequestCancelled", dataUpdated: "dataUpdated", dataUpdateCancelled: "dataUpdateCancelled", dataLoadRequested: "dataLoadRequested", beforeDataUpdate: "beforeDataUpdate", realTimeUpdateComplete: "realTimeUpdateComplete", chartCleared: "chartCleared", slicingEnd: "slicingEnd", slicingStart: "slicingStart", entityRollOut: "entityRollOut", entityRollOver: "entityRollOver", entityClick: "entityClick", connectorRollOver: "connectorRollOver", connectorRollOut: "connectorRollOut", connectorClick: "connectorClick", markerRollOver: "markerRollOver", markerRollOut: "markerRollOut", markerClick: "markerClick", pageNavigated: "pageNavigated", rotationEnd: "rotationEnd", rotationStart: "rotationStart", centerLabelRollover: "centerLabelRollover", centerLabelRollout: "centerLabelRollout", centerLabelClick: "centerLabelClick", centerLabelChanged: "centerLabelChanged", chartClick: "chartClick", chartMouseMove: "chartMouseMove", chartRollOver: "chartRollOver", chartRollOut: "chartRollOut", backgroundLoaded: "backgroundLoaded", backgroundLoadError: "backgroundLoadError", legendItemClicked: "legendItemClicked", legendItemRollover: "legendItemRollover", legendItemRollout: "legendItemRollout", logoRollover: "logoRollover", logoRollout: "logoRollout", logoClick: "logoClick", logoLoaded: "logoLoaded", logoLoadError: "logoLoadError", beforeExport: "beforeExport", exported: "exported", exportCancelled: "exportCancelled", beforePrint: "beforePrint", printComplete: "printComplete", printCancelled: "printCancelled", dataLabelClick: "dataLabelClick", dataLabelRollOver: "dataLabelRollOver", dataLabelRollOut: "dataLabelRollOut", scrollStart: "scrollStart", scrollEnd: "scrollEnd", onScroll: "onScroll", zoomReset: "zoomReset", zoomedOut: "zoomedOut", zoomedIn: "zoomedIn", zoomed: "zoomed", zoomModeChanged: "zoomModeChanged", pinned: "pinned", dataRestored: "dataRestored", beforeDataSubmit: "beforeDataSubmit", dataSubmitError: "dataSubmitError", dataSubmitted: "dataSubmitted", dataSubmitCancelled: "dataSubmitCancelled", chartUpdated: "chartUpdated", nodeAdded: "nodeAdded", nodeUpdated: "nodeUpdated", nodeDeleted: "nodeDeleted", connectorAdded: "connectorAdded", connectorUpdated: "connectorUpdated", connectorDeleted: "connectorDeleted", labelAdded: "labelAdded", labelDeleted: "labelDeleted", selectionRemoved: "selectionRemoved", selectionStart: "selectionStart", selectionEnd: "selectionEnd", labelClick: "labelClick", labelRollOver: "labelRollOver", labelRollOut: "labelRollOut", labelDragStart: "labelDragStart", labelDragEnd: "labelDragEnd", dataplotDragStart: "dataplotDragStart", dataplotDragEnd: "dataplotDragEnd", processClick: "processClick", processRollOver: "processRollOver", processRollOut: "processRollOut", categoryClick: "categoryClick", categoryRollOver: "categoryRollOver", categoryRollOut: "categoryRollOut", milestoneClick: "milestoneClick", milestoneRollOver: "milestoneRollOver", milestoneRollOut: "milestoneRollOut", chartTypeChanged: "chartTypeChanged", overlayButtonClick: "overlayButtonClick", loaded: "loaded", rendered: "rendered", drawComplete: "drawComplete", renderComplete: "renderComplete", dataInvalid: "dataInvalid", dataXMLInvalid: "dataXMLInvalid", dataLoaded: "dataLoaded", noDataToDisplay: "noDataToDisplay", legendPointerDragStart: "legendPointerDragStart", legendPointerDragStop: "legendPointerDragStop", legendRangeUpdated: "legendRangeUpdated", alertComplete: "alertComplete", realTimeUpdateError: "realTimeUpdateError", dataplotRollOver: "dataplotRollOver", dataplotRollOut: "dataplotRollOut", dataplotClick: "dataplotClick", linkClicked: "linkClicked", beforeRender: "beforeRender", renderCancelled: "renderCancelled", beforeResize: "beforeResize", resized: "resized", resizeCancelled: "resizeCancelled", beforeDispose: "beforeDispose", disposed: "disposed", disposeCancelled: "disposeCancelled", linkedChartInvoked: "linkedChartInvoked", beforeDrillDown: "beforeDrillDown", drillDown: "drillDown", beforeDrillUp: "beforeDrillUp", drillUp: "drillUp", drillDownCancelled: "drillDownCancelled", drillUpCancelled: "drillUpCancelled", initialized: "initialized" }, features: [i0__namespace.ɵɵProvidersFeature([FusionChartsService]), i0__namespace.ɵɵNgOnChangesFeature], decls: 2, vars: 2, consts: [[2, "width", "100%", "height", "100%"]], template: function FusionChartsComponent_Template(rf, ctx) { if (rf & 1) {
            i0__namespace.ɵɵelementStart(0, "div", 0);
            i0__namespace.ɵɵtext(1);
            i0__namespace.ɵɵelementEnd();
        } if (rf & 2) {
            i0__namespace.ɵɵattributeInterpolate1("id", "container-", ctx.containerId, "");
            i0__namespace.ɵɵadvance(1);
            i0__namespace.ɵɵtextInterpolate1(" ", ctx.placeholder, " ");
        } }, encapsulation: 2 });
    return FusionChartsComponent;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FusionChartsComponent, [{
        type: i0.Component,
        args: [{
                selector: 'fusioncharts',
                template: "\n    <div attr.id=\"container-{{ containerId }}\" style=\"width:100%;height:100%\">\n      {{ placeholder }}\n    </div>\n  ",
                providers: [FusionChartsService]
            }]
    }], function () { return [{ type: i0__namespace.ElementRef }, { type: FusionChartsService }, { type: i0__namespace.KeyValueDiffers }, { type: i0__namespace.NgZone }]; }, { placeholder: [{
            type: i0.Input
        }], dataSource: [{
            type: i0.Input
        }], type: [{
            type: i0.Input
        }], id: [{
            type: i0.Input
        }], width: [{
            type: i0.Input
        }], height: [{
            type: i0.Input
        }], renderAt: [{
            type: i0.Input
        }], dataFormat: [{
            type: i0.Input
        }], events: [{
            type: i0.Input
        }], link: [{
            type: i0.Input
        }], showDataLoadingMessage: [{
            type: i0.Input
        }], showChartLoadingMessage: [{
            type: i0.Input
        }], baseChartMessageFont: [{
            type: i0.Input
        }], baseChartMessageFontSize: [{
            type: i0.Input
        }], baseChartMessageColor: [{
            type: i0.Input
        }], dataLoadStartMessage: [{
            type: i0.Input
        }], dataLoadErrorMessage: [{
            type: i0.Input
        }], dataInvalidMessage: [{
            type: i0.Input
        }], dataEmptyMessage: [{
            type: i0.Input
        }], typeNotSupportedMessage: [{
            type: i0.Input
        }], loadMessage: [{
            type: i0.Input
        }], renderErrorMessage: [{
            type: i0.Input
        }], containerBackgroundColor: [{
            type: i0.Input
        }], containerBackgroundOpacity: [{
            type: i0.Input
        }], containerClassName: [{
            type: i0.Input
        }], baseChartMessageImageHAlign: [{
            type: i0.Input
        }], baseChartMessageImageVAlign: [{
            type: i0.Input
        }], baseChartMessageImageAlpha: [{
            type: i0.Input
        }], baseChartMessageImageScale: [{
            type: i0.Input
        }], typeNotSupportedMessageImageHAlign: [{
            type: i0.Input
        }], typeNotSupportedMessageImageVAlign: [{
            type: i0.Input
        }], typeNotSupportedMessageImageAlpha: [{
            type: i0.Input
        }], typeNotSupportedMessageImageScale: [{
            type: i0.Input
        }], dataLoadErrorMessageImageHAlign: [{
            type: i0.Input
        }], dataLoadErrorMessageImageVAlign: [{
            type: i0.Input
        }], dataLoadErrorMessageImageAlpha: [{
            type: i0.Input
        }], dataLoadErrorMessageImageScale: [{
            type: i0.Input
        }], dataLoadStartMessageImageHAlign: [{
            type: i0.Input
        }], dataLoadStartMessageImageVAlign: [{
            type: i0.Input
        }], dataLoadStartMessageImageAlpha: [{
            type: i0.Input
        }], dataLoadStartMessageImageScale: [{
            type: i0.Input
        }], dataInvalidMessageImageHAlign: [{
            type: i0.Input
        }], dataInvalidMessageImageVAlign: [{
            type: i0.Input
        }], dataInvalidMessageImageAlpha: [{
            type: i0.Input
        }], dataInvalidMessageImageScale: [{
            type: i0.Input
        }], dataEmptyMessageImageHAlign: [{
            type: i0.Input
        }], dataEmptyMessageImageVAlign: [{
            type: i0.Input
        }], dataEmptyMessageImageAlpha: [{
            type: i0.Input
        }], dataEmptyMessageImageScale: [{
            type: i0.Input
        }], renderErrorMessageImageHAlign: [{
            type: i0.Input
        }], renderErrorMessageImageVAlign: [{
            type: i0.Input
        }], renderErrorMessageImageAlpha: [{
            type: i0.Input
        }], renderErrorMessageImageScale: [{
            type: i0.Input
        }], loadMessageImageHAlign: [{
            type: i0.Input
        }], loadMessageImageVAlign: [{
            type: i0.Input
        }], loadMessageImageAlpha: [{
            type: i0.Input
        }], loadMessageImageScale: [{
            type: i0.Input
        }], chartConfig: [{
            type: i0.Input
        }], beforeLinkedItemOpen: [{
            type: i0.Output
        }], linkedItemOpened: [{
            type: i0.Output
        }], beforeLinkedItemClose: [{
            type: i0.Output
        }], linkedItemClosed: [{
            type: i0.Output
        }], printReadyStateChange: [{
            type: i0.Output
        }], dataLoadRequestCompleted: [{
            type: i0.Output
        }], dataLoadError: [{
            type: i0.Output
        }], dataLoadCancelled: [{
            type: i0.Output
        }], dataLoadRequestCancelled: [{
            type: i0.Output
        }], dataUpdated: [{
            type: i0.Output
        }], dataUpdateCancelled: [{
            type: i0.Output
        }], dataLoadRequested: [{
            type: i0.Output
        }], beforeDataUpdate: [{
            type: i0.Output
        }], realTimeUpdateComplete: [{
            type: i0.Output
        }], chartCleared: [{
            type: i0.Output
        }], slicingEnd: [{
            type: i0.Output
        }], slicingStart: [{
            type: i0.Output
        }], entityRollOut: [{
            type: i0.Output
        }], entityRollOver: [{
            type: i0.Output
        }], entityClick: [{
            type: i0.Output
        }], connectorRollOver: [{
            type: i0.Output
        }], connectorRollOut: [{
            type: i0.Output
        }], connectorClick: [{
            type: i0.Output
        }], markerRollOver: [{
            type: i0.Output
        }], markerRollOut: [{
            type: i0.Output
        }], markerClick: [{
            type: i0.Output
        }], pageNavigated: [{
            type: i0.Output
        }], rotationEnd: [{
            type: i0.Output
        }], rotationStart: [{
            type: i0.Output
        }], centerLabelRollover: [{
            type: i0.Output
        }], centerLabelRollout: [{
            type: i0.Output
        }], centerLabelClick: [{
            type: i0.Output
        }], centerLabelChanged: [{
            type: i0.Output
        }], chartClick: [{
            type: i0.Output
        }], chartMouseMove: [{
            type: i0.Output
        }], chartRollOver: [{
            type: i0.Output
        }], chartRollOut: [{
            type: i0.Output
        }], backgroundLoaded: [{
            type: i0.Output
        }], backgroundLoadError: [{
            type: i0.Output
        }], legendItemClicked: [{
            type: i0.Output
        }], legendItemRollover: [{
            type: i0.Output
        }], legendItemRollout: [{
            type: i0.Output
        }], logoRollover: [{
            type: i0.Output
        }], logoRollout: [{
            type: i0.Output
        }], logoClick: [{
            type: i0.Output
        }], logoLoaded: [{
            type: i0.Output
        }], logoLoadError: [{
            type: i0.Output
        }], beforeExport: [{
            type: i0.Output
        }], exported: [{
            type: i0.Output
        }], exportCancelled: [{
            type: i0.Output
        }], beforePrint: [{
            type: i0.Output
        }], printComplete: [{
            type: i0.Output
        }], printCancelled: [{
            type: i0.Output
        }], dataLabelClick: [{
            type: i0.Output
        }], dataLabelRollOver: [{
            type: i0.Output
        }], dataLabelRollOut: [{
            type: i0.Output
        }], scrollStart: [{
            type: i0.Output
        }], scrollEnd: [{
            type: i0.Output
        }], onScroll: [{
            type: i0.Output
        }], zoomReset: [{
            type: i0.Output
        }], zoomedOut: [{
            type: i0.Output
        }], zoomedIn: [{
            type: i0.Output
        }], zoomed: [{
            type: i0.Output
        }], zoomModeChanged: [{
            type: i0.Output
        }], pinned: [{
            type: i0.Output
        }], dataRestored: [{
            type: i0.Output
        }], beforeDataSubmit: [{
            type: i0.Output
        }], dataSubmitError: [{
            type: i0.Output
        }], dataSubmitted: [{
            type: i0.Output
        }], dataSubmitCancelled: [{
            type: i0.Output
        }], chartUpdated: [{
            type: i0.Output
        }], nodeAdded: [{
            type: i0.Output
        }], nodeUpdated: [{
            type: i0.Output
        }], nodeDeleted: [{
            type: i0.Output
        }], connectorAdded: [{
            type: i0.Output
        }], connectorUpdated: [{
            type: i0.Output
        }], connectorDeleted: [{
            type: i0.Output
        }], labelAdded: [{
            type: i0.Output
        }], labelDeleted: [{
            type: i0.Output
        }], selectionRemoved: [{
            type: i0.Output
        }], selectionStart: [{
            type: i0.Output
        }], selectionEnd: [{
            type: i0.Output
        }], labelClick: [{
            type: i0.Output
        }], labelRollOver: [{
            type: i0.Output
        }], labelRollOut: [{
            type: i0.Output
        }], labelDragStart: [{
            type: i0.Output
        }], labelDragEnd: [{
            type: i0.Output
        }], dataplotDragStart: [{
            type: i0.Output
        }], dataplotDragEnd: [{
            type: i0.Output
        }], processClick: [{
            type: i0.Output
        }], processRollOver: [{
            type: i0.Output
        }], processRollOut: [{
            type: i0.Output
        }], categoryClick: [{
            type: i0.Output
        }], categoryRollOver: [{
            type: i0.Output
        }], categoryRollOut: [{
            type: i0.Output
        }], milestoneClick: [{
            type: i0.Output
        }], milestoneRollOver: [{
            type: i0.Output
        }], milestoneRollOut: [{
            type: i0.Output
        }], chartTypeChanged: [{
            type: i0.Output
        }], overlayButtonClick: [{
            type: i0.Output
        }], loaded: [{
            type: i0.Output
        }], rendered: [{
            type: i0.Output
        }], drawComplete: [{
            type: i0.Output
        }], renderComplete: [{
            type: i0.Output
        }], dataInvalid: [{
            type: i0.Output
        }], dataXMLInvalid: [{
            type: i0.Output
        }], dataLoaded: [{
            type: i0.Output
        }], noDataToDisplay: [{
            type: i0.Output
        }], legendPointerDragStart: [{
            type: i0.Output
        }], legendPointerDragStop: [{
            type: i0.Output
        }], legendRangeUpdated: [{
            type: i0.Output
        }], alertComplete: [{
            type: i0.Output
        }], realTimeUpdateError: [{
            type: i0.Output
        }], dataplotRollOver: [{
            type: i0.Output
        }], dataplotRollOut: [{
            type: i0.Output
        }], dataplotClick: [{
            type: i0.Output
        }], linkClicked: [{
            type: i0.Output
        }], beforeRender: [{
            type: i0.Output
        }], renderCancelled: [{
            type: i0.Output
        }], beforeResize: [{
            type: i0.Output
        }], resized: [{
            type: i0.Output
        }], resizeCancelled: [{
            type: i0.Output
        }], beforeDispose: [{
            type: i0.Output
        }], disposed: [{
            type: i0.Output
        }], disposeCancelled: [{
            type: i0.Output
        }], linkedChartInvoked: [{
            type: i0.Output
        }], beforeDrillDown: [{
            type: i0.Output
        }], drillDown: [{
            type: i0.Output
        }], beforeDrillUp: [{
            type: i0.Output
        }], drillUp: [{
            type: i0.Output
        }], drillDownCancelled: [{
            type: i0.Output
        }], drillUpCancelled: [{
            type: i0.Output
        }], initialized: [{
            type: i0.Output
        }] }); })();

var FusionChartsDirective = /** @class */ (function () {
    function FusionChartsDirective(el) {
        this.el = el;
    }
    FusionChartsDirective.ɵfac = function FusionChartsDirective_Factory(t) { return new (t || FusionChartsDirective)(i0__namespace.ɵɵdirectiveInject(i0__namespace.ElementRef)); };
    FusionChartsDirective.ɵdir = /*@__PURE__*/ i0__namespace.ɵɵdefineDirective({ type: FusionChartsDirective, selectors: [["", "appFusionchartsDirective", ""]] });
    return FusionChartsDirective;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FusionChartsDirective, [{
        type: i0.Directive,
        args: [{
                selector: '[appFusionchartsDirective]'
            }]
    }], function () { return [{ type: i0__namespace.ElementRef }]; }, null); })();

/**
 * Transforms any input value
 */
var FusionChartsPipe = /** @class */ (function () {
    function FusionChartsPipe() {
    }
    FusionChartsPipe.prototype.transform = function (value, args) {
        return value;
    };
    FusionChartsPipe.ɵfac = function FusionChartsPipe_Factory(t) { return new (t || FusionChartsPipe)(); };
    FusionChartsPipe.ɵpipe = /*@__PURE__*/ i0__namespace.ɵɵdefinePipe({ name: "fusionchartsPipe", type: FusionChartsPipe, pure: true });
    FusionChartsPipe.ɵprov = /*@__PURE__*/ i0__namespace.ɵɵdefineInjectable({ token: FusionChartsPipe, factory: FusionChartsPipe.ɵfac });
    return FusionChartsPipe;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FusionChartsPipe, [{
        type: i0.Pipe,
        args: [{
                name: 'fusionchartsPipe'
            }]
    }, {
        type: i0.Injectable
    }], null, null); })();

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
    FusionChartsModule.ɵfac = function FusionChartsModule_Factory(t) { return new (t || FusionChartsModule)(); };
    FusionChartsModule.ɵmod = /*@__PURE__*/ i0__namespace.ɵɵdefineNgModule({ type: FusionChartsModule });
    FusionChartsModule.ɵinj = /*@__PURE__*/ i0__namespace.ɵɵdefineInjector({ providers: [
            FusionChartsService,
            FusionChartsStatic
        ] });
    return FusionChartsModule;
}());
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(FusionChartsModule, [{
        type: i0.NgModule,
        args: [{
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
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(FusionChartsModule, { declarations: [FusionChartsComponent,
        FusionChartsDirective,
        FusionChartsPipe], exports: [FusionChartsComponent,
        FusionChartsDirective,
        FusionChartsPipe] }); })();

exports.FusionChartsComponent = FusionChartsComponent;
exports.FusionChartsDirective = FusionChartsDirective;
exports.FusionChartsModule = FusionChartsModule;
exports.FusionChartsPipe = FusionChartsPipe;
exports.FusionChartsStatic = FusionChartsStatic;
