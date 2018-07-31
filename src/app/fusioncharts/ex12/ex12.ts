import { Component, NgZone} from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';
declare var Prism;

@Component({
    selector: 'chart',
    templateUrl: 'ex12.html',
    styleUrls: [
        '../ex.css'
    ]
})
export class Ex12 {
    demoId = 'ex12';
    
    sampleCode = fcDemos;
    
    dataSource = {
        "chart": {
            "caption": "Nordstorm's Customer Satisfaction Score for 2017",
            "lowerLimit": "0",
            "upperLimit": "100",
            "showValue": "1",
            "numberSuffix": "%",
            "theme": "fusion",
            "showToolTip": "0"
        },
        "colorRange": {
            "color": [{
                "minValue": "0",
                "maxValue": "50",
                "code": "#F2726F"
            }, {
                "minValue": "50",
                "maxValue": "75",
                "code": "#FFC533"
            }, {
                "minValue": "75",
                "maxValue": "100",
                "code": "#62B58F"
            }]
        },
        "dials": {
            "dial": [{
                "value": "81"
            }]
        }
    }
    
    constructor(private zone:NgZone){}
    
    ngAfterViewInit() {
        Prism && Prism.highlightAll();
    }
    ngOnInit(){
        setTimeout(() => {
            SelectedSingleton.change(this.sampleCode['ex12'].title);
        });
    }
}
