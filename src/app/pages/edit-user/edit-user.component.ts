import { Component, OnInit} from '@angular/core';
import { UserService } from '../../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent implements OnInit{
  registrationForm: FormGroup;
  userId: string | null = null;
  
  constructor(private fb: FormBuilder,private route: ActivatedRoute, private userService: UserService, private router: Router,) { 
   this.registrationForm = this.fb.group({
    Nome: ['', Validators.required],
    Email: ['', [Validators.required, Validators.email]],
    Senha: ['', Validators.required],
    Tipo: ['', Validators.required],
  });
}
ngOnInit(): void {
  // Verifica se estamos editando um usuário existente
  this.userId = this.route.snapshot.paramMap.get('id');
  if (this.userId) {
    this.isEditMode = true;
    this.loadUserData(this.userId);
  }
}
loadUserData(id: string) {
  this.userService.getUserById(id).subscribe(
    (user) => {
      // Preenche o formulário com os dados do usuário
      this.registrationForm.patchValue({
        Nome: user.data.Nome,
        Email: user.data.Email,
        Senha: user.data.Senha,
        Tipo: user.data.Tipo,
      });
    },
    (error) => {
      console.error('Erro ao carregar dados do usuário', error);
    }
  );

}
isEditMode: boolean = false;

cancelEdit() {
  this.registrationForm.reset();

  this.isEditMode = false;

  // Limpa o userId (opcional, se você quiser redefinir o ID após cancelar)
  this.userId = null;
  // Lógica para cancelar a edição, por exemplo, limpar o formulário e navegar para outra página
  this.router.navigate([' ']);
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
      if(this.userId){
        this.userService.updateUser(this.userId, userData).subscribe(
          (response) => {
            console.log('Usuário atualizado com sucesso', response);
            this.router.navigate(['']);
          },
          (error) => {
            console.error('Erro ao atualizar usuário', error);
          }
        );
      }
    }
  }

}
 