import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosListadoComponent } from './usuarios/usuarios-listado/usuarios-listado.component';
import { RepositoriosListadoComponent } from './repositorios/repositorios-listado/repositorios-listado.component';
import { RepositoriosDetalleComponent } from './repositorios/repositorios-detalle/repositorios-detalle.component';

const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: UsuariosListadoComponent },
  {
    path: 'repositorios',
    component: RepositoriosListadoComponent,
    children: [
      { path: ':id', component: RepositoriosDetalleComponent },
    ],
  },
  { path: '**', redirectTo: 'usuarios' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
