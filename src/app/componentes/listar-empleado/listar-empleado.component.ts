import { Component } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css'],
})

/**
 * Esta clase interactua con el html
 * por eso puedes eliminar filas de la tabla al eliminar registros de la BD
 */
export class ListarEmpleadoComponent {
  //datos de empleados json que va al html
  Empleados: any;

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    //listar empleados , el subscribe trae una respuesta y hay que imprimirla
    this.crudService.ObtenerEmpleados().subscribe((respuesta) => {
      console.log(respuesta);
      //colcamosel json de la respuesta en empleados
      this.Empleados = respuesta;
    });
  }
  /**
   * Metodo para borrar registros de la BD
   * @param id  BD
   * @param iControl  borra fila de Tabla html
   */
  borrarRegistro(id: any, iControl: any) {
    console.log(id);
    console.log(iControl);
    if(window.confirm("Desea borrar el registro?")){
      this.crudService.BorrarEmpleado(id).subscribe((respuesta) => {
        //la fila que seleciones elimina el primer elemento
        this.Empleados.splice(iControl, 1);
      });
    }
  }
}
