import { Attribute, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
interface StrapiResponse {
  data: Usuario[];
  meta: any; // Ou uma interface mais específica para a meta
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl_Usuario = 'http://localhost:1337/api/usuarios';
  private listaUsuarios: Usuario[] =[]
 
  constructor(private http: HttpClient) { }
  registerUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl_Usuario, userData);
  }
  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl_Usuario}/${id}`); // Ajuste para o seu endpoint
  }
  listarUsuarios(): Observable<Usuario[]>{
    return this.http.get<StrapiResponse>(this.apiUrl_Usuario).pipe(map((response:StrapiResponse) => response.data));
  }

  updateUser(id: string, userData: any): Observable<any> {
    return this.http.put<Usuario>(`${this.apiUrl_Usuario}/${id}`, userData); // Ajuste para o seu endpoint
  }
  editar(id: number, userData: any): Observable<any>{
    const indice = this.getIndice(id);
    if(indice >= 0){
      this.listaUsuarios[indice] = userData;
    }
    return this.http.get(`${this.apiUrl_Usuario}/${id}`, userData)
  }
  private getIndice(id?:number){
    return this.listaUsuarios.findIndex(
      usuario => usuario.id == id
    );
  }
  deletar(id?: number){
    const indice = this.getIndice(id);
  if(indice >=0){
    this.listaUsuarios.splice(indice, 1);
  }

  }
}
