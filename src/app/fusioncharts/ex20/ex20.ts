import {
  Component,
  NgZone
} from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';
declare var Prism;

@Component({
  selector: 'chart',
  templateUrl: './ex20.html',
  styleUrls: [
    '../ex.css'
  ]
})
export class Ex20 {
  demoId = 'ex20';
  sampleCode = fcDemos;
  dataSource: any;
  chartObj: any;
  size: string = "secondSize";
  allSizes = {
    firstSize: { width : '400px', height: '200px'},
    secondSize: { width: '600px', height: '350px' },
    thirdSize: { width: '700px', height: '400px' }
  }
  styleObj: object;
  
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

    this.styleObj = this.allSizes[this.size];
  }

  getStyle(){
    return this.styleObj;
  }

  initialized($event){
    this.chartObj = $event.chart;
  }
  onSelectionChange(size){
    this.size = size;
    this.styleObj = this.allSizes[this.size];
  }

  ngOnInit() {
    setTimeout(() => {
      SelectedSingleton.change(this.sampleCode['ex20'].title);
    })
  }
}
