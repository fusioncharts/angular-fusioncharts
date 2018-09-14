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
          "caption": "Recommended Portfolio Split",
          "subCaption" : "For a net-worth of $1M",
          "showValues":"1",
          "showPercentInTooltip" : "0",
          "numberPrefix" : "$",
          "enableMultiSlicing":"1",
          "theme": "fusion"
      },
      "data": [
          {
              "label": "Equity",
              "value": "300000"
          }, {
              "label": "Debt",
              "value": "230000"
          }, {
              "label": "Bullion",
              "value": "180000"
          }, {
              "label": "Real-estate",
              "value": "270000"
          }, {
              "label": "Insurance",
              "value": "20000"
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
