import { Component, AfterViewInit} from '@angular/core';

import fcDemos from '../samplecode';

declare var Prism;

@Component({
    selector: 'chart',
    templateUrl: 'ex6.html'
})

export class Ex6 {
    demoId = 'ex6';
    type = "Column2D";
    width = "600";
    height = "300";
    dataFormat = "json";
    sampleCode = fcDemos;
    dataSource: any = {
        "chart": {
          "caption": "Countries With Most Oil Reserves [2017-18]",
          "subCaption": "In MMbbl = One Million barrels",
          "xAxisName": "Country",
          "yAxisName": "Reserves (MMbbl)",
          "numberSuffix": "K",
          "theme": "fusion",
          "updateAnimDuration":"0.4"
        },
        "data": [{
          "label": "Venezuela",
          "value": "290"
        }, {
          "label": "Saudi",
          "value": "260"
        }, {
          "label": "Canada",
          "value": "180"
        }, {
          "label": "Iran",
          "value": "140"
        }, {
          "label": "Russia",
          "value": "115"
        }, {
          "label": "UAE",
          "value": "100"
        }, {
          "label": "US",
          "value": "30"
        }, {
          "label": "China",
          "value": "30"
        }]
    };

    getRandomNumber = function () {
        var max = 290, min = 30;
        return Math.round(((max - min) * Math.random()) + min);
    }
    updateMyChartData() {

        this.dataSource.data[2].value = this.getRandomNumber();
        this.dataSource.data[3].value = this.getRandomNumber();
    }

    constructor () {

    }
    ngAfterViewInit() {
        Prism && Prism.highlightAll();
    }
}
