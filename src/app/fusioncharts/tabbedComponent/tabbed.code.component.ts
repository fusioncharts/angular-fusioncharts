import {
  Component,
  Input
} from '@angular/core';

import { CodemirrorService } from '@nomadreservations/ngx-codemirror';


@Component({
  selector:'tabbed-code',
  templateUrl: './tabbed.code.html'
})
export default class TabbedCode {
  @Input() moduleCode;
  @Input() componentCode;
  @Input() templateCode;
  cSelected = 'component';

  constructor (private _codeMirror: CodemirrorService) {}

  ngOnInit(){
    // this._codeMirror.instance$.subscribe( )
  }

  selectCode(type){
    this.cSelected = type;
  }


}