import {Injectable, PipeTransform, Pipe} from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
    name: 'fusionchartsPipe',
    standalone: false
})
@Injectable()
export class FusionChartsPipe implements PipeTransform {
  transform(value: any, args?: any[]): string {
    return value;
  }
}
