import {Component, ViewEncapsulation} from '@angular/core';
import '../../node_modules/prismjs/prism.js';

@Component({
  	selector: 'app',
  	styleUrls: [
  		'./app.component.css',
  		'../../node_modules/bootstrap/dist/css/bootstrap.css',
  		'../../node_modules/prismjs/themes/prism.css'
	],
    encapsulation: ViewEncapsulation.None,
  	templateUrl: './app.component.html',
})
export class AppComponent {
	updateId (id) {

	}
}
