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
  
  readonly initialVisibleUsers = 8;
  readonly loadMoreStep = 8;

  usuarios$!: Observable<Usuario[]>;
  visibleUsers = this.initialVisibleUsers;

  selectedUsuario!: Usuario;
  selected: Boolean = false;

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

  onSelected(usuario: Usuario): void {
    this.selected = true;
    this.selectedUsuario = usuario;
  }

  closeDetail(): void {
    this.selected = false;
    this.selectedUsuario = null!;
  }

}
