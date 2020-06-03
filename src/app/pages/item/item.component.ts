import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto = [];
  id = '';

  constructor(private route: ActivatedRoute, public prodService: ProductosService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params.id;

      this.prodService.cargarItem(params.id).subscribe((resp: any[]) => {
        this.producto = resp;
      });
    });
  }

}
