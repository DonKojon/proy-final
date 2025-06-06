import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  pass: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  iniciarSesion() {
    // 🔐 Login sin backend (usuario local)
    if (this.email === 'prueba' && this.pass === '12345') {
      const usuarioSimulado = {
        nombre: 'prueba',
        email: 'prueba@example.com',
        role: {
          nombre: 'Administrador' // Puedes poner 'Profesor' o 'Director' según lo que quieras probar
        }
      };
      localStorage.setItem('usuario', JSON.stringify(usuarioSimulado));
      this.router.navigate(['/dashboard']);
      return;
    }




    this.authService.login({ email: this.email, pass: this.pass }).subscribe({
      next: (response) => {
        console.log('Usuario recibido:', response.usuario);
        this.authService.guardarUsuario(response.usuario);
        localStorage.setItem('usuario', JSON.stringify(response.usuario));
        this.router.navigate(['/dashboard']); // Cambia '/dashboard' por la ruta que desees
      },
      error: () => {
        alert('Correo o contraseña incorrectos');
      }
    });
  }

  cancelar() {
    this.email = '';
    this.pass = '';
  }
}
