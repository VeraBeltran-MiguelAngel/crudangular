import { Component,OnInit } from '@angular/core';
//para obtener el id de la ruta
import { Router, ActivatedRoute } from '@angular/router';
//recibir datos del formulario
import { FormGroup, FormBuilder } from '@angular/forms';
//llamar al servicio creado
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html'
})
export class EditarEmpleadoComponent implements OnInit{
  //recuperar el formulario (tienes todos los datos que llegan directamente del formulario)
  formularioEmpleados: FormGroup;
  //recibimos el id del usuario a editar
  elID: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private crudService: CrudService,
    public formulario: FormBuilder,
    private ruteador: Router
  ) {
    //recuperar el id , de la liga capturas el parametro id
    this.elID = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.crudService.ObtenerEmpleado(this.elID).subscribe((respuesta) => {
      //mostramos los datos que vienen de la solicitud
      console.log(respuesta);
      //asignar los valores que vienen de la respuesta en el formulario editar
      this.formularioEmpleados.setValue({
        //estos dos datos se asignan al formulario para que tengan esos valores
        //valor 0 que viene de la API
        nombre: respuesta[0]['nombre'],
        //valor 0 que viene de la API
        correo: respuesta[0]['correo'],
      });
    });
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

  /**
   * metodo que envia los datos ya modificados
   */
  enviarDatos(): any {
    console.log(this.elID);
    console.log(this.formularioEmpleados.value);
    //enviamos el id del empleado y sus nuevos datos desde el formulario
    this.crudService
      .EditarEmpleado(this.elID, this.formularioEmpleados.value)
      .subscribe(() => {
        this.ruteador.navigateByUrl('/listar-empleado'); //una vez actualizados los datos nos lleva a la lista
      });
  }
}
