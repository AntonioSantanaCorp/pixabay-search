import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ImageResult } from 'src/app/core/interfaces/main.interface';
import { NgOptimizedImage } from '@angular/common'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-item-result',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    NgOptimizedImage,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './item-result.component.html',
  styleUrls: ['./item-result.component.scss']
})
export class ItemResultComponent {
  @Input({ required: true }) itemResult!: ImageResult
}
