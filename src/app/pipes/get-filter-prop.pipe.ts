import { Pipe, PipeTransform } from '@angular/core';
import { getObjectMainProp } from '../core/utils/main.util';

@Pipe({
  name: 'getFilterProp',
  standalone: true
})
export class GetFilterPropPipe implements PipeTransform {

  transform(value: unknown): string {
    const result = getObjectMainProp(value)
    
    return result.replace('_', ' ');
  }

}
