import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[fusionchartsDirective]'
})
export class FusionChartsDirective {

  constructor(private el: ElementRef) {
  }

}
