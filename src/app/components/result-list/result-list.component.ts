import { Component, Input, OnInit, WritableSignal, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageResult, Pageable } from 'src/app/core/interfaces/main.interface';
import { ItemResultComponent } from './components/item-result/item-result.component';
import { PaginatorResultComponent } from './components/paginator-result/paginator-result.component';
import { SearchConfigService } from 'src/app/services/search-config.service';

@Component({
  selector: 'app-result-list',
  standalone: true,
  imports: [
    CommonModule,
    ItemResultComponent,
    PaginatorResultComponent
  ],
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent {

  protected readonly _searchService = inject(SearchConfigService)

  protected pageIndex: number = 0

  @Input() public resultList!: WritableSignal<Pageable<ImageResult> | null>

  constructor() {
    effect(() => this.pageIndex = (this._searchService.pageIndex() - 1))
  }

  onChangePage(pageIndex: number) {
    this._searchService.pageIndex.set(pageIndex)
  }
}
