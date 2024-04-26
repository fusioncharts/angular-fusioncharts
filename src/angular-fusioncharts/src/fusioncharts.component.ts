import {
  Component,
  Input,
  ElementRef,
  OnInit,
  OnChanges,
  DoCheck,
  AfterViewInit,
  OnDestroy,
  KeyValueDiffers,
  ViewChild,
  NgZone,
  Output,
  EventEmitter
} from '@angular/core';

import { FusionChartsService } from './fusioncharts.service';
import { FusionChartsConstructor } from './fusioncharts.constructor';
import FusionChartsEvent from '../interfaces/FusionChartsEvent';
import FusionChartInstance from '../interfaces/FusionChartInstance';
import EventsList from '../events/events';
@Component({
  selector: 'fusioncharts',
  template: `
    <div attr.id="container-{{ containerId }}" style="width:100%;height:100%">
      {{ placeholder }}
    </div>
  `,
  providers: [FusionChartsService]
})
class FusionChartsComponent
  implements OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy {
  chartObj: any;

  @Input() placeholder: string;
  @Input() dataSource: any;
  @Input() type: string;
  @Input() id: string;
  @Input() width: string;
  @Input() height: string;
  @Input() renderAt: string;
  @Input() dataFormat: string;
  @Input() events: string;
  @Input() link: string;
  @Input() showDataLoadingMessage: boolean;
  @Input() showChartLoadingMessage: boolean;
  @Input() baseChartMessageFont: string;
  @Input() baseChartMessageFontSize: string;
  @Input() baseChartMessageColor: string;
  @Input() dataLoadStartMessage: string;
  @Input() dataLoadErrorMessage: string;
  @Input() dataInvalidMessage: string;
  @Input() dataEmptyMessage: string;
  @Input() typeNotSupportedMessage: string;
  @Input() loadMessage: string;
  @Input() renderErrorMessage: string;
  @Input() containerBackgroundColor: string;
  @Input() containerBackgroundOpacity: string;
  @Input() containerClassName: string;
  @Input() baseChartMessageImageHAlign: string;
  @Input() baseChartMessageImageVAlign: string;
  @Input() baseChartMessageImageAlpha: number;
  @Input() baseChartMessageImageScale: number;
  @Input() typeNotSupportedMessageImageHAlign: string;
  @Input() typeNotSupportedMessageImageVAlign: string;
  @Input() typeNotSupportedMessageImageAlpha: number;
  @Input() typeNotSupportedMessageImageScale: number;
  @Input() dataLoadErrorMessageImageHAlign: string;
  @Input() dataLoadErrorMessageImageVAlign: string;
  @Input() dataLoadErrorMessageImageAlpha: number;
  @Input() dataLoadErrorMessageImageScale: number;
  @Input() dataLoadStartMessageImageHAlign: string;
  @Input() dataLoadStartMessageImageVAlign: string;
  @Input() dataLoadStartMessageImageAlpha: number;
  @Input() dataLoadStartMessageImageScale: number;
  @Input() dataInvalidMessageImageHAlign: string;
  @Input() dataInvalidMessageImageVAlign: string;
  @Input() dataInvalidMessageImageAlpha: number;
  @Input() dataInvalidMessageImageScale: number;
  @Input() dataEmptyMessageImageHAlign: string;
  @Input() dataEmptyMessageImageVAlign: string;
  @Input() dataEmptyMessageImageAlpha: number;
  @Input() dataEmptyMessageImageScale: number;
  @Input() renderErrorMessageImageHAlign: string;
  @Input() renderErrorMessageImageVAlign: string;
  @Input() renderErrorMessageImageAlpha: number;
  @Input() renderErrorMessageImageScale: number;
  @Input() loadMessageImageHAlign: string;
  @Input() loadMessageImageVAlign: string;
  @Input() loadMessageImageAlpha: number;
  @Input() loadMessageImageScale: number;
  @Input() chartConfig: any;

  /**
   * All Events List
   */

  private eventList: Array<string> = EventsList;

  /**
   * All events emitter
   */
  @Output() beforeLinkedItemOpen = new EventEmitter<FusionChartsEvent>();
  @Output() linkedItemOpened = new EventEmitter<FusionChartsEvent>();
  @Output() beforeLinkedItemClose = new EventEmitter<FusionChartsEvent>();
  @Output() linkedItemClosed = new EventEmitter<FusionChartsEvent>();
  @Output() printReadyStateChange = new EventEmitter<FusionChartsEvent>();
  @Output() dataLoadRequestCompleted = new EventEmitter<FusionChartsEvent>();
  @Output() dataLoadError = new EventEmitter<FusionChartsEvent>();
  @Output() dataLoadCancelled = new EventEmitter<FusionChartsEvent>();
  @Output() dataLoadRequestCancelled = new EventEmitter<FusionChartsEvent>();
  @Output() dataUpdated = new EventEmitter<FusionChartsEvent>();
  @Output() dataUpdateCancelled = new EventEmitter<FusionChartsEvent>();
  @Output() dataLoadRequested = new EventEmitter<FusionChartsEvent>();
  @Output() beforeDataUpdate = new EventEmitter<FusionChartsEvent>();
  @Output() realTimeUpdateComplete = new EventEmitter<FusionChartsEvent>();
  @Output() chartCleared = new EventEmitter<FusionChartsEvent>();
  @Output() slicingEnd = new EventEmitter<FusionChartsEvent>();
  @Output() slicingStart = new EventEmitter<FusionChartsEvent>();
  @Output() entityRollOut = new EventEmitter<FusionChartsEvent>();
  @Output() entityRollOver = new EventEmitter<FusionChartsEvent>();
  @Output() entityClick = new EventEmitter<FusionChartsEvent>();
  @Output() connectorRollOver = new EventEmitter<FusionChartsEvent>();
  @Output() connectorRollOut = new EventEmitter<FusionChartsEvent>();
  @Output() connectorClick = new EventEmitter<FusionChartsEvent>();
  @Output() markerRollOver = new EventEmitter<FusionChartsEvent>();
  @Output() markerRollOut = new EventEmitter<FusionChartsEvent>();
  @Output() markerClick = new EventEmitter<FusionChartsEvent>();
  @Output() pageNavigated = new EventEmitter<FusionChartsEvent>();
  @Output() rotationEnd = new EventEmitter<FusionChartsEvent>();
  @Output() rotationStart = new EventEmitter<FusionChartsEvent>();
  @Output() centerLabelRollover = new EventEmitter<FusionChartsEvent>();
  @Output() centerLabelRollout = new EventEmitter<FusionChartsEvent>();
  @Output() centerLabelClick = new EventEmitter<FusionChartsEvent>();
  @Output() centerLabelChanged = new EventEmitter<FusionChartsEvent>();
  @Output() chartClick = new EventEmitter<FusionChartsEvent>();
  @Output() chartMouseMove = new EventEmitter<FusionChartsEvent>();
  @Output() chartRollOver = new EventEmitter<FusionChartsEvent>();
  @Output() chartRollOut = new EventEmitter<FusionChartsEvent>();
  @Output() backgroundLoaded = new EventEmitter<FusionChartsEvent>();
  @Output() backgroundLoadError = new EventEmitter<FusionChartsEvent>();
  @Output() legendItemClicked = new EventEmitter<FusionChartsEvent>();
  @Output() legendItemRollover = new EventEmitter<FusionChartsEvent>();
  @Output() legendItemRollout = new EventEmitter<FusionChartsEvent>();
  @Output() logoRollover = new EventEmitter<FusionChartsEvent>();
  @Output() logoRollout = new EventEmitter<FusionChartsEvent>();
  @Output() logoClick = new EventEmitter<FusionChartsEvent>();
  @Output() logoLoaded = new EventEmitter<FusionChartsEvent>();
  @Output() logoLoadError = new EventEmitter<FusionChartsEvent>();
  @Output() beforeExport = new EventEmitter<FusionChartsEvent>();
  @Output() exported = new EventEmitter<FusionChartsEvent>();
  @Output() exportCancelled = new EventEmitter<FusionChartsEvent>();
  @Output() beforePrint = new EventEmitter<FusionChartsEvent>();
  @Output() printComplete = new EventEmitter<FusionChartsEvent>();
  @Output() printCancelled = new EventEmitter<FusionChartsEvent>();
  @Output() dataLabelClick = new EventEmitter<FusionChartsEvent>();
  @Output() dataLabelRollOver = new EventEmitter<FusionChartsEvent>();
  @Output() dataLabelRollOut = new EventEmitter<FusionChartsEvent>();
  @Output() scrollStart = new EventEmitter<FusionChartsEvent>();
  @Output() scrollEnd = new EventEmitter<FusionChartsEvent>();
  @Output() onScroll = new EventEmitter<FusionChartsEvent>();
  @Output() zoomReset = new EventEmitter<FusionChartsEvent>();
  @Output() zoomedOut = new EventEmitter<FusionChartsEvent>();
  @Output() zoomedIn = new EventEmitter<FusionChartsEvent>();
  @Output() zoomed = new EventEmitter<FusionChartsEvent>();
  @Output() zoomModeChanged = new EventEmitter<FusionChartsEvent>();
  @Output() pinned = new EventEmitter<FusionChartsEvent>();
  @Output() dataRestored = new EventEmitter<FusionChartsEvent>();
  @Output() beforeDataSubmit = new EventEmitter<FusionChartsEvent>();
  @Output() dataSubmitError = new EventEmitter<FusionChartsEvent>();
  @Output() dataSubmitted = new EventEmitter<FusionChartsEvent>();
  @Output() dataSubmitCancelled = new EventEmitter<FusionChartsEvent>();
  @Output() chartUpdated = new EventEmitter<FusionChartsEvent>();
  @Output() nodeAdded = new EventEmitter<FusionChartsEvent>();
  @Output() nodeUpdated = new EventEmitter<FusionChartsEvent>();
  @Output() nodeDeleted = new EventEmitter<FusionChartsEvent>();
  @Output() connectorAdded = new EventEmitter<FusionChartsEvent>();
  @Output() connectorUpdated = new EventEmitter<FusionChartsEvent>();
  @Output() connectorDeleted = new EventEmitter<FusionChartsEvent>();
  @Output() labelAdded = new EventEmitter<FusionChartsEvent>();
  @Output() labelDeleted = new EventEmitter<FusionChartsEvent>();
  @Output() selectionRemoved = new EventEmitter<FusionChartsEvent>();
  @Output() selectionStart = new EventEmitter<FusionChartsEvent>();
  @Output() selectionEnd = new EventEmitter<FusionChartsEvent>();
  @Output() labelClick = new EventEmitter<FusionChartsEvent>();
  @Output() labelRollOver = new EventEmitter<FusionChartsEvent>();
  @Output() labelRollOut = new EventEmitter<FusionChartsEvent>();
  @Output() labelDragStart = new EventEmitter<FusionChartsEvent>();
  @Output() labelDragEnd = new EventEmitter<FusionChartsEvent>();
  @Output() dataplotDragStart = new EventEmitter<FusionChartsEvent>();
  @Output() dataplotDragEnd = new EventEmitter<FusionChartsEvent>();
  @Output() processClick = new EventEmitter<FusionChartsEvent>();
  @Output() processRollOver = new EventEmitter<FusionChartsEvent>();
  @Output() processRollOut = new EventEmitter<FusionChartsEvent>();
  @Output() categoryClick = new EventEmitter<FusionChartsEvent>();
  @Output() categoryRollOver = new EventEmitter<FusionChartsEvent>();
  @Output() categoryRollOut = new EventEmitter<FusionChartsEvent>();
  @Output() milestoneClick = new EventEmitter<FusionChartsEvent>();
  @Output() milestoneRollOver = new EventEmitter<FusionChartsEvent>();
  @Output() milestoneRollOut = new EventEmitter<FusionChartsEvent>();
  @Output() chartTypeChanged = new EventEmitter<FusionChartsEvent>();
  @Output() overlayButtonClick = new EventEmitter<FusionChartsEvent>();
  @Output() loaded = new EventEmitter<FusionChartsEvent>();
  @Output() rendered = new EventEmitter<FusionChartsEvent>();
  @Output() drawComplete = new EventEmitter<FusionChartsEvent>();
  @Output() renderComplete = new EventEmitter<FusionChartsEvent>();
  @Output() dataInvalid = new EventEmitter<FusionChartsEvent>();
  @Output() dataXMLInvalid = new EventEmitter<FusionChartsEvent>();
  @Output() dataLoaded = new EventEmitter<FusionChartsEvent>();
  @Output() noDataToDisplay = new EventEmitter<FusionChartsEvent>();
  @Output() legendPointerDragStart = new EventEmitter<FusionChartsEvent>();
  @Output() legendPointerDragStop = new EventEmitter<FusionChartsEvent>();
  @Output() legendRangeUpdated = new EventEmitter<FusionChartsEvent>();
  @Output() alertComplete = new EventEmitter<FusionChartsEvent>();
  @Output() realTimeUpdateError = new EventEmitter<FusionChartsEvent>();
  @Output() dataplotRollOver = new EventEmitter<FusionChartsEvent>();
  @Output() dataplotRollOut = new EventEmitter<FusionChartsEvent>();
  @Output() dataplotClick = new EventEmitter<FusionChartsEvent>();
  @Output() linkClicked = new EventEmitter<FusionChartsEvent>();
  @Output() beforeRender = new EventEmitter<FusionChartsEvent>();
  @Output() renderCancelled = new EventEmitter<FusionChartsEvent>();
  @Output() beforeResize = new EventEmitter<FusionChartsEvent>();
  @Output() resized = new EventEmitter<FusionChartsEvent>();
  @Output() resizeCancelled = new EventEmitter<FusionChartsEvent>();
  @Output() beforeDispose = new EventEmitter<FusionChartsEvent>();
  @Output() disposed = new EventEmitter<FusionChartsEvent>();
  @Output() disposeCancelled = new EventEmitter<FusionChartsEvent>();
  @Output() linkedChartInvoked = new EventEmitter<FusionChartsEvent>();
  @Output() beforeDrillDown = new EventEmitter<FusionChartsEvent>();
  @Output() drillDown = new EventEmitter<FusionChartsEvent>();
  @Output() beforeDrillUp = new EventEmitter<FusionChartsEvent>();
  @Output() drillUp = new EventEmitter<FusionChartsEvent>();
  @Output() drillDownCancelled = new EventEmitter<FusionChartsEvent>();
  @Output() drillUpCancelled = new EventEmitter<FusionChartsEvent>();
  @Output() initialized = new EventEmitter<FusionChartInstance>();

  containerId: string;
  private configObj: any;
  oldDataSource: any;
  private oldDataTable: any;
  private constructerParams = {
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
  element: ElementRef;
  fusionchartsService: FusionChartsService;

  constructor(
    element: ElementRef,
    fusionchartsService: FusionChartsService,
    private differs: KeyValueDiffers,
    private zone: NgZone
  ) {
    this.element = element;
    this.fusionchartsService = fusionchartsService;
    this.containerId = fusionchartsService.getNextItemCount();
  }

  // @ViewChild('samplediv') chartContainer: ElementRef;

  checkIfDataTableExists(dataSource) {
    if (dataSource && dataSource.data && dataSource.data._dataStore) {
      return true;
    }
    return false;
  }

  cloneDataSource(obj) {
    let type = typeof obj;
    if (
      type === 'string' ||
      type === 'number' ||
      type === 'function' ||
      type === 'boolean'
    ) {
      return obj;
    }
    if (obj === null || obj === undefined) {
      return obj;
    }
    if (Array.isArray(obj)) {
      let arr: any[] = [];
      for (let i = 0; i < obj.length; i++) {
        arr.push(this.cloneDataSource(obj[i]));
      }
      return arr;
    }
    if (typeof obj === 'object') {
      let clonedObj = {};
      for (let prop in obj) {
        // Edge case handling for DataTable
        if (prop === 'data') {
          if (obj[prop]._dataStore) {
            clonedObj[prop] = `-`;
          } else {
            clonedObj[prop] = this.cloneDataSource(obj[prop]);
          }
          continue;
        }
        clonedObj[prop] = this.cloneDataSource(obj[prop]);
      }
      return clonedObj;
    }
  }

  ngOnInit() {
    this.oldDataSource = this.dataSource;
    if (this.checkIfDataTableExists(this.dataSource)) {
      this.oldDataSource = JSON.stringify(
        this.cloneDataSource(this.dataSource)
      );
    } else {
      this.oldDataSource = JSON.stringify(this.dataSource);
    }
    this.placeholder = this.placeholder || 'FusionCharts will render here';
  }

  ngOnChanges(changes: any) {
    for (const i of Object.keys(changes)) {
      const key = i.charAt(0).toUpperCase() + i.slice(1),
        THIS = this,
        fnName = `update${key}`;
      if (THIS[fnName]) {
        THIS[fnName]();
      }
    }
  }

  ngDoCheck() {
    let data;
    if (this.checkIfDataTableExists(this.dataSource)) {
      data = JSON.stringify(this.cloneDataSource(this.dataSource));
    } else {
      data = JSON.stringify(this.dataSource);
    }
    if (
      this.oldDataSource !== data ||
      this.oldDataTable !== this.dataSource.data
    ) {
      this.oldDataTable = this.dataSource && this.dataSource.data;
      this.oldDataSource = data;
      this.updateChartData();
    }
  }

  updateChartData() {
    const dataFormat =
        this.configObj && this.configObj.dataFormat
          ? this.configObj.dataFormat
          : 'json',
      data = this.dataSource;

    if (this.chartObj) {
      this.chartObj.setChartData(data, dataFormat);
    }
  }

  updateWidth() {
    if (this.chartObj) {
      this.chartObj.resizeTo({
        w: this.width
      });
    }
  }

  updateHeight() {
    if (this.chartObj) {
      this.chartObj.resizeTo({
        h: this.height
      });
    }
  }

  updateType() {
    if (this.chartObj) {
      this.chartObj.chartType(this.type);
    }
  }

  generateEventsCallback(eventList: Array<string>) {
    let events = {};
    eventList.forEach(eventName => {
      events[eventName] = (eventObj: any, dataObj: any) => {
        let fEventObj: FusionChartsEvent = { eventObj: {}, dataObj: {} };
        if (eventObj) fEventObj.eventObj = eventObj;
        if (dataObj) fEventObj.dataObj = dataObj;
        this[eventName].emit(fEventObj);
      };
    });
    return events;
  }

  ngAfterViewInit() {
    const _this = this,
      params = _this.constructerParams,
      configObj = _this.configObj || (_this.configObj = {});

    let _chartConfig: any = _this.chartConfig || {};

    if (typeof _chartConfig === 'string') {
      _chartConfig = JSON.parse(_chartConfig);
    }

    for (const i of Object.keys(params)) {
      const value = _this[i] || _chartConfig[i];
      if (value) {
        configObj[i] = value;
      }
    }

    if (configObj['type']) {
      let events = _this.generateEventsCallback(_this.eventList);
      if (!configObj['events']) {
        configObj['events'] = events;
      } else {
        configObj['events'] = Object.assign(events, configObj['events']);
      }

      // configObj['renderAt'] = 'container-' + _this.chartObj.id;
      // _this.containerId = _this.chartObj.id;

      this.zone.runOutsideAngular(() => {
        setTimeout(() => {
          _this.chartObj = FusionChartsConstructor(
            _this.fusionchartsService,
            configObj
          );
          this.initialized.emit({ chart: _this.chartObj });
          _this.chartObj.render(
            _this.element.nativeElement.querySelector('div')
          );
        }, 1);
      });
    }
  }

  ngOnDestroy() {
    this.chartObj && this.chartObj.dispose();
  }
}
export { FusionChartsComponent };
