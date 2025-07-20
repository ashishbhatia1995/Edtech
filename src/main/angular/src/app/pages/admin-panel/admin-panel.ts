import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.scss'
})
export class AdminPanelComponent {
  displayedColumns: string[] = ['name', 'location', 'ranking', 'actions'];
  colleges = [
    { name: 'IIT Bombay', location: 'Mumbai', ranking: 1 },
    { name: 'Delhi University', location: 'Delhi', ranking: 2 },
    { name: 'BITS Pilani', location: 'Pilani', ranking: 3 }
  ];
  deleteCollege(index: number) {
    this.colleges.splice(index, 1);
  }
}
