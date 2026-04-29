import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../Usuario';

@Component({
  selector: 'app-usuarios-listado',
  templateUrl: './usuarios-listado.component.html',
  styleUrls: ['./usuarios-listado.component.css'],
  standalone: false
})
export class UsuariosListadoComponent {
  
  readonly initialVisibleUsers = 10;
  readonly loadMoreStep = 10;

  usuarios$!: Observable<Usuario[]>;
  visibleUsers = this.initialVisibleUsers;

  constructor(private usuarioService : UsuarioService) {
  }

  ngOnInit() {
    this.usuarios$ = this.usuarioService.getUsuarios();
  }

  trackById(index: number, usuario: Usuario) {
    return usuario.id;
  }

  loadMore() {
    this.visibleUsers += this.loadMoreStep;
  }

}
