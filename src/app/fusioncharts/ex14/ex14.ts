import { Component, NgZone} from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';
declare var Prism;

@Component({
  selector: 'chart',
  templateUrl: 'ex14.html',
  styleUrls: [
    '../ex.css'
  ]
})
export class Ex14 {
  demoId = 'ex14';
  
  sampleCode = fcDemos;
  
  dataSource = {
    "chart": {
      "caption": "Countries With Most Oil Reserves [2017-18]",
      "subCaption": "In MMbbl = One Million barrels",
      "xAxisName": "Country",
      "yAxisName": "Reserves (MMbbl)",
      "numberSuffix": "K",
      "theme": "gammel",
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
  constructor(private zone:NgZone){}
  
  ngAfterViewInit() {
    Prism && Prism.highlightAll();
  }
  ngOnInit(){
    setTimeout(() => {
      SelectedSingleton.change(this.sampleCode['ex14'].title);
    })
  }
}
