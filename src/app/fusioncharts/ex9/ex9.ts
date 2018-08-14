import { Component, AfterViewInit, NgZone} from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';
declare var Prism;

@Component({
    selector: 'chart',
    templateUrl: 'ex9.html'
})

export class Ex9 {
    demoId = 'ex9';
    sampleCode = fcDemos;
    
    logMessage = 'Hover on the plot to see the percentage of a column wrt total';
    
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
    
    total: number;
    
    getPercentValue() {
        return (eve,  arg) => {
            this.zone.run(() => {
                
                let value = (arg.value / this.total * 100).toFixed(2);
                this.logMessage = `<b style='font-weight:bold'>${arg.categoryLabel}</b> is  <b style='font-weight:bold'>${value}%</b> of the total`
            })
        }
    }
    
    events = {
        dataPlotRollOver: this.getPercentValue()
    }
    
    ngOnInit(){
        setTimeout(() => {
            SelectedSingleton.change(this.sampleCode['ex9'].title);
        })
    }
    constructor (private zone:NgZone) {
        let myData = this.dataSource.data;
        
        this.total = 0;
        
        // Calculate the sum of all values
        for (let i = 0; i < myData.length; i++) {
            this.total += Number(myData[i].value);
        }
    
    }

    ngAfterViewInit() {
        Prism && Prism.highlightAll();
    }
}
