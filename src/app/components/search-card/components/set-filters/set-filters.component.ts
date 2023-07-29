import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-set-filters',
  standalone: true,
  imports: [CommonModule, MatDividerModule, MatDividerModule, MatDialogModule, MatButtonModule, MatSlideToggleModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule],
  templateUrl: './set-filters.component.html',
  styleUrls: ['./set-filters.component.scss']
})
export class SetFiltersComponent {

}
