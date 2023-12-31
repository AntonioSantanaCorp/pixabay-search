import { Component, EventEmitter, OnInit, Output, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FilterListComponent } from './components/filter-list/filter-list.component';
import { SearchConfigService } from 'src/app/services/search-config.service';
import { MatBadgeModule } from '@angular/material/badge';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-card',
  standalone: true,
  imports: [
    CommonModule,
    FilterListComponent,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatBadgeModule,
    FormsModule],
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent {

  private readonly _filtersService = inject(SearchConfigService)

  @Output() public readonly searchedValue = new EventEmitter<string>()

  public get amountFilters() {
    return this._filtersService.filters().length
  }

  openSetFilters() {
    this._filtersService.openFiltersPopup()
  }

  onSearch(searchText: string) {
    this.searchedValue.emit(searchText)
  }
}
