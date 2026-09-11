import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[appFusionchartsDirective]',
    standalone: false
})
export class FusionChartsDirective {

  constructor(private el: ElementRef) {
  }

}
