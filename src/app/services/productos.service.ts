import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) {
  }

  cargarProductos(){
    return this.http.get('https://angularloginapp-eb1c8.firebaseio.com/Productos_idx.json');
  }

  cargarItem(id: string){
    return this.http.get(`https://angularloginapp-eb1c8.firebaseio.com/Productos/${id}.json`);
  }
}
