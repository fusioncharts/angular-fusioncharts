import { Component, Input, ElementRef, KeyValueDiffers, NgZone, Output, EventEmitter } from '@angular/core';
import { FusionChartsService } from './fusioncharts.service';
import { FusionChartsConstructor } from './fusioncharts.constructor';
import EventsList from '../events/events';
var FusionChartsComponent = /** @class */ (function () {
    function FusionChartsComponent(element, fusionchartsService, differs, zone) {
        this.differs = differs;
        this.zone = zone;
        /**
         * All Events List
         */
        this.eventList = EventsList;
        /**
         * All events emitter
         */
        this.beforeLinkedItemOpen = new EventEmitter();
        this.linkedItemOpened = new EventEmitter();
        this.beforeLinkedItemClose = new EventEmitter();
        this.linkedItemClosed = new EventEmitter();
        this.printReadyStateChange = new EventEmitter();
        this.dataLoadRequestCompleted = new EventEmitter();
        this.dataLoadError = new EventEmitter();
        this.dataLoadCancelled = new EventEmitter();
        this.dataLoadRequestCancelled = new EventEmitter();
        this.dataUpdated = new EventEmitter();
        this.dataUpdateCancelled = new EventEmitter();
        this.dataLoadRequested = new EventEmitter();
        this.beforeDataUpdate = new EventEmitter();
        this.realTimeUpdateComplete = new EventEmitter();
        this.chartCleared = new EventEmitter();
        this.slicingEnd = new EventEmitter();
        this.slicingStart = new EventEmitter();
        this.entityRollOut = new EventEmitter();
        this.entityRollOver = new EventEmitter();
        this.entityClick = new EventEmitter();
        this.connectorRollOver = new EventEmitter();
        this.connectorRollOut = new EventEmitter();
        this.connectorClick = new EventEmitter();
        this.markerRollOver = new EventEmitter();
        this.markerRollOut = new EventEmitter();
        this.markerClick = new EventEmitter();
        this.pageNavigated = new EventEmitter();
        this.rotationEnd = new EventEmitter();
        this.rotationStart = new EventEmitter();
        this.centerLabelRollover = new EventEmitter();
        this.centerLabelRollout = new EventEmitter();
        this.centerLabelClick = new EventEmitter();
        this.centerLabelChanged = new EventEmitter();
        this.chartClick = new EventEmitter();
        this.chartMouseMove = new EventEmitter();
        this.chartRollOver = new EventEmitter();
        this.chartRollOut = new EventEmitter();
        this.backgroundLoaded = new EventEmitter();
        this.backgroundLoadError = new EventEmitter();
        this.legendItemClicked = new EventEmitter();
        this.legendItemRollover = new EventEmitter();
        this.legendItemRollout = new EventEmitter();
        this.logoRollover = new EventEmitter();
        this.logoRollout = new EventEmitter();
        this.logoClick = new EventEmitter();
        this.logoLoaded = new EventEmitter();
        this.logoLoadError = new EventEmitter();
        this.beforeExport = new EventEmitter();
        this.exported = new EventEmitter();
        this.exportCancelled = new EventEmitter();
        this.beforePrint = new EventEmitter();
        this.printComplete = new EventEmitter();
        this.printCancelled = new EventEmitter();
        this.dataLabelClick = new EventEmitter();
        this.dataLabelRollOver = new EventEmitter();
        this.dataLabelRollOut = new EventEmitter();
        this.scrollStart = new EventEmitter();
        this.scrollEnd = new EventEmitter();
        this.onScroll = new EventEmitter();
        this.zoomReset = new EventEmitter();
        this.zoomedOut = new EventEmitter();
        this.zoomedIn = new EventEmitter();
        this.zoomed = new EventEmitter();
        this.zoomModeChanged = new EventEmitter();
        this.pinned = new EventEmitter();
        this.dataRestored = new EventEmitter();
        this.beforeDataSubmit = new EventEmitter();
        this.dataSubmitError = new EventEmitter();
        this.dataSubmitted = new EventEmitter();
        this.dataSubmitCancelled = new EventEmitter();
        this.chartUpdated = new EventEmitter();
        this.nodeAdded = new EventEmitter();
        this.nodeUpdated = new EventEmitter();
        this.nodeDeleted = new EventEmitter();
        this.connectorAdded = new EventEmitter();
        this.connectorUpdated = new EventEmitter();
        this.connectorDeleted = new EventEmitter();
        this.labelAdded = new EventEmitter();
        this.labelDeleted = new EventEmitter();
        this.selectionRemoved = new EventEmitter();
        this.selectionStart = new EventEmitter();
        this.selectionEnd = new EventEmitter();
        this.labelClick = new EventEmitter();
        this.labelRollOver = new EventEmitter();
        this.labelRollOut = new EventEmitter();
        this.labelDragStart = new EventEmitter();
        this.labelDragEnd = new EventEmitter();
        this.dataplotDragStart = new EventEmitter();
        this.dataplotDragEnd = new EventEmitter();
        this.processClick = new EventEmitter();
        this.processRollOver = new EventEmitter();
        this.processRollOut = new EventEmitter();
        this.categoryClick = new EventEmitter();
        this.categoryRollOver = new EventEmitter();
        this.categoryRollOut = new EventEmitter();
        this.milestoneClick = new EventEmitter();
        this.milestoneRollOver = new EventEmitter();
        this.milestoneRollOut = new EventEmitter();
        this.chartTypeChanged = new EventEmitter();
        this.overlayButtonClick = new EventEmitter();
        this.loaded = new EventEmitter();
        this.rendered = new EventEmitter();
        this.drawComplete = new EventEmitter();
        this.renderComplete = new EventEmitter();
        this.dataInvalid = new EventEmitter();
        this.dataXMLInvalid = new EventEmitter();
        this.dataLoaded = new EventEmitter();
        this.noDataToDisplay = new EventEmitter();
        this.legendPointerDragStart = new EventEmitter();
        this.legendPointerDragStop = new EventEmitter();
        this.legendRangeUpdated = new EventEmitter();
        this.alertComplete = new EventEmitter();
        this.realTimeUpdateError = new EventEmitter();
        this.dataplotRollOver = new EventEmitter();
        this.dataplotRollOut = new EventEmitter();
        this.dataplotClick = new EventEmitter();
        this.linkClicked = new EventEmitter();
        this.beforeRender = new EventEmitter();
        this.renderCancelled = new EventEmitter();
        this.beforeResize = new EventEmitter();
        this.resized = new EventEmitter();
        this.resizeCancelled = new EventEmitter();
        this.beforeDispose = new EventEmitter();
        this.disposed = new EventEmitter();
        this.disposeCancelled = new EventEmitter();
        this.linkedChartInvoked = new EventEmitter();
        this.beforeDrillDown = new EventEmitter();
        this.drillDown = new EventEmitter();
        this.beforeDrillUp = new EventEmitter();
        this.drillUp = new EventEmitter();
        this.drillDownCancelled = new EventEmitter();
        this.drillUpCancelled = new EventEmitter();
        this.initialized = new EventEmitter();
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
            var key = i.charAt(0).toUpperCase() + i.slice(1), THIS = this, fnName = "update" + key;
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
    FusionChartsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'fusioncharts',
                    template: "\n    <div attr.id=\"container-{{ containerId }}\" style=\"width:100%;height:100%\">\n      {{ placeholder }}\n    </div>\n  ",
                    providers: [FusionChartsService]
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
        'beforeLinkedItemOpen': [{ type: Output },],
        'linkedItemOpened': [{ type: Output },],
        'beforeLinkedItemClose': [{ type: Output },],
        'linkedItemClosed': [{ type: Output },],
        'printReadyStateChange': [{ type: Output },],
        'dataLoadRequestCompleted': [{ type: Output },],
        'dataLoadError': [{ type: Output },],
        'dataLoadCancelled': [{ type: Output },],
        'dataLoadRequestCancelled': [{ type: Output },],
        'dataUpdated': [{ type: Output },],
        'dataUpdateCancelled': [{ type: Output },],
        'dataLoadRequested': [{ type: Output },],
        'beforeDataUpdate': [{ type: Output },],
        'realTimeUpdateComplete': [{ type: Output },],
        'chartCleared': [{ type: Output },],
        'slicingEnd': [{ type: Output },],
        'slicingStart': [{ type: Output },],
        'entityRollOut': [{ type: Output },],
        'entityRollOver': [{ type: Output },],
        'entityClick': [{ type: Output },],
        'connectorRollOver': [{ type: Output },],
        'connectorRollOut': [{ type: Output },],
        'connectorClick': [{ type: Output },],
        'markerRollOver': [{ type: Output },],
        'markerRollOut': [{ type: Output },],
        'markerClick': [{ type: Output },],
        'pageNavigated': [{ type: Output },],
        'rotationEnd': [{ type: Output },],
        'rotationStart': [{ type: Output },],
        'centerLabelRollover': [{ type: Output },],
        'centerLabelRollout': [{ type: Output },],
        'centerLabelClick': [{ type: Output },],
        'centerLabelChanged': [{ type: Output },],
        'chartClick': [{ type: Output },],
        'chartMouseMove': [{ type: Output },],
        'chartRollOver': [{ type: Output },],
        'chartRollOut': [{ type: Output },],
        'backgroundLoaded': [{ type: Output },],
        'backgroundLoadError': [{ type: Output },],
        'legendItemClicked': [{ type: Output },],
        'legendItemRollover': [{ type: Output },],
        'legendItemRollout': [{ type: Output },],
        'logoRollover': [{ type: Output },],
        'logoRollout': [{ type: Output },],
        'logoClick': [{ type: Output },],
        'logoLoaded': [{ type: Output },],
        'logoLoadError': [{ type: Output },],
        'beforeExport': [{ type: Output },],
        'exported': [{ type: Output },],
        'exportCancelled': [{ type: Output },],
        'beforePrint': [{ type: Output },],
        'printComplete': [{ type: Output },],
        'printCancelled': [{ type: Output },],
        'dataLabelClick': [{ type: Output },],
        'dataLabelRollOver': [{ type: Output },],
        'dataLabelRollOut': [{ type: Output },],
        'scrollStart': [{ type: Output },],
        'scrollEnd': [{ type: Output },],
        'onScroll': [{ type: Output },],
        'zoomReset': [{ type: Output },],
        'zoomedOut': [{ type: Output },],
        'zoomedIn': [{ type: Output },],
        'zoomed': [{ type: Output },],
        'zoomModeChanged': [{ type: Output },],
        'pinned': [{ type: Output },],
        'dataRestored': [{ type: Output },],
        'beforeDataSubmit': [{ type: Output },],
        'dataSubmitError': [{ type: Output },],
        'dataSubmitted': [{ type: Output },],
        'dataSubmitCancelled': [{ type: Output },],
        'chartUpdated': [{ type: Output },],
        'nodeAdded': [{ type: Output },],
        'nodeUpdated': [{ type: Output },],
        'nodeDeleted': [{ type: Output },],
        'connectorAdded': [{ type: Output },],
        'connectorUpdated': [{ type: Output },],
        'connectorDeleted': [{ type: Output },],
        'labelAdded': [{ type: Output },],
        'labelDeleted': [{ type: Output },],
        'selectionRemoved': [{ type: Output },],
        'selectionStart': [{ type: Output },],
        'selectionEnd': [{ type: Output },],
        'labelClick': [{ type: Output },],
        'labelRollOver': [{ type: Output },],
        'labelRollOut': [{ type: Output },],
        'labelDragStart': [{ type: Output },],
        'labelDragEnd': [{ type: Output },],
        'dataplotDragStart': [{ type: Output },],
        'dataplotDragEnd': [{ type: Output },],
        'processClick': [{ type: Output },],
        'processRollOver': [{ type: Output },],
        'processRollOut': [{ type: Output },],
        'categoryClick': [{ type: Output },],
        'categoryRollOver': [{ type: Output },],
        'categoryRollOut': [{ type: Output },],
        'milestoneClick': [{ type: Output },],
        'milestoneRollOver': [{ type: Output },],
        'milestoneRollOut': [{ type: Output },],
        'chartTypeChanged': [{ type: Output },],
        'overlayButtonClick': [{ type: Output },],
        'loaded': [{ type: Output },],
        'rendered': [{ type: Output },],
        'drawComplete': [{ type: Output },],
        'renderComplete': [{ type: Output },],
        'dataInvalid': [{ type: Output },],
        'dataXMLInvalid': [{ type: Output },],
        'dataLoaded': [{ type: Output },],
        'noDataToDisplay': [{ type: Output },],
        'legendPointerDragStart': [{ type: Output },],
        'legendPointerDragStop': [{ type: Output },],
        'legendRangeUpdated': [{ type: Output },],
        'alertComplete': [{ type: Output },],
        'realTimeUpdateError': [{ type: Output },],
        'dataplotRollOver': [{ type: Output },],
        'dataplotRollOut': [{ type: Output },],
        'dataplotClick': [{ type: Output },],
        'linkClicked': [{ type: Output },],
        'beforeRender': [{ type: Output },],
        'renderCancelled': [{ type: Output },],
        'beforeResize': [{ type: Output },],
        'resized': [{ type: Output },],
        'resizeCancelled': [{ type: Output },],
        'beforeDispose': [{ type: Output },],
        'disposed': [{ type: Output },],
        'disposeCancelled': [{ type: Output },],
        'linkedChartInvoked': [{ type: Output },],
        'beforeDrillDown': [{ type: Output },],
        'drillDown': [{ type: Output },],
        'beforeDrillUp': [{ type: Output },],
        'drillUp': [{ type: Output },],
        'drillDownCancelled': [{ type: Output },],
        'drillUpCancelled': [{ type: Output },],
        'initialized': [{ type: Output },],
    };
    return FusionChartsComponent;
}());
export { FusionChartsComponent };
//# sourceMappingURL=fusioncharts.component.js.map