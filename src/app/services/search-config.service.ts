import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SetFiltersComponent } from '../components/search-card/components/set-filters/set-filters.component';
import { Filter, FilterType } from '../core/types/main.types';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class SearchConfigService {

  public readonly filters = signal<Filter[]>([])

  public readonly pageIndex = signal(1)

  public readonly filterObject = computed(() => this.filters()
    .reduce((accum: Filter, currValue) => ({ ...accum, ...currValue }), {}))

  private readonly _dialog = inject(MatDialog)

  constructor() {
    toObservable(this.filters)
      .pipe(takeUntilDestroyed())
      .subscribe(()=>this.pageIndex.set(1))
  }

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

    this.filters.set([...newFilters]);
  }
}
