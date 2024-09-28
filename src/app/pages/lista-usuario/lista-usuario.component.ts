import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { UserService } from '../../service/user.service';
import { StrapiResponse } from '../../StrapiResponse';

interface UsuarioInterface {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    Nome: string;
    Email: string;
    Tipo: string;
  };
}




@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.css'
})
export class ListaUsuarioComponent {
  usuarios: Usuario[] = [];
  usuario: UsuarioInterface[] = [];
  nomepesquisa = '';
  constructor(private usuarioService: UserService){
   
  }
 
  ngOnInit() {
    this.usuarioService.listarUsuarios()
      .subscribe(usuarios => {
        console.log('Dados recebidos:', usuarios); 
        this.usuarios = usuarios;
      });
  }
 }
   
   



