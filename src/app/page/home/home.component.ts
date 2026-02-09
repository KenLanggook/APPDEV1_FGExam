import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  appTitle: string = 'First Grading Exam';
  studentCount: number = 120;
  isLoggedIn: boolean = true;

}