import {
  Component,
  NgZone
} from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';
declare var Prism;

@Component({
  selector: 'chart',
  templateUrl: 'ex7.html',
  styleUrls: [
    '../ex.css'
  ]
})
export class Ex7 {
  demoId = 'ex7';

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

  selectedLabel = "";
  selectedValue = "";

  update($event) {
    this.zone.run(() => {
      this.selectedLabel = $event.dataObj.categoryLabel;
      this.selectedValue = $event.dataObj.displayValue;
    })
  }


  ngOnInit() {
    setTimeout(() => {
      SelectedSingleton.change(this.sampleCode['ex7'].title);
    })
  }
  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    Prism && Prism.highlightAll();
  }
}
