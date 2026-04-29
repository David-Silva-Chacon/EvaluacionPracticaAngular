import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../Usuario';

@Component({
  selector: 'app-usuarios-detalle',
  templateUrl: './usuarios-detalle.component.html',
  styleUrls: ['./usuarios-detalle.component.css'],
  standalone: false
})
export class UsuariosDetalleComponent implements OnInit {

  @Input() usuario!: Usuario;

  constructor() { }

  ngOnInit() {
  }

}
