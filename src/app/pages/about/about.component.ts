import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  equipo: any[] = [];


  constructor(public ipService: InfoPaginaService) {
    this.ipService.cargarEquipo().subscribe((resp: any[]) => {
      this.equipo  = resp;
      console.log(this.equipo);
    });
  }

  ngOnInit(): void {
  }

}
