import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../models/usuario'; // Asegúrate de tener esta interfaz

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  personalCuadros: any[] = [];
  personalTropa: any[] = [];
  imageUrlLeft: string | null = 'assets/OD.jpg'; // Imagen predeterminada
  imageUrlRight: string | null = 'assets/RAD.png'; // Imagen predeterminada

  nombreCuadro: string = '';
  rangoCuadro: string = '';
  unidadCuadro: string = '';

  nombreTropa: string = '';
  gradoTropa: string = '';
  unidadTropa: string = '';

  registrarCuadro() {
    if (this.nombreCuadro && this.rangoCuadro && this.unidadCuadro) {
      this.personalCuadros.push({
        nombre: this.nombreCuadro,
        rango: this.rangoCuadro,
        unidad: this.unidadCuadro
      });

      this.nombreCuadro = '';
      this.rangoCuadro = '';
      this.unidadCuadro = '';
    } else {
      alert('Todos los campos son obligatorios para registrar un cuadro.');
    }
  }

  registrarTropa() {
    if (this.nombreTropa && this.gradoTropa && this.unidadTropa) {
      this.personalTropa.push({
        nombre: this.nombreTropa,
        grado: this.gradoTropa,
        unidad: this.unidadTropa
      });

      this.nombreTropa = '';
      this.gradoTropa = '';
      this.unidadTropa = '';
    } else {
      alert('Todos los campos son obligatorios para registrar una tropa.');
    }
  }




  onUploadImage(side: 'left' | 'right') {
    const fileInput = document.getElementById(`fileInput${side.charAt(0).toUpperCase() + side.slice(1)}`) as HTMLInputElement;
    if (fileInput) {
      fileInput.click(); // Abrir el selector de archivos
    }
  }

  // Función para manejar el cambio de archivo (cuando el usuario selecciona una imagen)
  onFileChange(event: any, side: 'left' | 'right') {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        if (side === 'left') {
          this.imageUrlLeft = e.target.result; // Asignar la nueva imagen a la columna izquierda
        } else {
          this.imageUrlRight = e.target.result; // Asignar la nueva imagen a la columna derecha
        }
      };
      reader.readAsDataURL(file); // Leer la imagen seleccionada
    }
  }

  // Función para eliminar la imagen
  onDeleteImage(side: 'left' | 'right') {
    if (side === 'left') {
      this.imageUrlLeft = null; // Eliminar imagen en la columna izquierda
    } else {
      this.imageUrlRight = null; // Eliminar imagen en la columna derecha
    }
  }
}




