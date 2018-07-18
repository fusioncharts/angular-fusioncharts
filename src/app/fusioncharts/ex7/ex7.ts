import { Component, NgZone} from '@angular/core';

import fcDemos from '../samplecode';

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
        chart: {
            caption: "Harry's SuperMart",
            subCaption: "Top 5 stores in last month by revenue",
            numberPrefix: "$",
            theme: "fusion"
        },
        data:[{
            label: "Bakersfield Central",
            value: "880000"
        },
        {
            label: "Garden Groove harbour",
            value: "730000"
        },
        {
            label: "Los Angeles Topanga",
            value: "590000"
        },
        {
            label: "Compton-Rancho Dom",
            value: "520000"
        },
        {
            label: "Daly City Serramonte",
            value: "330000"
        }]
    };
    
    selectedValue = "";

    update() {
        return (eve, arg) => {            
            this.zone.run(() => {
                this.selectedValue = arg.displayValue;
            })
        }
    }
    
    events = {
        dataplotRollover: this.update()
    }

    constructor(private zone:NgZone){}

    ngAfterViewInit() {
        Prism && Prism.highlightAll();
    }
}
