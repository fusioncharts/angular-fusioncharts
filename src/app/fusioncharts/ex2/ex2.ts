import { Component, AfterViewInit} from '@angular/core';

import fcDemos from '../samplecode';

declare var Prism;
import SelectedSingleton from '../services/selected.singleton';

@Component({
    selector: 'chart',
    templateUrl: 'ex2.html'
})

export class Ex2 {
    demoId = 'ex2';
    sampleCode = fcDemos;
    dataSource = {
        "chart": {
          "caption": "Recommended Portfolio Split",
          "subCaption" : "For a net-worth of $1M",
          "showValues":"1",
          "showPercentInTooltip" : "0",
          "numberPrefix" : "$",
          "enableMultiSlicing":"1",
          "theme": "fusion"
        },
        "data": [{
          "label": "Equity",
          "value": "300000"
        }, {
          "label": "Debt",
          "value": "230000"
        }, {
          "label": "Bullion",
          "value": "180000"
        }, {
          "label": "Real-estate",
          "value": "270000"
        }, {
          "label": "Insurance",
          "value": "20000"
        }]
    }

    constructor () {
      
    }
    ngOnInit(){
      setTimeout(() => {
        SelectedSingleton.change(this.sampleCode['ex2'].title);
      })
    }
    ngAfterViewInit() {
        Prism && Prism.highlightAll();
    }

}
