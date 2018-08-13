import {
  Component,
  NgZone
} from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';
declare var Prism;

@Component({
  selector: 'chart',
  templateUrl: './ex17.html',
  styleUrls: [
    '../ex.css'
  ]
})
export class Ex17 {
  demoId = 'ex17';
  sampleCode = fcDemos;
  dataSource: any;
  message: string;
  chartObj: any;
  handler:any;
  constructor(private zone: NgZone) {
    this.message = 'Click on the plot to see the value along with the label';
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

  getMessage(dataObj){
    return `You have clicked on plot ${dataObj.categoryLabel} whose value is ${dataObj.displayValue}`
  }

  dataplotClickHandler(eventObj, dataObj){
    this.zone.run(() => {
      this.message = this.getMessage(dataObj);
    });
  }

  initialized($event){
    this.chartObj = $event.chart;
  }

  attachEvent(){
    this.handler = this.dataplotClickHandler.bind(this);
    this.chartObj.addEventListener('dataplotClick',this.handler);
  }

  removeEvent(){
    this.chartObj.removeEventListener('dataplotClick', this.handler);
  }

  ngOnInit() {
    setTimeout(() => {
      SelectedSingleton.change(this.sampleCode['ex17'].title);
    })
  }
}
