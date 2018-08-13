import {
  Component,
  NgZone
} from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';
declare var Prism;

@Component({
  selector: 'chart',
  templateUrl: './ex21.html',
  styleUrls: [
    '../ex.css'
  ]
})
export class Ex21 {
  demoId = 'ex21';
  sampleCode = fcDemos;
  dataSource: any;
  chartObj:any;
  chart: any = 'column2d';

  constructor(private zone: NgZone) {
    this.dataSource = {
      "chart": {
          "caption": "Countries With Most Oil Reserves [2017-18]",
          "subCaption": "In MMbbl = One Million barrels",
          "xAxisName": "Country",
          "yAxisName": "Reserves (MMbbl)",
          "numberSuffix": "K",
          "theme": "fusion"
      },
      "data": [
          {
              "label": "Venezuela",
              "value": "290"
          },
          {
              "label": "Saudi",
              "value": "260"
          },
          {
              "label": "Canada",
              "value": "180"
          },
          {
              "label": "Iran",
              "value": "140"
          },
          {
              "label": "Russia",
              "value": "115"
          },
          {
              "label": "UAE",
              "value": "100"
          },
          {
              "label": "US",
              "value": "30"
          },
          {
              "label": "China",
              "value": "30"
          }
      ]
    };

  }



  initialized($event){
    this.chartObj = $event.chart;
  }
  
  onSelectionChange(chart){
    this.chart = chart;
    this.chartObj.chartType(chart);
  }

  ngOnInit() {
    setTimeout(() => {
      SelectedSingleton.change(this.sampleCode['ex21'].title);
    })
  }
}
