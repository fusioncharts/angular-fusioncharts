import { Component, Input } from '@angular/core';

declare var FusionCharts: any;

@Component({
  selector: 'fusioncharts',
  template: '<h1>FusionCharts will render here</h1>'
})
export class AngularFusionCharts {
	@Input() id: string;
	@Input() width: string;
	@Input() height: string;
	@Input() type: string;
	@Input() dataFormat: string;
	@Input() dataSource: string;
	@Input() dataset: string;
	@Input() categories: string;
	@Input() chart: string;
	@Input() linkeddata: string;
	@Input() trendlines: string;
	@Input() vtrendlines: string;
	@Input() annotations: string;
	@Input() colorange: string;
	@Input() lineset: string;
	@Input() axis: string;
	@Input() connectors: string;
	@Input() pointers: string;
	@Input() value: string;
	@Input() processes: string;
	@Input() tasks: string;
	@Input() rows: string;
	@Input() columns: string;
	@Input() map: string;
	@Input() markers: string;
	@Input() theme: string;


	ngAfterViewInit() {

		var component = this;
		
		FusionCharts.ready(() => {
		    var chart = new FusionCharts({
		        type: component.type,
		        renderAt: component.id,
		        width: component.width,
		        height: component.height,
		        dataFormat: component.dataFormat,
		        dataSource: component.dataSource
		    })
		    .render();
		});
	}

	ngOnChanges(changes){
		console.log (changes);
	}

}
