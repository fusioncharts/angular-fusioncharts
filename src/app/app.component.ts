import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  dataSource = {
    data: [{value: 3.2}, {value: 3.9}, {value: 3.7}]
  };
}
