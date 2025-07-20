import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CourseService, Course } from '../../services/course.service';
import { CourseListComponent } from '../../components/course-list/course-list.component';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { FilterSidebarComponent } from '../../components/filter-sidebar/filter-sidebar.component';
import { HomepageCarouselComponent } from '../../components/homepage-carousel/homepage-carousel.component';
import { CourseCarouselComponent } from '../../components/course-carousel/course-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
imports: [CommonModule, FormsModule, CourseListComponent, SearchBarComponent, FilterSidebarComponent, HomepageCarouselComponent, CourseCarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }

  onSearch(query: string) {
    this.courses = this.courseService.searchCourses(query);
  }

  onFilter(category: string) {
    this.courses = this.courseService.filterCourses(category);
  }
}
