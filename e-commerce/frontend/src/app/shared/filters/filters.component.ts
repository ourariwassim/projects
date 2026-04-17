import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  imports: [],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  @Output() filter = new EventEmitter<string>();

  @Input() elements: string[] = [];
  @Input() title: string = '';
  emitFilter(element: string) {
    this.filter.emit(element);
  }
}
