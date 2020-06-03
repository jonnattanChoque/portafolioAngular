import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { InfoData } from '../../interfaces/info-data.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  info: InfoData;

  constructor(public ipService: InfoPaginaService, private route: Router) {}

  ngOnInit(): void {
  }

  buscarProducto(termino: string){
    if (termino.length > 1){
      this.route.navigate(['/search', termino]);
    }
  }
}
