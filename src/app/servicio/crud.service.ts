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
  API: string = 'http://localhost/empleados/';
  constructor(private clienteHttp: HttpClient) {}

  AgregarEmpleado(datosEmpleado: Empleado): Observable<any> {
    //para insertar datos en el api
    return this.clienteHttp.post(this.API + '?insertar=1', datosEmpleado);
  }
}
