import { Injectable } from '@angular/core';

export interface Course {
  id: number;
  title: string;
  description: string;
  category: string;
  rating: number;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class CourseService {
  private courses: Course[] = [
    {
      id: 1,
      title: 'Full Stack Web Development',
      description: 'Learn to build modern web applications using Angular, Node.js, and MongoDB.',
      category: 'Web Development',
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=320&q=80'
    },
    {
      id: 2,
      title: 'Data Science Bootcamp',
      description: 'Master data analysis, visualization, and machine learning with Python.',
      category: 'Data Science',
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=320&q=80'
    },
    {
      id: 3,
      title: 'Digital Marketing Essentials',
      description: 'Grow your business online with SEO, SEM, and social media marketing.',
      category: 'Marketing',
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=320&q=80'
    }
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  searchCourses(query: string): Course[] {
    return this.courses.filter(course =>
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  filterCourses(category: string): Course[] {
    return this.courses.filter(course => course.category === category);
  }
}
