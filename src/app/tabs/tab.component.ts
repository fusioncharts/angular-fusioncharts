import { Component, Input, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Tab } from './tabs.interface';
import { TabsComponent } from './tabs.component';

@Component({
    selector: 'tab',
    template: `<div [hidden]="!selected">
	<ng-content></ng-content>
</div>
`
})
export class TabComponent implements OnInit, Tab {

    @Input() tabTitle;

    selected: boolean;

    constructor(private tabsComponent: TabsComponent) {}

    ngOnInit() {
        this.tabsComponent.addTab(this);
    }
}


@NgModule({
    imports: [ BrowserModule ],
    declarations: [
            TabsComponent, TabComponent
    ],
    exports: [
            TabsComponent, TabComponent
    ]
})

export class TabModule {}