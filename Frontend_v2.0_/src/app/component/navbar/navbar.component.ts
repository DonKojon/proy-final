import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed = false;
  @Output() isCollapsedChange = new EventEmitter<boolean>();

  usuario: any = null;

  rol: string = '';
  esEstudiante = false;
  esProfesor = false;
  esDirector = false;
  esAdmin = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.usuario = JSON.parse(localStorage.getItem('usuario') || '{}');
    this.rol = this.usuario?.role?.nombre || '';
    console.log('Rol del usuario:', this.rol);

    this.esAdmin = this.rol === 'Administrador';

    // Mostrar todas las opciones si es administrador
    if (this.esAdmin) {
      this.esEstudiante = true;
      this.esProfesor = true;
      this.esDirector = true;
    } else {
      this.esEstudiante = this.rol === 'Estudiante';
      this.esProfesor = this.rol === 'Profesor';
      this.esDirector = this.rol === 'Director';
    }
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedChange.emit(this.isCollapsed);
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    this.router.navigate(['/']);
  }
}
