import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  productos: any[] = [];

  constructor(public prodService: ProductosService) { }

  ngOnInit(): void {
    this.prodService.cargarProductos().subscribe((resp: any[]) => {
      this.productos = resp;
    });
  }

}
