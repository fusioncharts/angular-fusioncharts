import { Component, NgZone} from '@angular/core';

import fcDemos from '../samplecode';

declare var Prism;

@Component({
    selector: 'chart',
    templateUrl: 'ex11.html',
      styleUrls: [
          '../ex.css'
      ]
})
export class Ex11 {
    demoId = 'ex11';

    sampleCode = fcDemos;

    dataSource = {};

    constructor(private zone:NgZone){}

    ngAfterViewInit() {
        Prism && Prism.highlightAll();
    }
}
