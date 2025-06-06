import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RolesComponent } from './component/roles/roles.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { MisNotasComponent } from './component/mis-notas/mis-notas.component';
import { MisTareasComponent } from './component/mis-tareas/mis-tareas.component';
import { AsistenciaComponent } from './component/asistencia/asistencia.component';
import { HistorialComponent } from './component/historial/historial.component';
import { RegistrarNotasComponent } from './component/registrar-notas/registrar-notas.component';
import { RegistrarAsistenciaComponent } from './component/registrar-asistencia/registrar-asistencia.component';
import { AsignarTareasComponent } from './component/asignar-tareas/asignar-tareas.component';
import { ReportesComponent } from './component/reportes/reportes.component';
import { ReportesGeneralesComponent } from './component/reportes-generales/reportes-generales.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'roles', component: RolesComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Administrador']} },
  { path: 'usuarios', component: UsuariosComponent,canActivate: [AuthGuard, RoleGuard],data: { roles: ['Administrador', 'Director'] } },
  { path: 'mis-notas', component: MisNotasComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Estudiante','Administrador'] } },
  { path: 'mis-tareas', component: MisTareasComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Estudiante','Administrador'] } },
  { path: 'asistencia', component: AsistenciaComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Estudiante','Administrador'] } },
  { path: 'historial', component: HistorialComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Estudiante','Administrador'] } },
  { path: 'registrar-notas', component: RegistrarNotasComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Profesor','Administrador'] } },
  { path: 'registrar-asistencia', component: RegistrarAsistenciaComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Profesor','Administrador'] } },
  { path: 'asignar-tareas', component: AsignarTareasComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Profesor','Administrador'] } },
  { path: 'reportes', component: ReportesComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Profesor','Administrador'] } },
  { path: 'reportes-generales', component: ReportesGeneralesComponent, canActivate: [AuthGuard, RoleGuard], data: { roles: ['Director','Administrador'] } },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }








