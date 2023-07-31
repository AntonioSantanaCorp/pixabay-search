import { Injectable, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SetFiltersComponent } from '../components/search-card/components/set-filters/set-filters.component';

@Injectable({
  providedIn: 'root'
})
export class FiltersConfigService {

  private readonly _dialog = inject(MatDialog)

  constructor() { }

  openFiltersPopup() {
    return this._dialog.open(SetFiltersComponent)
  }
}
