import { Component, Input, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageResult, Pageable } from 'src/app/core/interfaces/main.interface';

@Component({
  selector: 'app-result-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent {
  @Input() resultList!: WritableSignal<Pageable<ImageResult> | null>
}
