import { Component, AfterViewInit, ViewEncapsulation} from '@angular/core';

import fcDemos from '../samplecode';

declare var Prism;
import SelectedSingleton from '../services/selected.singleton';
@Component({
  selector: 'chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'ex4.html',
  styles: [`
  .chart1 div {
    float: left;
  }
  `]
})

export class Ex4 {
  demoId = 'ex4';
  sampleCode = fcDemos;
  dataSource = {
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
    
    constructor () {
      
    }
    ngOnInit(){
      // SelectedSingleton.change(this.sampleCode['ex4'].title);
    }
    ngAfterViewInit() {
      Prism && Prism.highlightAll();
    }
  };
  