import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-college-detail',
  standalone: true,
  imports: [CommonModule, MatTabsModule, MatCardModule],
  templateUrl: './college-detail.html',
  styleUrl: './college-detail.scss'
})
export class CollegeDetailComponent {
  college = {
    name: 'Indian Institute of Technology Bombay',
    location: 'Mumbai, Maharashtra',
    ranking: 1,
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
    courses: ['B.Tech', 'M.Tech', 'PhD'],
    reviews: [
      { user: 'Amit', rating: 5, comment: 'Great campus and faculty!' },
      { user: 'Priya', rating: 4, comment: 'Excellent placements.' }
    ]
  };
}
