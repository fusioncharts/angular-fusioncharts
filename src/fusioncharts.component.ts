// import {Component, Input, ElementRef, AfterViewInit, OnInit, KeyValueDiffers, SimpleChange} from '@angular/core';
import {Component, Input, ElementRef, OnInit, KeyValueDiffers} from '@angular/core';
// import {Observable} from 'rxjs/Observable';
// import {Observer} from 'rxjs/Observer';

import * as FusionCharts from 'fusioncharts';


@Component({
    selector: 'fusioncharts',
    template: `<div>FusionCharts will render here</div>
    `
})
export class FusionChartsComponent implements OnInit {

    chartObj: any;

    @Input() dataSource: any;

    private oldDataSource:any = this.dataSource;

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

    constructor(private differs: KeyValueDiffers, public element: ElementRef) {

    }


    ngOnInit() {
        this.oldDataSource = (JSON.stringify(this.dataSource));
    }


    // ngOnChanges(changes: {[propName: string]: SimpleChange}, hi) {
    ngOnChanges(changes: any) {
        for (let i in changes) {
            let key = i.charAt(0).toUpperCase() + i.slice(1);
            this[`update${key}`] && this[`update${key}`]();
        }
    }


    ngDoCheck() {
        let data = JSON.stringify(this.dataSource);
        if (this.oldDataSource === data) {
        } else {
            this.updateChartData();
            this.oldDataSource = data;
        }
    }

    updateChartData() {
        this.chartObj && this.chartObj.setJSONData(this.dataSource);
    }

    updateWidth() {
        this.chartObj && this.chartObj.resizeTo({
            w: this.width
        })
    }

    updateHeight() {
        this.chartObj && this.chartObj.resizeTo({
            h: this.height
        })
    }

    ngAfterViewInit() {
        let _this = this,
            element = _this.element.nativeElement,
            _chartConfig = _this.chartConfig || {},
            configObj;

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
    }

    getDataSource() {
        if(this.dataSource && this.dataSource.data) {
            return this.dataSource.data;
        }
    }

    ngOnDestroy() {
        console.log('Destroy: ', this.chartObj);
        this.chartObj.dispose();
    }

}
