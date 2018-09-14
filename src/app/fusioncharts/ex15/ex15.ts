import { Component, NgZone} from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';
declare var Prism;

@Component({
  selector: 'chart',
  templateUrl: 'ex15.html',
  styleUrls: [
    '../ex.css'
  ]
})
export class Ex15 {
  demoId = 'ex15';
  
  sampleCode = fcDemos;
  dataSource: any;
  message: any;
  constructor(private zone:NgZone){
    this.dataSource = {
      "chart": {
        "caption": "Countries With Most Oil Reserves [2017-18]",
        "subCaption": "In MMbbl = One Million barrels",
        "xAxisName": "Country",
        "yAxisName": "Reserves (MMbbl)",
        "numberSuffix": "K",
        "theme": "fusion",
      },
      "data": [{
        "label": "Venezuela",
        "value": "290"
      }, {
        "label": "Saudi",
        "value": "260"
      }, {
        "label": "Canada",
        "value": "180"
      }, {
        "label": "Iran",
        "value": "140"
      }, {
        "label": "Russia",
        "value": "115"
      }, {
        "label": "UAE",
        "value": "100"
      }, {
        "label": "US",
        "value": "30"
      }, {
        "label": "China",
        "value": "30"
      }]
    };
  }

  chartRender($event){
    this.zone.run(() => {
      this.message = 'Chart has completed rendering.';
    })
  }

  ngAfterViewInit() {
    Prism && Prism.highlightAll();
  }
  ngOnInit(){
    setTimeout(() => {
      SelectedSingleton.change(this.sampleCode['ex15'].title);
    })
  }
}
