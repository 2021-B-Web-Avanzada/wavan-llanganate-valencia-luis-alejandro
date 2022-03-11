import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Marca } from '../interfaces/marcas.interfaces';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaServiceService {
  url: string = environment.url
  public resultado: Marca[] = [];
  constructor(private http: HttpClient) {

  }

  getMarcas(){
    return this.http.get<Marca[]>(this.url + '/api')
  }

  saveMarca(marca : Marca){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    console.log(`La marca: ${JSON.stringify(marca)}`)
    return this.http.post(this.url+'/api', JSON.stringify(marca), {...httpOptions,
      responseType: 'text'})
  }

  deleteMarca(id_marca: string){
    return this.http.delete(this.url+'/api/' + id_marca, {responseType: 'text'})
  }

  editMarca(marca: Marca){
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    return this.http.put(this.url+'/api/' + marca.id_marca, JSON.stringify(marca), {...httpOptions, responseType: 'text'})
  }

}
