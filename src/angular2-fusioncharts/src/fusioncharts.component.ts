import {
    Component, Input, ElementRef, OnInit,
    OnChanges, DoCheck, AfterViewInit, OnDestroy,
    KeyValueDiffers, ViewChild, NgZone
} from '@angular/core';

import { FusionChartsService } from './fusioncharts.service';
import { FusionChartsConstructor } from './fusioncharts.constructor';


@Component({
    selector: 'fusioncharts',
    template: `<div attr.id="container-{{containerId}}" >{{placeholder}}</div>
    `,
    providers: [FusionChartsService],
})
export class FusionChartsComponent implements OnInit, OnChanges, DoCheck, AfterViewInit, OnDestroy {

    chartObj: any;

    @Input() placeholder: string;
    @Input() dataSource: Object;
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
    @Input() chartConfig: string;

    containerId: string;
    private configObj: any;
    private oldDataSource: any = this.dataSource;
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

    constructor(element: ElementRef, fusionchartsService: FusionChartsService, private differs: KeyValueDiffers, private zone: NgZone) {
        this.element = element;
        this.fusionchartsService = fusionchartsService;
    }

    // @ViewChild('samplediv') chartContainer: ElementRef;

    ngOnInit() {
        this.oldDataSource = JSON.stringify(this.dataSource);
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
        const data = JSON.stringify(this.dataSource);
        if (this.oldDataSource === data) {
        } else {
            this.updateChartData();
            this.oldDataSource = data;
        }
    }


    updateChartData() {
        const dataFormat = this.configObj.dataFormat || 'json',
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

            _this.chartObj = FusionChartsConstructor(_this.fusionchartsService, configObj);

            // configObj['renderAt'] = 'container-' + _this.chartObj.id;
            // _this.containerId = _this.chartObj.id;

            this.zone.runOutsideAngular(() => {
                setTimeout(() => {
                    _this.chartObj.render(_this.element.nativeElement.querySelector('div'));
                }, 1);
            })
        }
    }

    ngOnDestroy() {
        this.chartObj.dispose();
    }

}

