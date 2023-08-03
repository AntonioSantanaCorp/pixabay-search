import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberSuffix',
  standalone: true
})
export class NumberSuffixPipe implements PipeTransform {

  transform(value: number): string {
    const { U, K, M } = this.getUnits(value)
    console.log(value, { U, K, M })

    if (K.length < 2) return `${K.join('')}${U.join('')}`
    if (K.length == 3 && M.length == 0) return `${K.join('')}.${U.slice(0, 1).join('')}K`

    return `${M.join('')}.${K.slice(0, 1).join('')}M`;
  }

  private getUnits(value: number) {
    const valueArray = String(value).split('')
    const reverseArray = valueArray.reverse()
    const numberUnits: { [key: string]: number[] } = { U: [], K: [], M: [] }
    const unitGenerator = this.getUnitType();
    let unit = unitGenerator.next()

    for (const number of reverseArray) {

      if (numberUnits[unit.value].length == 3) unit = unitGenerator.next()

      numberUnits[unit.value] = [Number(number), ...numberUnits[unit.value]]

    }

    return numberUnits
  }

  *getUnitType() {
    yield 'U';
    yield 'K';
    return 'M'
  }
}
