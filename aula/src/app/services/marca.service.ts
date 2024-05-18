import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Marca } from '../models/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/marca";

  constructor() { }

  listAll(): Observable<Marca[]>{
    return this.http.get<Marca[]>(this.API+"/listAll");
  }

  delete(id: number): Observable<string>{
    return this.http.delete<string>(this.API+"/delete/"+id, {responseType: 'text' as 'json'});
  }

  save(marca: Marca): Observable<string>{
    return this.http.post<string>(this.API+"/save", marca, {responseType: 'text' as 'json'});
  }

  update(marca: Marca, id: number): Observable<string>{
    return this.http.put<string>(this.API+"/update/"+id, marca, {responseType: 'text' as 'json'});
  }

  findById(id: number): Observable<Marca>{
    return this.http.get<Marca>(this.API+"/findById/"+id);
  }

}
