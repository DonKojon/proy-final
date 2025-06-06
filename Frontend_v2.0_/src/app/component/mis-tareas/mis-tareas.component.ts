import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-tareas',
  standalone: false,
  templateUrl: './mis-tareas.component.html',
  styleUrls: ['./mis-tareas.component.css']
})
export class MisTareasComponent implements OnInit {
  tareas: any[] = [];
  tareasPendientes: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Datos de ejemplo para probar el diseño
    this.tareas = [
      { materia: 'Historia', descripcion: 'Resumen del periodo colonial', fechaEntrega: '2024-06-10', estado: 'Pendiente' },
      { materia: 'Matemáticas', descripcion: 'Resolver ejercicios pag. 50', fechaEntrega: '2024-06-08', estado: 'Entregada' },
      { materia: 'Ciencias', descripcion: 'Informe de laboratorio', fechaEntrega: '2024-06-15', estado: 'Pendiente' },
      { materia: 'Literatura', descripcion: 'Análisis de obra literaria', fechaEntrega: '2024-06-12', estado: 'Entregada' }
    ];
    this.calcularTareasPendientes();
  }

  calcularTareasPendientes(): void {
    this.tareasPendientes = this.tareas.filter(tarea => tarea.estado === 'Pendiente').length;
  }
}
