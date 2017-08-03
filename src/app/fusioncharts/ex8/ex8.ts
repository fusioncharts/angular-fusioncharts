import { Component, AfterViewInit} from '@angular/core';

import fcDemos from '../samplecode';

declare var Prism;

@Component({
    selector: 'chart',
    templateUrl: 'ex8.html',
      styleUrls: [
          '../ex.css'
      ]
})

export class Ex8 {
    demoId = 'ex8';
    sampleCode = fcDemos;
    dataSource = {
        chart: {
            caption: "Harry's SuperMart",
            subCaption: "Top 5 stores in last month by revenue",
            numberPrefix: "$",
            theme: "ocean"
        },
        data:[{
            label: "Bakersfield Central",
            value: "880000"
        },
        {
            label: "Garden Groove harbour",
            value: "730000"
        },
        {
            label: "Los Angeles Topanga",
            value: "590000"
        },
        {
            label: "Compton-Rancho Dom",
            value: "520000"
        },
        {
            label: "Daly City Serramonte",
            value: "330000"
        }]
    };

    changeBackgroundColor = function () {
        this.dataSource.chart.bgColor = "#efefef";
    };

    changeCaptionTextAlignment = function () {
        this.dataSource.chart.captionAlignment = "left";
    };

    constructor () {

    }
    ngAfterViewInit() {
        Prism && Prism.highlightAll();
    }
}
