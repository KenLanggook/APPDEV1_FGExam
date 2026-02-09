import { Component } from '@angular/core';

interface UserProfile {
  name: string;
  email: string;
  age: number;
  location: string;
  bio: string;
}

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  user: UserProfile = {
    name: 'Ken Langgook',
    email: 'ken@email.com',
    age: 22,
    location: 'Philippines',
    bio: 'IT Student of University of Baguio'
  };

}