import {
  Component,
  NgZone
} from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';
declare var Prism;

@Component({
  selector: 'chart',
  templateUrl: './ex16.html',
  styleUrls: [
    '../ex.css'
  ]
})
export class Ex16 {
  demoId = 'ex16';
  sampleCode = fcDemos;
  dataSource: any;
  datasetname: any;
  startvalue: any;
  finalvalue: any;
  message: any;

  // Format message
  getMessage(datasetname, startvalue, finalvalue, label){
   return `<b style='font-weight:bold';>${datasetname}</b> dataset, its previous value was <b style='font-weight:bold'>${startvalue}</b> and its current value is <b style='font-weight:bold'>${finalvalue}</b> for year <b>${label} </b>`;
  }

  constructor(private zone: NgZone) {
    this.dataSource = {
      "chart": {
          "caption": "Android and iOS Devices Sales Projections",
          "subCaption": "Drag the top of columns to adjust projections for 2017 & 2018",
          "numberPrefix": "$",
          "numberSuffix": "M",
          "yaxismaxvalue": "200",
          "theme": "fusion",
          "plotToolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
      },
      "categories": [{
          "category": [{
              "label": "2014",
              "fontItalic": "0"
          }, {
              "label": "2015",
              "fontItalic": "0"
          }, {
              "label": "2016",
              "fontItalic": "0"
          }, {
              "label": "2017 (Projected)"
          }, {
              "label": "2018 (Projected)"
          }]
      }],
      "dataset": [{
          "seriesname": "Android Devices",
          "data": [{
              "value": "73",
              "alpha": "100",
              "allowDrag": "0"
          }, {
              "value": "80",
              "alpha": "100",
              "allowDrag": "0"
          }, {
              "value": "97",
              "alpha": "100",
              "allowDrag": "0"
          }, {
              "value": "110",
              "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
          }, {
              "value": "180",
              "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
          }]
      }, {
          "seriesname": "iOS Devices",
          "data": [{
              "value": "63.2",
              "alpha": "100",
              "allowDrag": "0"
          }, {
              "value": "68",
              "alpha": "100",
              "allowDrag": "0"
          }, {
              "value": "82",
              "alpha": "100",
              "allowDrag": "0"
          }, {
              "value": "99",
              "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
          }, {
              "value": "150",
              "toolText": "<b>$label</b><br>$seriesName: <b>$dataValue</b>"
          }]
      }]
    };

    this.message = "Drag any column for years 2017 or 2018 to see updated value along with the label";
  }



  dragStart($event){
    let dataObj = $event.dataObj;
    this.datasetname = dataObj.datasetName;
    this.startvalue = dataObj.startValue;
  }

  dragEnd($event){
    let dataObj = $event.dataObj;
    this.finalvalue = dataObj.endValue;
    let label = this.dataSource.categories[0].category[dataObj.dataIndex].label;
    
    this.zone.run(() => {
      this.message = this.getMessage(this.datasetname, this.startvalue.toFixed(2), this.finalvalue.toFixed(2), label);
    })
  }

  ngOnInit() {
    setTimeout(() => {
      SelectedSingleton.change(this.sampleCode['ex16'].title);
    })
  }
}
