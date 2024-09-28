import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario } from '../../models/usuario';



@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css'
})
export class UserRegistrationComponent {
  registrationForm: FormGroup;
  usuario = new Usuario();
  userId: string | null = null;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router,  private route: ActivatedRoute) {
    this.registrationForm = this.fb.group({
      Nome: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Senha: ['', Validators.required],
      Tipo: ['', Validators.required],
      userId: ['', Validators.required],
    });
  }
 
  isEditMode: boolean = false;

 

  buscarUsuario() {
    const id = this.registrationForm.get('userId')?.value;
    if (id) {
      this.router.navigate([`/edit-user/${id}`]);
    } else {
      console.error('ID do usuário não pode ser nulo');
    }
  }
  onSubmit() {
    if (this.registrationForm.valid) {
      //console.log('Form Submitted', this.registrationForm.value);
      // Aqui você pode enviar os dados para o backend (Strapi)
      const userData = {
        data: {
          Nome: this.registrationForm.value.Nome,
          Email: this.registrationForm.value.Email,
          Senha: this.registrationForm.value.Senha,
          Tipo: this.registrationForm.value.Tipo,
        }
      };
      
        this.userService.registerUser(userData).subscribe(
          (response) => {
            console.log('Usuário cadastrado com sucesso', response);
            this.router.navigate(['pages/home']);
            // Aqui você pode adicionar lógica para redirecionar o usuário ou exibir uma mensagem de sucesso
          },
          (error) => {
            console.error('Erro ao cadastrar usuário', error);
            // Exibir mensagem de erro para o usuário
          }
        );

      
     
      
    }
  }

}
