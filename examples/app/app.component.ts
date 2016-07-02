import { Component } from '@angular/core';
import { AngularFusionCharts } from '../../src/angular-fusioncharts';
@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>
  			<fusioncharts width="400px" height="400px" [type]="chartType" id="chart-container" dataFormat="json" [dataSource]="data"></fusioncharts>`,
  directives: [AngularFusionCharts]
})
export class AppComponent { 
	data
	chartType = "column2d";
	constructor () {
		this.data = {
            "chart": {
                "caption": "Top 5 Stores by Sales",
                "subCaption": "Last month",
                "yAxisName": "Sales (In USD)",
                "numberPrefix": "$",
                "paletteColors": "#0075c2",
                "bgColor": "#ffffff",
                "showBorder": "0",
                "showCanvasBorder": "0",
                "usePlotGradientColor": "0",
                "plotBorderAlpha": "10",
                "placeValuesInside": "1",
                "valueFontColor": "#ffffff",
                "showAxisLines": "1",
                "axisLineAlpha": "25",
                "divLineAlpha": "10",
                "alignCaptionWithCanvas": "0",
                "showAlternateVGridColor": "0",
                "captionFontSize": "14",
                "subcaptionFontSize": "14",
                "subcaptionFontBold": "0",
                "toolTipColor": "#ffffff",
                "toolTipBorderThickness": "0",
                "toolTipBgColor": "#000000",
                "toolTipBgAlpha": "80",
                "toolTipBorderRadius": "2",
                "toolTipPadding": "5"
            },
            
            "data": [
                {
                    "label": "Bakersfield Central",
                    "value": "880000"
                }, 
                {
                    "label": "Garden Groove harbour",
                    "value": "730000"
                }, 
                {
                    "label": "Los Angeles Topanga",
                    "value": "590000"
                }, 
                {
                    "label": "Compton-Rancho Dom",
                    "value": "520000"
                }, 
                {
                    "label": "Daly City Serramonte",
                    "value": "330000"
                }
            ]
        };
        setTimeout (()=> {
    		this.chartType = "bar2d";
        })
	} 
}