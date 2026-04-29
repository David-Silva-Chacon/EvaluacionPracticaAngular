import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Repositorio } from './Repositorio';

@Injectable({
  providedIn: 'root'
})
export class RepositorioService {
  private apiUrl = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Repositorio[]> {
    return this.http.get<Repositorio[]>(`${this.apiUrl}/repositories.json`);
  }

}
