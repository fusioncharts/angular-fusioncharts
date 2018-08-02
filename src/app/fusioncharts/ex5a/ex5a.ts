import { Component, AfterViewInit} from '@angular/core';

import fcDemos from '../samplecode';
import SelectedSingleton from '../services/selected.singleton';
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
    ngOnInit(){
        setTimeout(() => {
            SelectedSingleton.change(this.sampleCode['ex5a'].title);
        })
    }


    ngAfterViewInit() {
        Prism && Prism.highlightAll();
    }
};
