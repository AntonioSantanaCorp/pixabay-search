import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { FiltersConfigService } from 'src/app/services/filters-config.service';
import { Filter, FilterType } from 'src/app/core/types/main.types';
import { getObjectMainProp } from 'src/app/core/utils/main.util';

@Component({
  selector: 'app-filter-list',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatButtonModule, MatIconModule, MatExpansionModule],
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent {

  private readonly _filtersService = inject(FiltersConfigService)

  get filters() {
    return this._filtersService.filters()
  }

  openFiltersPopup() {
    this._filtersService.openFiltersPopup()
  }

  removeFilter(filter: Filter) {
    const filterKey = <FilterType>getObjectMainProp(filter)
    this._filtersService.removeFilter(filterKey)
  }

}
