import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Acessorio } from '../models/acessorio';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcessorioService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/acessorio";

  constructor() { }

  listAll(): Observable<Acessorio[]>{
    return this.http.get<Acessorio[]>(this.API+"/listAll");
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/delete/"+id, {responseType: 'text' as 'json'});
  }

  save(acessorio: Acessorio): Observable<string>{
    return this.http.post<string>(this.API+"/save", acessorio, {responseType: 'text' as 'json'});
  }

  update(acessorio: Acessorio, id: number): Observable<string>{
    return this.http.put<string>(this.API+"/update/"+id, acessorio, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Acessorio>{
    return this.http.get<Acessorio>(this.API+"/findById/"+id);
  }

}
