import { Component, EventEmitter, Output } from '@angular/core';
import { Tab } from './tabs.interface';

@Component({
    selector: 'tabset',
    template: `<ul>
    <li *ngFor="let tab of tabs">
        <a href="javascript:void(0)" (click)="selectTab(tab)">{{tab.tabTitle}}</a>
    </li>
</ul>
<ng-content></ng-content>`
})

export class TabsComponent {
// export class TabsComponent {

    tabs: Tab[] = [];
    // selected: any;
    // @Output() selected: any = new EventEmitter();
    
    addTab(tab: Tab) {
        if (!this.tabs.length) {
            tab.selected = true;
        }
        this.tabs.push(tab);
    }
    
    selectTab(tab: Tab) {
        this.tabs.map((tab) => {
            tab.selected = false;
        })
        tab.selected = true;
        // this.selected.emit({selectedTab: tab});        
    }
}