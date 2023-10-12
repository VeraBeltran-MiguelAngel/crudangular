import { Component } from '@angular/core';
//para obtener el id de la ruta
import { Router, ActivatedRoute } from '@angular/router';
//recibir datos del formulario
import { FormGroup, FormBuilder } from '@angular/forms';
//llamar al servicio creado
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css'],
})
export class EditarEmpleadoComponent {
  //recibimos el id del usuario a editar
  elID: any;

  constructor(
    private activeRoute: ActivatedRoute,
    private crudService: CrudService
  ) {
    //recuperar el id , de la liga capturas el parametro id
    this.elID = this.activeRoute.snapshot.paramMap.get('id');
    console.log(this.elID);
    this.crudService.ObtenerEmpleado(this.elID).subscribe(respuesta =>{
      //mostramos los datos que vienen de la solicitud
      console.log(respuesta);
    });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
