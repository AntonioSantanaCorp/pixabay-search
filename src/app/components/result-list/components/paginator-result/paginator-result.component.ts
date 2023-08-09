import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator-result',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule],
  templateUrl: './paginator-result.component.html',
  styleUrls: ['./paginator-result.component.scss']
})
export class PaginatorResultComponent {
  @Output() public readonly pageChanged = new EventEmitter<number>()

  @Input() public pageIndex: number = 0;

  @Input() public length: number = 0;

  protected handlePageEvent(e: PageEvent) {
    this.pageChanged.emit(e.pageIndex + 1);
  }
}
