import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SetFiltersComponent } from '../components/search-card/components/set-filters/set-filters.component';
import { Filter, FilterType } from '../core/types/main.types';

@Injectable({
  providedIn: 'root'
})
export class FiltersConfigService {

  public readonly filters = signal<Filter[]>([])

  public readonly filterObject = computed(() => this.filters()
    .reduce((accum: Filter, currValue) => ({ ...accum, ...currValue }), {}))

  private readonly _dialog = inject(MatDialog)

  openFiltersPopup() {
    return this._dialog.open(SetFiltersComponent)
  }

  saveFilters(filter: Filter) {
    const newFilters = Object.keys(filter)
      .reduce((accum: Filter[], key) => {
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
