import { Component, AfterViewInit} from '@angular/core';

import fcDemos from '../samplecode';

declare var Prism;

@Component({
    selector: 'chart',
    templateUrl: 'ex5.html'
})

export class Ex5 {
    demoId = 'ex5';
    sampleCode = fcDemos;

    constructor () {

    }
    ngAfterViewInit() {
        Prism && Prism.highlightAll();
    }
};

