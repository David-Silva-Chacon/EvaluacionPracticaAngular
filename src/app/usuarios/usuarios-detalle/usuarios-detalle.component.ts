import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from '../Usuario';
import { Repositorio } from '../../repositorios/Repositorio';
import { RepositorioService } from '../../repositorios/repositorio.service';

@Component({
  selector: 'app-usuarios-detalle',
  templateUrl: './usuarios-detalle.component.html',
  styleUrls: ['./usuarios-detalle.component.css'],
  standalone: false
})
export class UsuariosDetalleComponent implements OnInit {

  private _usuario?: Usuario;
  usuarioRepositorios: Repositorio[] = [];
  private repositorios: Repositorio[] = [];

  @Input()
  set usuario(value: Usuario | undefined) {
    this._usuario = value;
    this.filtrarRepositorios();
  }

  get usuario(): Usuario | undefined {
    return this._usuario;
  }

  constructor(private repositorioService: RepositorioService) { }

  ngOnInit() {
    this.repositorioService.getRepositorios().subscribe(repositorios => {
      this.repositorios = repositorios;
      this.filtrarRepositorios();
    });
  }

  private filtrarRepositorios(): void {
    if (!this._usuario) {
      this.usuarioRepositorios = [];
      return;
    }

    this.usuarioRepositorios = this.repositorios.filter(repositorio =>
      this._usuario?.repoIds.includes(repositorio.id)
    );
  }

}
