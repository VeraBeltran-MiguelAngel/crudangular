import { Component } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent {

  //datos de empleados json que va al html
  Empleados:any;

  constructor(private crudService:CrudService){}

  ngOnInit(): void {
    //listar empleados , el subscribe trae una respuesta y hay que imprimirla
    this.crudService.ObtenerEmpleados().subscribe(respuesta => {
      console.log(respuesta);
      //colcamosel json de la respuesta en empleados
      this.Empleados = respuesta;
    });
    
  }
}
