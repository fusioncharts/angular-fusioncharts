import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appFusionchartsDirective]'
})
export class FusionChartsDirective {

  constructor(private el: ElementRef) {
  }

}
