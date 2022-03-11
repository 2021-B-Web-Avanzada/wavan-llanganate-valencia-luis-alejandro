import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Celular } from '../interfaces/celular.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CelularServiceService {
  url: string = environment.url;
  constructor(
    private http: HttpClient
  ) { }

  getCelulares(id_marca: number){
    return this.http.get<Celular[]>(`${this.url}/api/${id_marca}`)
  }

  saveCelular(cell: Celular){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    const cell_ed = {
      nombre: cell.nombre,
      precio: cell.precio,
      es_actual: cell.es_actual,
      imei: cell.imei,
      serial: cell.serial
    }
    return this.http.post(`${this.url}/api/${cell.id_marca}`, JSON.stringify(cell_ed), {...httpOptions,
      responseType: 'text'})

  }

  deleteCelular(id_celular: string, id_marca: string){
    return this.http.delete(`${this.url}/api/${id_marca}/${id_celular}`, {responseType: 'text'})
  }

  editCellphone(cell: Celular){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    const cell_ed = {
      nombre: cell.nombre,
      precio: cell.precio,
      es_actual: cell.es_actual,
      imei: cell.imei,
      serial: cell.serial
    }
    return this.http.put(`${this.url}/api/${cell.id_marca}/${cell.id_celular}`, JSON.stringify(cell_ed), {...httpOptions, responseType: 'text'})
  }

}
