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
  initMessage:any;
  iMsg:string;
  clickPlotMsg:string;
  attached: boolean;
  constructor(private zone: NgZone) {
    this.iMsg = 'Click on <b>Track Data Plot Clicks</b> button to listen to dataplotclick event';
    this.initMessage = this.iMsg;
    this.clickPlotMsg = 'Click on the plot to see the value along with the label';
    this.message = this.clickPlotMsg;
    this.attached = false;
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
    return `You have clicked on plot <b style='font-weight:bold'>${dataObj.categoryLabel}</b> which has a value of <b style='font-weight:bold'>${dataObj.displayValue}</b>`
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
    this.initMessage = '';
    this.message = this.clickPlotMsg;
    this.attached = true;
    this.chartObj.addEventListener('dataplotClick',this.handler);
  }

  removeEvent(){
    this.initMessage = this.iMsg;
    this.message = this.clickPlotMsg;
    this.attached = false;
    this.chartObj.removeEventListener('dataplotClick', this.handler);
  }

  ngOnInit() {
    setTimeout(() => {
      SelectedSingleton.change(this.sampleCode['ex17'].title);
    })
  }
}
