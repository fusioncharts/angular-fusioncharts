import {
  Component,
  Input
} from '@angular/core';



@Component({
  selector:'tabbed-code',
  templateUrl: './tabbed.code.html'
})
export class TabbedCode {
  @Input() moduleCode;
  @Input() componentCode;
  @Input() templateCode;
  cSelected = 'component';

  constructor () {}

  ngOnInit(){
  }

  selectCode(type){
    this.cSelected = type;
  }


}