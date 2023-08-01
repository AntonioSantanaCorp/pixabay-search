import { Component, Input, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageResult, Pageable } from 'src/app/core/interfaces/main.interface';
import { ItemResultComponent } from './components/item-result/item-result.component';

@Component({
  selector: 'app-result-list',
  standalone: true,
  imports: [
    CommonModule,
    ItemResultComponent
  ],
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent {
  @Input() resultList!: WritableSignal<Pageable<ImageResult> | null>
}
