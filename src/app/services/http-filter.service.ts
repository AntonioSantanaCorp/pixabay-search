import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ImageResult, Pageable } from '../core/interfaces/main.interface';
import { API_URL } from '../core/constant/main.constant';
import { Filter } from '../core/types/main.types';

@Injectable({
  providedIn: 'root'
})
export class HttpFilterService {
  private readonly _httpClient = inject(HttpClient)

  getResults(search: string, filters: Filter): Observable<Pageable<ImageResult>> {
    const params = new HttpParams({ fromObject: { q: search, ...filters } })
    return this._httpClient.get<Pageable<ImageResult>>(API_URL, { params })
  }
}
