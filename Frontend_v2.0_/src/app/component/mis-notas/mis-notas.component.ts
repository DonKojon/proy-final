import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mis-notas',
  standalone: false,
  templateUrl: './mis-notas.component.html',
  styleUrls: ['./mis-notas.component.css']
})
export class MisNotasComponent implements OnInit {
  notas: any[] = [];
  promedioNotas: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.notas = [
      {
        semestre: '1er semestre',
        materia: 'Matemáticas',
        primerParcial: { T: 8.5, P: 9.0, L: 8.8 },
        segundoParcial: { T: null, P: null, L: null },
        parcialFinal: { T: null, P: null, L: null },
        notaFinal: 8.0
      },
      {
        semestre: '1er semestre',
        materia: 'Literatura',
        primerParcial: { T: 9.2, P: 8.9, L: 9.5 },
        segundoParcial: { T: null, P: null, L: null },
        parcialFinal: { T: null, P: null, L: null },
        notaFinal: 7.5
      },
      {
        semestre: '1er semestre',
        materia: 'Ciencias',
        primerParcial: { T: 7.8, P: 8.0, L: 7.5 },
        segundoParcial: { T: null, P: null, L: null },
        parcialFinal: { T: null, P: null, L: null },
        notaFinal: 8.0
      },
      {
        semestre: '1er semestre',
        materia: 'Historia',
        primerParcial: { T: 8.9, P: 8.7, L: 9.1 },
        segundoParcial: { T: null, P: null, L: null },
        parcialFinal: { T: null, P: null, L: null },
        notaFinal: 7.1
      },
      {
        semestre: '1er semestre',
        materia: 'Inglés',
        primerParcial: { T: 9.5, P: 9.3, L: 9.0 },
        segundoParcial: { T: null, P: null, L: null },
        parcialFinal: { T: null, P: null, L: null },
        notaFinal: 7.0
      },
      {
        semestre: '1er semestre',
        materia: 'Educación Física',
        primerParcial: { T: 8.0, P: 8.5, L: 8.2 },
        segundoParcial: { T: null, P: null, L: null },
        parcialFinal: { T: null, P: null, L: null },
        notaFinal: 7.5
      }
    ];
    this.calcularPromedioNotas();
  }

  calcularPromedioNotas(): void {
    if (this.notas.length > 0) {
      const notasFinalesValidas = this.notas.filter(nota => nota.notaFinal !== null && !isNaN(nota.notaFinal));
      if (notasFinalesValidas.length > 0) {
        const totalNotas = notasFinalesValidas.reduce((sum, nota) => sum + nota.notaFinal, 0);
        this.promedioNotas = totalNotas / notasFinalesValidas.length;
      } else {
        this.promedioNotas = 0;
      }
    } else {
      this.promedioNotas = 0;
    }
  }
}
