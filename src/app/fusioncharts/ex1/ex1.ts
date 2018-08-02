import {
  Component,
  AfterViewInit
} from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';

declare var Prism;

@Component({
  selector: 'chart',
  templateUrl: 'ex1.html'
})

export class Ex1 implements AfterViewInit {
  demoId = 'ex1';
  sampleCode = fcDemos;
  dataSource: Object;
  chartConfig: Object;
  tabOptions:string[];

  constructor() {
    this.sampleCode = fcDemos;

    this.chartConfig = {
      width: '100%',
      height: '400',
      type: "column2d",
      dataFormat: "json",
      creditLabel: 'false'
    };

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

  ngOnInit(){
    setTimeout(() => {
      SelectedSingleton.change(this.sampleCode['ex1'].title);
    })
  }

  ngAfterViewInit() {
    Prism && Prism.highlightAll();
  }

}
