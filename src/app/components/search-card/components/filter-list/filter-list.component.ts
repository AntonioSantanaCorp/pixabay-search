import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { FiltersConfigService } from 'src/app/services/filters-config.service';

@Component({
  selector: 'app-filter-list',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatButtonModule, MatIconModule, MatExpansionModule],
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent {

  private readonly _filtersConfigService = inject(FiltersConfigService)

  openFiltersPopup() {
    this._filtersConfigService.openFiltersPopup()
  }

}
