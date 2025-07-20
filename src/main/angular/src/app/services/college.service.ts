import { Injectable } from '@angular/core';

export interface College {
  id: number;
  name: string;
  location: string;
  ranking: number;
  image: string;
  courses: string[];
  reviews: number;
}

@Injectable({ providedIn: 'root' })
export class CollegeService {
  private colleges: College[] = [
    {
      id: 1,
      name: 'Indian Institute of Technology Bombay',
      location: 'Mumbai, Maharashtra',
      ranking: 1,
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
      courses: ['B.Tech', 'M.Tech', 'PhD'],
      reviews: 1200
    },
    {
      id: 2,
      name: 'Delhi University',
      location: 'Delhi',
      ranking: 2,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
      courses: ['BA', 'B.Com', 'MA'],
      reviews: 950
    },
    {
      id: 3,
      name: 'BITS Pilani',
      location: 'Pilani, Rajasthan',
      ranking: 3,
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80',
      courses: ['B.E.', 'M.E.', 'MBA'],
      reviews: 800
    }
  ];

  getColleges(): College[] {
    return this.colleges;
  }
}
