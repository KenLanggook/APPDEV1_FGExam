import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  formData = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    age: 0,
    birthDate: '',
    gender: '',
    account: '',
    country: '',
    agree: false
  };

  onSubmit() {
    console.log(this.formData);
    alert('Registration submitted!');
  }

}
