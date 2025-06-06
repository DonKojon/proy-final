import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandPageComponent } from './component/land-page/land-page.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

import { RolesComponent } from './component/roles/roles.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { PersonalCuadrosComponent } from './component/personal-cuadros/personal-cuadros.component';
import { PersonalTropaComponent } from './component/personal-tropa/personal-tropa.component';
import { MisNotasComponent } from './component/mis-notas/mis-notas.component';
import { MisTareasComponent } from './component/mis-tareas/mis-tareas.component';
import { AsistenciaComponent } from './component/asistencia/asistencia.component';
import { HistorialComponent } from './component/historial/historial.component';
import { RegistrarNotasComponent } from './component/registrar-notas/registrar-notas.component';
import { RegistrarAsistenciaComponent } from './component/registrar-asistencia/registrar-asistencia.component';
import { AsignarTareasComponent } from './component/asignar-tareas/asignar-tareas.component';
import { ReportesComponent } from './component/reportes/reportes.component';
import { ReportesGeneralesComponent } from './component/reportes-generales/reportes-generales.component';



@NgModule({
  declarations: [
    AppComponent,
    LandPageComponent,
    LoginComponent,
    DashboardComponent,
    RolesComponent,
    UsuariosComponent,
    NavbarComponent,
    PersonalCuadrosComponent,
    PersonalTropaComponent,
    MisNotasComponent,
    MisTareasComponent,
    AsistenciaComponent,
    HistorialComponent,
    RegistrarNotasComponent,
    RegistrarAsistenciaComponent,
    AsignarTareasComponent,
    ReportesComponent,
    ReportesGeneralesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
