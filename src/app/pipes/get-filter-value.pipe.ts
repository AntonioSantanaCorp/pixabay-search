import { Pipe, PipeTransform } from '@angular/core';
import { getObjectMainValue } from '../core/utils/main.util';

@Pipe({
  name: 'getFilterValue',
  standalone: true
})
export class GetFilterValuePipe implements PipeTransform {

  transform(value: unknown): string {
    let result = getObjectMainValue(value)

    if (typeof result == 'boolean') result = result ? 'yes' : 'no'

    return result
  }

}
