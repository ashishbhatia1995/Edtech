import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CollegeService, College } from '../../services/college.service';

@Component({
  selector: 'app-college-list',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './college-list.html',
  styleUrl: './college-list.scss'
})
export class CollegeListComponent {
  colleges: College[] = [];
  constructor(private collegeService: CollegeService) {
    this.colleges = this.collegeService.getColleges();
  }
}
