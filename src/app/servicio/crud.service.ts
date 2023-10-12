import { Injectable } from '@angular/core';
//para conectarse al api
import { HttpClient } from '@angular/common/http';
//monitorear que esta sucediendo con la informacion externa
import { Observable } from 'rxjs';
//modelo empleados
import { Empleado } from './Empleado';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  //variable que guarda el endpoint url
  API: string = 'http://localhost/empleados/'; //api de PHP crudo
  constructor(private clienteHttp: HttpClient) {}

  /**
   * Metodo para insertar empleado
   * @param datosEmpleado datos del modelo
   * @returns un observable de tipo any
   */
  AgregarEmpleado(datosEmpleado: Empleado): Observable<any> {
    //para insertar datos en el api (http://localhost/empleados/insertar)
    return this.clienteHttp.post(this.API + '?insertar=1', datosEmpleado);
  }

  /**
   * Metodo para listar empleados
   * @returns te dirige al url del api http://localhost/empleados/ y por defecto lanza un select*from empleados
   */
  ObtenerEmpleados(){
    return this.clienteHttp.get(this.API);
  }

  /**
   * Eliminar empleado
   * @param id parametro que se le pasa al API al metoto borrar
   * @returns 
   */
  BorrarEmpleado(id:any): Observable<any> {
    //para borrar datos en el api (http://localhost/empleados/borrar)
    return this.clienteHttp.get(this.API + '?borrar='+id);
  }
}
