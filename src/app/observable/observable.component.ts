import {Component, Input, ElementRef, AfterViewInit, OnInit, KeyValueDiffers, SimpleChange} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

import * as FusionCharts from 'fusioncharts';



import 'rxjs/add/operator/share';

export class NavService {
    // Data store 
    private dataStore: any;
    
    navChange$: Observable<Object>;
    private _observer: Observer<Object>;
    
    constructor() {
        this.navChange$ = new Observable(observer => this._observer = observer ).share();
        this.dataStore = {
            name: "Rohit",
            lname: "Kumar"
        }
        // share() allows multiple subscribers
    }
    
    changeNav(number) {
        this.dataStore.name = number;

        this._observer.next(number);
    }
    
    navItem() {
        return this.dataStore;
    }
}


@Component({
    selector: 'obs-comp',
    template: `obs component, item: {{item.name}}`
})
export class ObservingComponent {
    item: any;
    subscription: any;
    constructor(private _navService: NavService) {

    }
    ngOnChanges() {
        console.log('changes obs');
    }

    ngOnInit() {
        this.item = this._navService.navItem();
        this.subscription = this._navService.navChange$.subscribe(item => this.selectedNavItem(item));
    }
    selectedNavItem(item: Object) {
        this.item.name = '' + item;
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}


@Component({
    selector: 'my-nav',
    template:`
        <div class="nav-item" (click)="selectedNavItem('John')">nav 1 (Jhon)</div>
        <div class="nav-item" (click)="selectedNavItem('Michael')">nav 2 (Michael)</div>
    `,
})
export class Navigation {
    item: {
        name: "Rohit"
    };
    constructor(private _navService: NavService) {

    }
    ngOnChanges() {
        console.log('changes Nav');
    }
    selectedNavItem(item: string) {
        console.log('selected nav item ' + item);
        this._navService.changeNav(item);
    }
}


@Component({
    selector: 'my-app',
    template: `{{title}}
    <p>
    <my-nav></my-nav>
    <button (click)="showObsComp = !showObsComp">toggle ObservingComponent</button>
    <div *ngIf='showObsComp'>
        <obs-comp></obs-comp>
    </div>
    `
})
export class MyAppComponent {
    title = "Angular 2 - event delegation";
    showObsComp = true;
    ngOnChanges() {
        console.log('changes MyApp');
    }
    constructor() {
    }
}
