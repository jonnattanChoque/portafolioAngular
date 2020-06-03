import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  productos: any[] = [];

  constructor(private route: ActivatedRoute, public prodService: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productos = [];
      this.prodService.cargarProductos().subscribe((resp: any[]) => {
        resp.forEach(prod => {
          if (prod.categoria.toLocaleLowerCase().indexOf(params.termino.toLocaleLowerCase()) >= 0){
            this.productos.push(prod);
          }
        });
      });
    });
  }

}
