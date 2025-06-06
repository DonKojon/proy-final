import { Role } from './../../models/role';
import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/roles.service';

@Component({
  selector: 'app-roles',
  standalone: false,
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {
  roles: Role[] = [];
  nuevoRol: Role = { id: 0, nombre: '' };

  // Variables para edición
  rolEditandoId: number | null = null;
  rolEditandoNombre: string = '';

  constructor(private roleService: RoleService) {}

  ngOnInit(): void {
    this.obtenerRoles();
  }

  obtenerRoles(): void {
    this.roleService.getRoles().subscribe((data: Role[]) => {
      this.roles = data;
    });
  }

  agregarRol(): void {
    if (this.nuevoRol.nombre.trim()) {
      this.roleService.addRole(this.nuevoRol).subscribe(() => {
        this.obtenerRoles();
        this.nuevoRol = { id: 0, nombre: '' };
      });
    }
  }

  editarRol(rol: Role): void {
    this.rolEditandoId = rol.id;
    this.rolEditandoNombre = rol.nombre;
  }

  eliminarRol(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este rol?')) {
      this.roleService.deleteRole(id).subscribe(() => {
        this.obtenerRoles();
      });
    }
  }

  iniciarEdicion(rol: Role): void {
    this.rolEditandoId = rol.id;
    this.rolEditandoNombre = rol.nombre;
  }

  cancelarEdicion(): void {
    this.rolEditandoId = null;
    this.rolEditandoNombre = '';
  }

  guardarEdicion(rol: Role): void {
    if (!this.rolEditandoNombre.trim()) return;

    this.roleService.updateRole(rol.id, { id: rol.id, nombre: this.rolEditandoNombre }).subscribe(() => {
      this.obtenerRoles();
      this.cancelarEdicion();
    });
  }
}
