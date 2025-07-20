import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-sidebar.component.html',
  styleUrls: ['./filter-sidebar.component.scss']
})
export class FilterSidebarComponent {
  categories: string[] = ['Web Development', 'Data Science', 'Marketing'];
  @Output() filter = new EventEmitter<string>();

  onFilter(category: string) {
    this.filter.emit(category);
  }
}
