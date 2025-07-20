import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { CollegeListComponent } from './pages/college-list/college-list';
import { CollegeDetailComponent } from './pages/college-detail/college-detail';
import { ReviewsComponent } from './pages/reviews/reviews';
import { LoginComponent } from './pages/login/login';
import { RegisterComponent } from './pages/register/register';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel';
import { CoursesComponent } from './pages/courses/courses.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'colleges', component: CollegeListComponent },
  { path: 'college/:id', component: CollegeDetailComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'courses', component: CoursesComponent },
];
