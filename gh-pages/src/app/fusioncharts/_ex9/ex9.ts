import { Component, AfterViewInit} from '@angular/core';
// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load Ocean theme
import * as Ocean from 'fusioncharts/themes/fusioncharts.theme.ocean';

// Pass FusionCharts as dependency to Charts module
Charts(FusionCharts);

// Pass FusionCharts as dependency to Ocean theme module
Ocean(FusionCharts);

import fcDemos from '../samplecode';

declare var Prism;

@Component({
    selector: 'chart',
    templateUrl: 'ex9.html',
      styleUrls: [
          '../ex.css'
      ]
})

export class Ex9 {
    demoId = 'ex9';
    sampleCode = fcDemos;

    dataSource = {
        chart: {
            "caption": "Sales - 2012 v 2013",
            "numberprefix": "$",
            "plotgradientcolor": "",
            "bgcolor": "FFFFFF",
            "showalternatehgridcolor": "0",
            "divlinecolor": "CCCCCC",
            "showvalues": "0",
            "showcanvasborder": "0",
            "canvasborderalpha": "0",
            "canvasbordercolor": "CCCCCC",
            "canvasborderthickness": "1",
            "yaxismaxvalue": "30000",
            "captionpadding": "30",
            "linethickness": "3",
            "yaxisvaluespadding": "15",
            "legendshadow": "0",
            "legendborderalpha": "0",
            "palettecolors": "#f8bd19,#008ee4,#33bdda,#e44a00,#6baa01,#583e78",
            "showborder": "0"
        },

        categories: [
            {
                "category": [
                    {
                        "label": "Jan"
                    },
                    {
                        "label": "Feb"
                    },
                    {
                        "label": "Mar"
                    },
                    {
                        "label": "Apr"
                    },
                    {
                        "label": "May"
                    },
                    {
                        "label": "Jun"
                    },
                    {
                        "label": "Jul"
                    },
                    {
                        "label": "Aug"
                    },
                    {
                        "label": "Sep"
                    },
                    {
                        "label": "Oct"
                    },
                    {
                        "label": "Nov"
                    },
                    {
                        "label": "Dec"
                    }
                ]
            }
        ],

        dataset: [
            {
                "seriesname": "2013",
                "data": [
                    {
                        "value": "22400"
                    },
                    {
                        "value": "24800"
                    },
                    {
                        "value": "21800"
                    },
                    {
                        "value": "21800"
                    },
                    {
                        "value": "24600"
                    },
                    {
                        "value": "27600"
                    },
                    {
                        "value": "26800"
                    },
                    {
                        "value": "27700"
                    },
                    {
                        "value": "23700"
                    },
                    {
                        "value": "25900"
                    },
                    {
                        "value": "26800"
                    },
                    {
                        "value": "24800"
                    }
                ]
            },
            {
                "seriesname": "2012",
                "data": [
                    {
                        "value": "10000"
                    },
                    {
                        "value": "11500"
                    },
                    {
                        "value": "12500"
                    },
                    {
                        "value": "15000"
                    },
                    {
                        "value": "16000"
                    },
                    {
                        "value": "17600"
                    },
                    {
                        "value": "18800"
                    },
                    {
                        "value": "19700"
                    },
                    {
                        "value": "21700"
                    },
                    {
                        "value": "21900"
                    },
                    {
                        "value": "22900"
                    },
                    {
                        "value": "20800"
                    }
                ]
            }
        ]
    }

    constructor () {

    }
    ngAfterViewInit() {
        Prism && Prism.highlightAll();
    }
}
