import { Component, AfterViewInit} from '@angular/core';

import fcDemos from '../samplecode';

declare var Prism;

@Component({
    selector: 'chart',
    templateUrl: 'ex9.html'
})

export class Ex9 {
    demoId = 'ex9';
    sampleCode = fcDemos;

    logMessage = 'Hover on the plot to see the percentage of a column wrt total';

    dataSource = {
        "chart": {
            "caption": "Monthly r    ue for last year",
            "subCaption": "Harry's SuperMart",
            "xAxisName": "Month",
            "yAxisName": "Revenues (In USD)",
            "numberPrefix": "$",
            "paletteColors": "#0075c2",
            "bgColor": "#ffffff",
            "borderAlpha": "20",
            "canvasBorderAlpha": "0",
            "usePlotGradientColor": "0",
            "plotBorderAlpha": "10",
            "placevaluesInside": "1",
            "rotatevalues": "1",
            "valueFontColor": "#ffffff",                
            "showXAxisLine": "1",
            "xAxisLineColor": "#999999",
            "divlineColor": "#999999",               
            "divLineIsDashed": "1",
            "showAlternateHGridColor": "0",
            "subcaptionFontBold": "0",
            "subcaptionFontSize": "14"
        },            
        "data": [
            {
                "label": "Jan",
                "value": "420000"
            }, 
            {
                "label": "Feb",
                "value": "810000"
            }, 
            {
                "label": "Mar",
                "value": "720000"
            }, 
            {
                "label": "Apr",
                "value": "550000"
            }, 
            {
                "label": "May",
                "value": "910000"
            }, 
            {
                "label": "Jun",
                "value": "510000"
            }, 
            {
                "label": "Jul",
                "value": "680000"
            }, 
            {
                "label": "Aug",
                "value": "620000"
            }, 
            {
                "label": "Sep",
                "value": "610000"
            }, 
            {
                "label": "Oct",
                "value": "490000"
            }, 
            {
                "label": "Nov",
                "value": "900000"
            }, 
            {
                "label": "Dec",
                "value": "730000"
            }
        ],
        "trendlines": [
            {
                "line": [
                    {
                        "startvalue": "700000",
                        "color": "#1aaf5d",
                        "valueOnRight": "1",
                        "displayvalue": "Monthly Target"
                    }
                ]
            }
        ]
    }

    total: number;

    getPercentValue() {
        let _this = this;
        return (eve,  arg) => {
            let value = (arg.value / _this.total * 100).toFixed(2);
            _this.logMessage = "Percentage is  " + value + "% of the total";
        }
    }

    events = {
        dataPlotRollOver: this.getPercentValue()
    }

    constructor () {
        let myData = this.dataSource.data;

        this.total = 0;

        // Calculate the sum of all values
        for (let i = 0; i < myData.length; i++) {
            this.total += Number(myData[i].value);
        }
    
    }

    ngAfterViewInit() {
        Prism && Prism.highlightAll();
    }
}
