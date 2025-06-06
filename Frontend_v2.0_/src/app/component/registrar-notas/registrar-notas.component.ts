import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar-notas',
  standalone: false,
  templateUrl: './registrar-notas.component.html',
  styleUrl: './registrar-notas.component.css'
})
export class RegistrarNotasComponent {
  listaNotas: any[] = [];
}
