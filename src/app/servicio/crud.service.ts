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
  API: string = 'http://localhost/holamundo/api/empleados'; //api de PHP crudo
  constructor(private clienteHttp: HttpClient) {}

  /**
   * Metodo para insertar empleado
   * @param datosEmpleado datos del modelo
   * @returns un observable de tipo any
   */
  AgregarEmpleado(datosEmpleado: Empleado): Observable<any> {
    //para insertar datos en el api (http://localhost/empleados/insertar)
    return this.clienteHttp.post(this.API, datosEmpleado);
  }

  /**
   * Metodo para listar empleados
   * @returns te dirige al url del api http://localhost/empleados/ y por defecto lanza un select*from empleados
   */
  ObtenerEmpleados() {
    return this.clienteHttp.get(this.API);
  }

  /**
   * Eliminar empleado
   * @param id parametro que se le pasa al API al metoto borrar
   * @returns
   */
  BorrarEmpleado(id: any): Observable<any> {
    //para borrar datos en el api (http://localhost/holamundo/api/empleados/id)
    return this.clienteHttp.delete(this.API + '/' + id);
  }

  /**
   * Metodo para mostrar los datos de un empleado por id
   * se puede usar para actualizar valores cuando das clic en editar te 
   * lleva a un fromulario donde obtinene los valores del registro
   * @param id
   * @returns
   */
  ObtenerEmpleado(id: any): Observable<any> {
    //para borrar datos en el api (http://localhost/holamundo/api/empleados/id)
    return this.clienteHttp.get(this.API + '/' + id);
  }

  /**
   * Editar un empleado por id
   * @param id
   * @param datosEmpleado datos nuevos del registro
   * @returns
   */
  EditarEmpleado(id: any, datosEmpleado: any): Observable<any> {
    //para actualizar datos
    return this.clienteHttp.patch(this.API + '/' + id, datosEmpleado);
  }
}
