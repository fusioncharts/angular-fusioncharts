import { Component, AfterViewInit} from '@angular/core';

import fcDemos from '../samplecode';

declare var Prism;

@Component({
    selector: 'chart',
    templateUrl: 'ex1.html'
})

export class Ex1 implements AfterViewInit {
    demoId = 'ex1';
    sampleCode = fcDemos;
    dataSource: Object;
    chartConfig: Object;

    constructor() {
        this.sampleCode = fcDemos;

        this.chartConfig = {
            width: "600",
            height: "400",
            type: "column3d",
            dataFormat: "json",
            creditLabel: 'false'
        };

        this.dataSource = {
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

    }
    ngAfterViewInit() {
        Prism && Prism.highlightAll();
    }

}
