import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl_Usuario = 'http://localhost:1337/api/usuarios';

  constructor(private http: HttpClient) { }
  registerUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl_Usuario, userData);
  }
  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl_Usuario}/${id}`); // Ajuste para o seu endpoint
  }

  updateUser(id: string, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl_Usuario}/${id}`, userData); // Ajuste para o seu endpoint
  }
}
