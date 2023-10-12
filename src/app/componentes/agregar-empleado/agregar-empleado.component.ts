import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
/**
 * Recepciona los datos o los maneja del propio html 'agregar-empleado'
 */
export class AgregarEmpleadoComponent {

  //devuelve cualquier tipo de dato que llegue del formulario
  enviarDatos():any{
    console.log("Hiciste clic en agregar");
  }
}
