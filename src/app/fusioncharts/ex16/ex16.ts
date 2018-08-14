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
  getMessage(datasetname, startvalue, finalvalue){
   return `You have dragged a plot of <b style='font-weight:bold;'>${datasetname || '______'}</b> dataset, its previous value was <b style='font-weight:bold'>${startvalue || '________'}</b> and its current value is <b style='font-weight:bold'>${finalvalue || '________'}</b>` 
  }

  constructor(private zone: NgZone) {
    this.dataSource = {
      "chart": {
        "caption": "App Publishing Trend",
        "subCaption": "2012-2016",
        "xAxisName": "Years",
        "yAxisName": "Total number of apps in store",
        "formatnumberscale": "1",
        "drawCrossLine": "1",
        "plotToolText": "<b>$dataValue</b> apps on $seriesName in $label",
        "theme": "fusion"
      },

      "categories": [{
        "category": [{
          "label": "2012"
        }, {
          "label": "2013"
        }, {
          "label": "2014"
        }, {
          "label": "2015"
        }, {
          "label": "2016"
        }]
      }],
      "dataset": [{
        "seriesname": "iOS App Store",
        "data": [{
          "value": "125000"
        }, {
          "value": "300000"
        }, {
          "value": "480000"
        }, {
          "value": "800000"
        }, {
          "value": "1100000"
        }]
      }, {
        "seriesname": "Google Play Store",
        "data": [{
          "value": "70000"
        }, {
          "value": "150000"
        }, {
          "value": "350000"
        }, {
          "value": "600000"
        }, {
          "value": "1400000"
        }]
      }, {
        "seriesname": "Amazon AppStore",
        "data": [{
          "value": "10000"
        }, {
          "value": "100000"
        }, {
          "value": "300000"
        }, {
          "value": "600000"
        }, {
          "value": "900000"
        }]
      }]
    };

    this.message = this.getMessage(null, null, null);
  }



  dragStart($event){
    let dataObj = $event.dataObj;
    this.datasetname = dataObj.datasetName;
    this.startvalue = dataObj.startValue;
  }

  dragEnd($event){
    let dataObj = $event.dataObj;
    this.finalvalue = dataObj.endValue;
    this.zone.run(() => {
      this.message = this.getMessage(this.datasetname, this.startvalue.toFixed(2), this.finalvalue.toFixed(2));
    })
  }

  ngOnInit() {
    setTimeout(() => {
      SelectedSingleton.change(this.sampleCode['ex16'].title);
    })
  }
}
