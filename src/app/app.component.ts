import { Component,  effect, inject, signal } from '@angular/core';
import { SearchConfigService } from './services/search-config.service';
import { HttpFilterService } from './services/http-filter.service';
import { ImageResult, Pageable } from './core/interfaces/main.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly _searchService = inject(SearchConfigService)

  private readonly _httpService = inject(HttpFilterService)

  private readonly _searchValue = signal<string>('')


  protected resultList = signal<Pageable<ImageResult> | null>(null)

  constructor() {
    effect(() => {
      if (!this._searchValue()) return
      this._httpService
        .getResults(this._searchValue(), this._searchService.filterObject(), this._searchService.pageIndex())
        .subscribe(this.resultList.set)
    })
  }

  onSearch(searchText: string) {
    this._searchValue.set(searchText)
  }
}
