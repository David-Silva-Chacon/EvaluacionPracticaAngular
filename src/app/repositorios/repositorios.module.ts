import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RepositoriosListadoComponent } from './repositorios-listado/repositorios-listado.component';
import { AppRoutingModule } from '../app-routing-module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    RepositoriosListadoComponent
  ],
  exports: [
    RepositoriosListadoComponent
  ]
})
export class RepositoriosModule { }
