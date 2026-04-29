import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Usuario } from './Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private apiUrl = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}/users.json`);
  }

}
