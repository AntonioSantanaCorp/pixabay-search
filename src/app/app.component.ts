import { Component, computed, effect, inject, signal } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FiltersConfigService } from './services/filters-config.service';
import { HttpFilterService } from './services/http-filter.service';
import { ImageResult, Pageable } from './core/interfaces/main.interface';
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private readonly _filtersService = inject(FiltersConfigService)

  private readonly _httpService = inject(HttpFilterService)

  private readonly _searchValue = signal<string>('')

  protected resultList = signal<Pageable<ImageResult> | null>(null)

  constructor() {
    effect(() => {
      if (!this._searchValue()) return
      this._httpService
        .getResults(this._searchValue(), this._filtersService.filterObject())
        .subscribe(this.resultList.set)
    })
  }

  onSearch(searchText: string) {
    this._searchValue.set(searchText)
  }
}
