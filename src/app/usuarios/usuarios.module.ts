import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosListadoComponent } from './usuarios-listado/usuarios-listado.component';
import { UsuariosDetalleComponent } from './usuarios-detalle/usuarios-detalle.component';
import { AppRoutingModule } from '../app-routing-module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    UsuariosListadoComponent,
    UsuariosDetalleComponent
  ],
  exports: [
    UsuariosListadoComponent,
    UsuariosDetalleComponent
  ]
})
export class UsuariosModule { }
