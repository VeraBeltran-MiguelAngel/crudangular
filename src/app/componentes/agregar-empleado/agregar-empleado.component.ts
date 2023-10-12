import { Component } from '@angular/core';
//recibir datos del formulario
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css'],
})
/**
 * Recepciona los datos o los maneja del propio html 'agregar-empleado'
 */
export class AgregarEmpleadoComponent {
  //recuperar el formulario (tienes todos los datos que llegan directamente del formulario)
  formularioEmpleados: FormGroup;

  //usar el builder en el constructor (para recibir los datos)
  constructor(public formulario: FormBuilder) {
    //usar los datos del formulario para almacenarlos/procesarlos los recibe en froma de grupo
    this.formularioEmpleados = this.formulario.group({
      //deben coincidir con los nombres de los controles
      nombre: [''],
      correo: [''],
    });
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  //devuelve cualquier tipo de dato que llegue del formulario
  enviarDatos(): any {
    console.log('Hiciste clic en agregar');
    //imprime los datos recibidos del formulario
    console.log(this.formularioEmpleados.value);
  }
}
