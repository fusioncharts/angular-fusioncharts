import {
  Component,
  NgZone
} from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';
declare var Prism;

@Component({
  selector: 'chart',
  templateUrl: './ex25.html',
  styleUrls: [
    '../ex.css'
  ]
})
export class Ex25 {
  demoId = 'ex25';
  sampleCode = fcDemos;
  dataSource: any;
  selectedSlice = 'none';
  chart: any;
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
      "data": [{
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

  initialized($event) {
    this.chart = $event.chart;
  }

  changeCaption(caption){
    this.chart.setChartAttribute('caption', caption);
  }

  changeXAxisName(xaxisname){
    this.chart.setChartAttribute('xaxisname', xaxisname);
  }

  changeYAxisName(yaxisname){
    this.chart.setChartAttribute('yaxisname', yaxisname);
  }

  reset(){
    this.chart.setChartAttribute('caption', this.dataSource.chart.caption);
    this.chart.setChartAttribute('xaxisname', this.dataSource.chart.xAxisName);
    this.chart.setChartAttribute('yaxisname', this.dataSource.chart.yAxisName);
  }

  ngOnInit() {
    setTimeout(() => {
      SelectedSingleton.change(this.sampleCode['ex25'].title);
    })
  }
}
