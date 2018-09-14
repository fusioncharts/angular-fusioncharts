import {
  Component,
  NgZone
} from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';
declare var Prism;

@Component({
  selector: 'chart',
  templateUrl: './ex23.html',
  styleUrls: [
    '../ex.css'
  ]
})
export class Ex23 {
  demoId = 'ex23';
  sampleCode = fcDemos;
  dataSource: any;
  temp_message:any = '';
  message = 'You will see notifications here for the chart lifecycle events';
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
  
  beforeDataUpdate($event){
    this.zone.run(() => {
      this.message = 'Status: beforeDataUpdate';
    });
  }

  dataUpdated($event){
    this.zone.run(() => {
      this.message += ', dataUpdated';
      
    })
  }

  drawComplete($event){
    this.zone.run(() => {
      this.message += ', drawComplete';
    });
  }

  renderComplete($event){
    this.zone.run(() => {
      this.message += ', renderComplete';
    })
  }

  ngOnInit() {
    setTimeout(() => {
      SelectedSingleton.change(this.sampleCode['ex23'].title);
    })
  }
}
