import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatDialogModule, MatButtonModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss'
})
export class ReviewsComponent {
  displayedColumns: string[] = ['user', 'rating', 'comment'];
  reviews = [
    { user: 'Amit', rating: 5, comment: 'Great campus and faculty!' },
    { user: 'Priya', rating: 4, comment: 'Excellent placements.' },
    { user: 'Rahul', rating: 3, comment: 'Good infrastructure.' }
  ];

  constructor(private dialog: MatDialog) {}

  openAddReviewDialog() {
    // Dialog logic will go here
    alert('Add Review dialog would open here.');
  }
}
