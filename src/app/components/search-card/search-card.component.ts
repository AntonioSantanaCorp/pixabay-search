import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SetFiltersComponent } from './components/set-filters/set-filters.component';
import { FilterListComponent } from './components/filter-list/filter-list.component';

@Component({
  selector: 'app-search-card',
  standalone: true,
  imports: [CommonModule, FilterListComponent, MatCardModule, MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule, MatDialogModule],
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss']
})
export class SearchCardComponent {

  private readonly _dialog = inject(MatDialog)

  openSetFilters() {
    this._dialog.open(SetFiltersComponent)
  }
}
