import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSuffix',
  standalone: true
})
export class NumberSuffixPipe implements PipeTransform {

  transform(value: number): string {
    const valueString = String(value)

    if (valueString.length <= 3) return valueString
    if (valueString.length >= 4 && valueString.length <= 6)
      return `${valueString[0]}${valueString[1]}K`
    if (valueString.length > 6)
      return `${valueString[0]}${valueString[1]}M`

    return '';
  }

}
