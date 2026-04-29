import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosListadoComponent } from './usuarios-listado/usuarios-listado.component';
import { AppRoutingModule } from '../app-routing-module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    UsuariosListadoComponent
  ],
  exports: [
    UsuariosListadoComponent
  ]
})
export class UsuariosModule { }
