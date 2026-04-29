import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoriosListadoComponent } from './repositorios-listado/repositorios-listado.component';
import { RepositoriosDetalleComponent } from './repositorios-detalle/repositorios-detalle.component';
import { AppRoutingModule } from '../app-routing-module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    RepositoriosListadoComponent,
    RepositoriosDetalleComponent
  ],
  exports: [
    RepositoriosListadoComponent,
    RepositoriosDetalleComponent
  ]
})
export class RepositoriosModule { }
