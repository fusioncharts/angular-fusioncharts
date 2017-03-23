import {Component} from '@angular/core';

import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import * as Widgets from 'fusioncharts/fusioncharts.widgets';
import * as Maps from 'fusioncharts/fusioncharts.maps';
import * as World from 'fusioncharts/maps/fusioncharts.world';
import * as fint from 'fusioncharts/themes/fusioncharts.theme.fint';

Charts(FusionCharts);
PowerCharts(FusionCharts);
Widgets(FusionCharts);
Maps(FusionCharts);
World(FusionCharts);

var chartData = {
  chart: {theme: 'fint'},
  data: [{value: 50}, {value: 55}, {value: 70}, {value: 60}]
}

var config = {
    type: "Column2D",
    width: 500,
    height: 300,
    dataFormat: 'json',
    dataSource: chartData
}

@Component({
  	selector: 'chart',
  	template: `
              <fusioncharts [chartConfig]=chartConf> </fusioncharts>
              <fusioncharts type="Spline" [chartConfig]="chartConf"> </fusioncharts>
              <fusioncharts type="Pyramid" [chartConfig]=chartConf> </fusioncharts>
              <fusioncharts type="World" [chartConfig]=chartConf> Column2D chart will render here... </fusioncharts>
          `
})

export class FusionChartsSample {
    chartData = JSON.stringify(chartData);

    chartConf = JSON.stringify(config);
}
