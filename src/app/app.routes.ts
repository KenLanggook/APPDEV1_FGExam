import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ProfileComponent } from './page/profile/profile.component';
import { RegisterComponent } from './page/register/register.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },

];
