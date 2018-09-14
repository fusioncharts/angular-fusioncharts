import {
  Component,
  NgZone
} from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';
declare var Prism;

@Component({
  selector: 'chart',
  templateUrl: './ex19.html',
  styleUrls: [
    '../ex.css'
  ]
})
export class Ex19 {
  demoId = 'ex19';
  sampleCode = fcDemos;
  dataSource: any;
  chartObj: any;
  constructor(private zone: NgZone) {
    this.dataSource = {
      "chart": {
        "caption": "Market Share of Web Servers",
        "plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
        "showLegend": "1",
        "showPercentValues": "1",
        "legendPosition": "bottom",
        "useDataPlotColorForLabels": "1",
        "theme": "fusion",
      },
      "data": [{
        "label": "Apache",
        "value": "32647479"
      }, {
        "label": "Microsoft",
        "value": "22100932"
      }, {
        "label": "Zeus",
        "value": "14376"
      }, {
        "label": "Other",
        "value": "18674221"
      }]
    };
  }

  initialized($event){
    this.chartObj = $event.chart;
  }

  sliceOut(){
    this.chartObj.slicePlotItem(1, true);
  }

  reset(){
    this.chartObj.slicePlotItem(1, false);
  }


  ngOnInit() {
    setTimeout(() => {
      SelectedSingleton.change(this.sampleCode['ex19'].title);
    })
  }
}
