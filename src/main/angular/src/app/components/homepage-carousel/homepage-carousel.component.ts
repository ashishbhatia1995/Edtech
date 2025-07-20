import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-homepage-carousel',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './homepage-carousel.component.html',
  styleUrls: ['./homepage-carousel.component.scss']
})
export class HomepageCarouselComponent {
  banners = [
    {
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
      title: 'Explore Top Colleges',
      subtitle: 'Find the best colleges for your career goals.'
    },
    {
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      title: 'Discover Popular Courses',
      subtitle: 'Browse trending courses and boost your skills.'
    },
    {
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80',
      title: 'Read Student Reviews',
      subtitle: 'Get insights from real students and alumni.'
    }
  ];
  current = 0;

  prev() {
    this.current = (this.current - 1 + this.banners.length) % this.banners.length;
  }
  next() {
    this.current = (this.current + 1) % this.banners.length;
  }
}
