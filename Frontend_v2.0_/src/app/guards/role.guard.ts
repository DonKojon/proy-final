import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRoles = route.data['roles'] as string[];
    const usuario = JSON.parse(localStorage.getItem('usuario') || 'null');

    if (usuario && usuario.role && expectedRoles.includes(usuario.role.nombre)) {
      return true;
    } else {
      this.router.navigate(['/dashboard']); // o cualquier otra ruta
      return false;
    }
  }
}
