import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ImageResult } from 'src/app/core/interfaces/main.interface';
import { NgOptimizedImage } from '@angular/common'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule, MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-item-result',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    NgOptimizedImage,
    MatGridListModule,
    MatButtonModule
  ],
  templateUrl: './item-result.component.html',
  styleUrls: ['./item-result.component.scss']
})
export class ItemResultComponent {
  @Input({ required: true }) itemResult!: ImageResult
}
