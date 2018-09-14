import {
  Component,
  NgZone
} from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';
declare var Prism;

@Component({
  selector: 'chart',
  templateUrl: './ex24.html',
  styleUrls: [
    '../ex.css'
  ]
})
export class Ex24 {
  demoId = 'ex24';
  sampleCode = fcDemos;
  dataSource: any;
  selectedSlice = 'none';
  chart: any;
  constructor(private zone: NgZone) {
    this.dataSource = {
      "chart": {
          "caption": "Market Share of Web Servers",
          "plottooltext": "<b>$percentValue</b> of web servers run on $label servers",
          "showLegend": "1",
          "showPercentValues": "1",
          "legendPosition": "bottom",
          "useDataPlotColorForLabels": "1",
          "enablemultislicing": "0",
          "showlegend": "0",
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
    this.chart = $event.chart;
    
  }
  onRadioOptionChange(option){
    this.selectedSlice = option;
    
    this.dataSource.data.forEach((d, index) => {
      if(option == 'none'){
        this.chart.slicePlotItem(index, false);
      } else if(option === d.label.toLowerCase()){
        this.chart.slicePlotItem(index, true);
      }
    });
  }

  getLabel(index){
    return this.dataSource.data[index].label;
  }

  dataplotClick($event){
    let dataIndex = $event.dataObj.dataIndex;
    let isSliced = $event.dataObj.isSliced;
    this.zone.run(() => {
      this.selectedSlice = isSliced ? 'none' : this.getLabel(dataIndex).toLowerCase();
    })
  }
  
  ngOnInit() {
    setTimeout(() => {
      SelectedSingleton.change(this.sampleCode['ex24'].title);
    })
  }
}
