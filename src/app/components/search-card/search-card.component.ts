import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterListComponent } from './components/filter-list/filter-list.component';
import { FiltersConfigService } from 'src/app/services/filters-config.service';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-search-card',
  standalone: true,
  imports: [CommonModule, FilterListComponent, MatCardModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatDialogModule, MatBadgeModule],
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent {

  private readonly _filtersService = inject(FiltersConfigService)

  public get amountFilters() {
    return this._filtersService.filters().length
  }

  openSetFilters() {
    this._filtersService.openFiltersPopup()
  }
}
