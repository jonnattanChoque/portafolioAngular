import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoData } from '../interfaces/info-data.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  cargada = false;

  constructor(private http: HttpClient) {
  }

  getInfo(){
    return this.http.get('assets/data/info-data.json');
  }

  cargarEquipo(){
    return this.http.get('https://angularloginapp-eb1c8.firebaseio.com/Equipo.json');
  }
}
