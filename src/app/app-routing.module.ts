import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: UserRegistrationComponent },
  { path: 'user-registration/:id', component: UserRegistrationComponent },

  { path: 'edit-user/:id', component: EditUserComponent },
  {
    path:"login", component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
