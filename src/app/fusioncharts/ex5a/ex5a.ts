import { Component, AfterViewInit} from '@angular/core';

import fcDemos from '../samplecode';

declare var Prism;

@Component({
    selector: 'chart',
    templateUrl: 'ex5a.html'
})

export class Ex5a {
    demoId = 'ex5a';
    sampleCode = fcDemos;

    constructor () {

    }
    ngAfterViewInit() {
        Prism && Prism.highlightAll();
    }
};
