import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService, Course } from '../../services/course.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {
    this.courses = this.courseService.getCourses();
  }
}
