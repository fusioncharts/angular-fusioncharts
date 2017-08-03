import { Component, AfterViewInit, ViewEncapsulation} from '@angular/core';

import fcDemos from '../samplecode';

declare var Prism;

@Component({
    selector: 'chart',
    encapsulation: ViewEncapsulation.None,
    templateUrl: 'ex4.html',
      styles: [`
        .chart1 div {
            float: left;
        }
      `]
})

export class Ex4 {
    demoId = 'ex4';
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

    constructor () {

    }
    ngAfterViewInit() {
        Prism && Prism.highlightAll();
    }
};
