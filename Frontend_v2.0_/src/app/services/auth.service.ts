import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { environment } from '../../environment';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl; // 👈 usa el apiUrl desde environment

  constructor(private http: HttpClient) {}

  login(credentials: { email: string; pass: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  logout() {
    localStorage.removeItem('user');
  }

  guardarUsuario(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  obtenerUsuario() {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }

  estaAutenticado(): boolean {
    return !!localStorage.getItem('user');
  }
}
