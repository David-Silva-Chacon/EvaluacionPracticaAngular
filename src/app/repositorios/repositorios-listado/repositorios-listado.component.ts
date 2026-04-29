import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RepositorioService } from '../repositorio.service';
import { Repositorio } from '../Repositorio';

@Component({
  selector: 'app-repositorios-listado',
  templateUrl: './repositorios-listado.component.html',
  styleUrls: ['./repositorios-listado.component.css'],
  standalone: false
})
export class RepositoriosListadoComponent {

  readonly initialVisibleRepositories = 8;
  readonly loadMoreStep = 8;

  repositorios$!: Observable<Repositorio[]>;
  visibleRepositories = this.initialVisibleRepositories;

  selected: Boolean = false;

  constructor(private repositorioService : RepositorioService) { }

  ngOnInit() {
    this.repositorios$ = this.repositorioService.getRepositorios();
  }

  trackById(index: number, repositorio: Repositorio) {
    return repositorio.id;
  }
  
  loadMore() {
    this.visibleRepositories += this.loadMoreStep;
  }

}
