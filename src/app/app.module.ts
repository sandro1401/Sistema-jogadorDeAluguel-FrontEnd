import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import   
 { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { provideHttpClient } from '@angular/common/http';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ListaUsuarioComponent } from './pages/lista-usuario/lista-usuario.component'; 
@NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    UserRegistrationComponent,
    LoginComponent,
    EditUserComponent,
    ListaUsuarioComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    FormsModule

   
   
  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
