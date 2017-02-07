import {Injectable, PipeTransform, Pipe} from '@angular/core';

/**
 * Transforms any input value
 */
@Pipe({
  name: 'fusionchartsPipe'
})
@Injectable()
export class FusionChartsPipe implements PipeTransform {
  transform(value: any, args: any[] = null): string {
    return value;
  }
}
