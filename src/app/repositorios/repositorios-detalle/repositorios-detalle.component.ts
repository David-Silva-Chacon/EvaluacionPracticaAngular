import { Component, DestroyRef, OnInit, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, forkJoin, map, of, switchMap, tap } from 'rxjs';
import { Repositorio } from '../Repositorio';
import { RepositorioService } from '../repositorio.service';
import { Usuario } from '../../usuarios/Usuario';
import { UsuarioService } from '../../usuarios/usuario.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-repositorios-detalle',
  templateUrl: './repositorios-detalle.component.html',
  styleUrls: ['./repositorios-detalle.component.css'],
  standalone: false
})
export class RepositoriosDetalleComponent implements OnInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly route = inject(ActivatedRoute);
  private readonly repositorioService = inject(RepositorioService);
  private readonly usuarioService = inject(UsuarioService);

  readonly repositorio = signal<Repositorio | undefined>(undefined);
  readonly repositorioOwner = signal<Usuario | undefined>(undefined);
  readonly isLoading = signal(true);
  private readonly hasLoaded = signal(false);
  readonly notFound = computed(() => this.hasLoaded() && !this.repositorio());

  ngOnInit() {
    this.route.paramMap.pipe(
      map(paramMap => Number(paramMap.get('id'))),
      tap(() => {
        this.isLoading.set(true);
        this.hasLoaded.set(false);
        this.repositorio.set(undefined);
        this.repositorioOwner.set(undefined);
      }),
      switchMap(repositorioId => forkJoin({
        repositorios: this.repositorioService.getRepositorios(),
        usuarios: this.usuarioService.getUsuarios()
      }).pipe(
        map(({ repositorios, usuarios }) => {
          if (!Number.isInteger(repositorioId) || repositorioId <= 0) {
            return { repositorio: undefined, repositorioOwner: undefined };
          }

          const repositorio = repositorios.find(item => Number(item.id) === repositorioId);
          const repositorioOwner = usuarios.find(
            usuario => Number(usuario.id) === Number(repositorio?.ownerId)
          );

          return { repositorio, repositorioOwner };
        }),
        catchError(() => of({ repositorio: undefined, repositorioOwner: undefined }))
      )),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(({ repositorio, repositorioOwner }) => {
      this.repositorio.set(repositorio);
      this.repositorioOwner.set(repositorioOwner);
      this.isLoading.set(false);
      this.hasLoaded.set(true);
    });
  }

}
