import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  standalone: false,
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {
  asistenciaPorMateria: any[] = [];
  fechasAsistencia: string[] = [];
  porcentajeAsistenciaTotal: number = 0;

  constructor() { }

  ngOnInit(): void {
    // Datos de ejemplo con la nueva estructura
    this.asistenciaPorMateria = [
      {
        materia: 'Matemáticas',
        registros: {
          '2024-06-03': 'Presente',
          '2024-06-04': 'Ausente',
          '2024-06-05': 'Presente',
          '2024-06-06': 'Permiso',
          '2024-06-07': 'Presente',
        }
      },
      {
        materia: 'Historia',
        registros: {
          '2024-06-03': 'Presente',
          '2024-06-04': 'Presente',
          '2024-06-05': 'Ausente',
          '2024-06-06': 'Presente',
          '2024-06-07': 'Permiso',
        }
      },
      {
        materia: 'Ciencias',
        registros: {
          '2024-06-03': 'Presente',
          '2024-06-04': 'Presente',
          '2024-06-05': 'Presente',
          '2024-06-06': 'Ausente',
          '2024-06-07': 'Presente',
        }
      }
    ];

    this.generarFechasAsistencia();
    this.calcularPorcentajeAsistenciaTotal();
  }

  generarFechasAsistencia(): void {
    const fechasSet = new Set<string>();
    this.asistenciaPorMateria.forEach(materia => {
      Object.keys(materia.registros).forEach(fecha => fechasSet.add(fecha));
    });
    this.fechasAsistencia = Array.from(fechasSet).sort(); // Ordenar las fechas
  }

  calcularPorcentajeAsistenciaTotal(): void {
    let totalRegistros = 0;
    let totalPresenteYPermiso = 0;

    this.asistenciaPorMateria.forEach(materia => {
      Object.values(materia.registros).forEach(estado => {
        totalRegistros++;
        if (estado === 'Presente' || estado === 'Permiso') {
          totalPresenteYPermiso++;
        }
      });
    });

    if (totalRegistros > 0) {
      this.porcentajeAsistenciaTotal = (totalPresenteYPermiso / totalRegistros) * 100;
    } else {
      this.porcentajeAsistenciaTotal = 0;
    }
  }
}
