import { Component, AfterViewInit} from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';

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
    
    ngOnInit(){
        setTimeout(() => {
            SelectedSingleton.change(this.sampleCode['ex5'].title);
        });
    }
    ngAfterViewInit() {
        Prism && Prism.highlightAll();
    }
};

