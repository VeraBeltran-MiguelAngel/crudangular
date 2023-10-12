import { Component } from '@angular/core';
//recibir datos del formulario
import { FormGroup, FormBuilder } from '@angular/forms';
//llamar al servicio creado
import { CrudService } from 'src/app/servicio/crud.service';
//para redireccionar al listado de clientes despues de insertar
import { Router } from '@angular/router';

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
  constructor(
    public formulario: FormBuilder, 
    private crudService: CrudService,
    private ruteador:Router
  ) {
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
    //pasar los datos del formulario al metodo (sin subscribe no se ejecuta)
    this.crudService.AgregarEmpleado(this.formularioEmpleados.value).subscribe();
    //dirigir a la lista de empleados despues de insertar
    this.ruteador.navigateByUrl('/listar-empleado');
  }
}
