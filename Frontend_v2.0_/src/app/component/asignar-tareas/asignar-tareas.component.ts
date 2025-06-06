import { Component } from '@angular/core';

@Component({
  selector: 'app-asignar-tareas',
  standalone: false,
  templateUrl: './asignar-tareas.component.html',
  styleUrl: './asignar-tareas.component.css'
})
export class AsignarTareasComponent {
  listaTareasAsignadas: any[] = [];
}
