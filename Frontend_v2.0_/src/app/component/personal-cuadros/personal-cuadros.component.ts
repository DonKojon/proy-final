import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonalCuadrosService } from '../../services/personal-cuadros.service';

@Component({
  selector: 'app-personal-cuadros',
  standalone: false,
  templateUrl: './personal-cuadros.component.html',
  styleUrls: ['./personal-cuadros.component.css'],
})

  export class PersonalCuadrosComponent {
    personalForm: FormGroup;
    personalList: any[] = [];
    editIndex: number | null = null; // Guarda el índice del registro en edición

    constructor(private fb: FormBuilder) {
      this.personalForm = this.fb.group({
        grado: ['', Validators.required],
        arma: ['', Validators.required],
        especialidad: ['', Validators.required],
        apellido_paterno: ['', Validators.required],
        apellido_materno: ['', Validators.required],
        nombres: ['', Validators.required],
        ci: [''],
        celular: [''],
        direccion: [''],
        correo_electronico: [''],
        fecha_nacimiento: [''],
        lugar_nacimiento: [''],
        estado_civil: [''],
        numero_hijos: ['']
      });
    }

    onSubmit() {
      if (this.personalForm.valid) {
        if (this.editIndex === null) {
          // Nuevo registro
          this.personalList.push(this.personalForm.value);
        } else {
          // Editar registro existente
          this.personalList[this.editIndex] = this.personalForm.value;
          this.editIndex = null;
        }

        // Ordenar por apellido paterno
        this.personalList.sort((a, b) => a.apellido_paterno.localeCompare(b.apellido_paterno));

        // Limpiar formulario
        this.personalForm.reset();
      }
    }

    editarPersona(index: number) {
      this.editIndex = index;
      const persona = this.personalList[index];

      // Llenamos el formulario con los datos seleccionados
      this.personalForm.patchValue(persona);
    }

    eliminarPersona(index: number) {
      if (confirm('¿Estás seguro de que quieres eliminar este registro?')) {
        this.personalList.splice(index, 1);
      }
    }
  }
