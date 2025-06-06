import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Role } from '../../models/role'; // Asegúrate de tener esta interfaz

@Component({
  selector: 'app-usuario',
  standalone: false,
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  roles: Role[] = []; // 👈 Lista de roles cargados
  usuario: Usuario = {
    id: 0,
    nombre: '',
    apellido: '',
    email: '',
    pass: '',
    role_id: 0 // 👈 Asegúrate de tener este campo
  };

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.obtenerRoles(); // 👈 Carga de roles
  }

  obtenerUsuarios(): void {
    this.usuarioService.getUsuarios().subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
  }

  obtenerRoles(): void {
    this.usuarioService.getRoles().subscribe((data: Role[]) => {
      this.roles = data;
    });
  }

  guardarUsuario() {
    if (this.usuario.id) {
      this.usuarioService.updateUsuario(this.usuario).subscribe(() => {
        this.obtenerUsuarios();
        this.limpiarFormulario();
      });
    } else {
      console.log('Usuario a enviar:', this.usuario);
      this.usuarioService.addUsuario(this.usuario).subscribe(() => {
        this.obtenerUsuarios();
        this.limpiarFormulario();
      });
    }
  }


  editarUsuario(usuario: Usuario): void {
    this.usuario = { ...usuario };
  }

  eliminarUsuario(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este usuario?')) {
      this.usuarioService.deleteUsuario(id).subscribe(() => {
        this.obtenerUsuarios();
      });
    }
  }

  limpiarFormulario(): void {
    this.usuario = {
      id: 0,
      nombre: '',
      apellido: '',
      email: '',
      pass: '',
      role_id: 0 // 👈 Reestablecer también este campo
    };
  }
  // En tu componente .ts puedes tener:
getNombreRol(id: number): string {
  const rol = this.roles.find(r => r.id === id);
  return rol ? rol.nombre : 'Sin rol';
}

}
