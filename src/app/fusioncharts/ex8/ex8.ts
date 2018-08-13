import { Component, AfterViewInit} from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';
declare var Prism;

@Component({
  selector: 'chart',
  templateUrl: 'ex8.html',
  styleUrls: [
    '../ex.css'
  ]
})

export class Ex8 {
  demoId = 'ex8';
  sampleCode = fcDemos;
  dataSource:any = {
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
  
  changeBackgroundColor = function () {
    this.dataSource.chart.bgColor = "#efefef";
  };
  
  changeCaptionTextAlignment = function () {
    this.dataSource.chart.captionAlignment = "left";
  };

  reset(){
    this.dataSource.chart.bgColor = "white";
    this.dataSource.chart.captionAlignment = "center";
  }
  
  constructor () {
    
  }
  ngOnInit(){
    setTimeout(() => {
      SelectedSingleton.change(this.sampleCode['ex8'].title);
    })
  }
  ngAfterViewInit() {
    Prism && Prism.highlightAll();
  }
}
