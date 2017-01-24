import {Component, Input, ElementRef, OnInit} from '@angular/core';
import * as FC from 'fusioncharts';
import * as charts from 'fusioncharts/fusioncharts.charts';

import * as $ from 'jquery';

var FusionCharts = typeof window !== undefined && window["FusionCharts"] ?
        window["FusionCharts"] : FC;

var FusionChartsCharts: (H: FC) => FC;

var a = charts(FC);


@Component({
    selector: 'fusioncharts',
    template: `<div>FusionCharts will render here</div>`
})

export class FusionChartsComponent {

    chartObj = null;
    hi = FusionChartsCharts;
    @Input() type: string;
    @Input() id: string;
    @Input() width: string;
    @Input() height: string;
    @Input() renderAt: string;
    @Input() dataFormat: string;
    @Input() dataSource: string;
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

    constructor(public element: ElementRef) {
    }

    ngAfterViewInit() {
        var _this = this,
            element = _this.element.nativeElement,
            _chartConfig = _this.chartConfig || {},
            configObj;

        if (typeof _chartConfig === "string") {
          _chartConfig = JSON.parse(_chartConfig);
        }

        configObj = {
            type: _this.type || _chartConfig["type"],
            height: _this.height || _chartConfig["height"],
            width: _this.width || _chartConfig["width"],
            id: _this.id || (_chartConfig && _chartConfig["id"]),
            dataFormat: _this.dataFormat || _chartConfig["dataFormat"],
            dataSource: _this.dataSource || _chartConfig["dataSource"]
        };


        if (configObj.type) {
            _this.chartObj = new FusionCharts(configObj);

           _this.chartObj.render(element.childNodes[0]);
        }
    }

    ngOnInit() {
    }
}
