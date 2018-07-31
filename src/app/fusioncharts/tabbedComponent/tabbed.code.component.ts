import {
  Component,
  Input
} from '@angular/core';


@Component({
  selector:'tabbed-code',
  templateUrl: './tabbed.code.html'
})
export default class TabbedCode {
  @Input() moduleCode;
  @Input() componentCode;
  @Input() templateCode;
  cSelected = 'component';

  constructor () {}

  selectCode(type){
    this.cSelected = type;
  }


}