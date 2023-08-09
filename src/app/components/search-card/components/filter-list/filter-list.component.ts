import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { SearchConfigService } from 'src/app/services/search-config.service';
import { Filter, FilterType } from 'src/app/core/types/main.types';
import { getObjectMainProp } from 'src/app/core/utils/main.util';
import { GetFilterValuePipe } from 'src/app/pipes/get-filter-value.pipe';
import { GetFilterPropPipe } from 'src/app/pipes/get-filter-prop.pipe';

@Component({
  selector: 'app-filter-list',
  standalone: true,
  imports: [
    CommonModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    GetFilterValuePipe,
    GetFilterPropPipe],
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent {

  private readonly _filtersService = inject(SearchConfigService)

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
