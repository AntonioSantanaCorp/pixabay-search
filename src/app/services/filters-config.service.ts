import { Injectable, effect, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SetFiltersComponent } from '../components/search-card/components/set-filters/set-filters.component';
import { Filter, FilterType } from '../core/types/main.types';

@Injectable({
  providedIn: 'root'
})
export class FiltersConfigService {

  public readonly filters = signal<Filter[]>([])

  private readonly _dialog = inject(MatDialog)

  constructor() {
    effect(() => console.log(this.filters()))
  }

  openFiltersPopup() {
    return this._dialog.open(SetFiltersComponent)
  }

  saveFilters(filter: Filter) {
    const newFilters = Object.keys(filter)
      .reduce((accum: Filter[], key) => {
        debugger
        const result = filter[key as FilterType]
        if (result) return [...accum, (<Filter>{ [key]: result })]
        return [...accum]
      }, [])

    this.filters.set([...newFilters])
  }

  removeFilter(filterType: FilterType) {
    const newFilters = this.filters()
      .filter(elemn => !Object.keys(elemn).includes(filterType))

    this.filters.set([...newFilters])
  }
}