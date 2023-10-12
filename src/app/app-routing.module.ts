import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEmpleadoComponent } from './componentes/agregar-empleado/agregar-empleado.component';
import { EditarEmpleadoComponent } from './componentes/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './componentes/listar-empleado/listar-empleado.component';

const routes: Routes = [
  //cuando el usuario escriba una direccion vacia lo envia a agregar-empleado
  { path: '', pathMatch: 'full', redirectTo: 'agregar-empleado' },
  //si escribe agregar-empleado lo dirige al componente
  { path: 'agregar-empleado', component: AgregarEmpleadoComponent },
  { path: 'listar-empleado', component: ListarEmpleadoComponent },
  //enviamos un parametro id a la ruta
  { path: 'editar-empleado/:id', component: EditarEmpleadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
