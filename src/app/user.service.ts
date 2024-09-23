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
}
