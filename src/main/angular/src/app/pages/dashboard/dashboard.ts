import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatListModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class DashboardComponent {
  user = {
    name: 'Ashish Kumar',
    email: 'ashish@example.com',
    enrolledCourses: [
      'Full Stack Web Development',
      'Data Science Bootcamp'
    ],
    reviews: [
      { course: 'Full Stack Web Development', rating: 5, comment: 'Excellent!' }
    ]
  };
}
