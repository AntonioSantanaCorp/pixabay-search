import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FILTER_FORM } from 'src/app/core/constant/main.constant';
import { SearchConfigService } from 'src/app/services/search-config.service';

@Component({
  selector: 'app-set-filters',
  standalone: true,
  imports: [
    CommonModule,
    MatDividerModule,
    MatDialogModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './set-filters.component.html',
  styleUrls: ['./set-filters.component.scss']
})
export class SetFiltersComponent implements OnInit, OnDestroy {
  private readonly _filtersService = inject(SearchConfigService)

  private readonly _dialogRef = inject(MatDialogRef<SetFiltersComponent>)

  protected readonly filterForm = new FormGroup(FILTER_FORM)

  ngOnInit(): void {
    this.filterForm.patchValue(this._filtersService.filterObject())
  }

  ngOnDestroy(): void {
    this.filterForm.reset()
  }

  saveChanges() {
    this._filtersService.saveFilters(this.filterForm.value)
    this._dialogRef.close()
  }
}
