import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { InfoData } from '../../interfaces/info-data.interfaces';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  dates = new Date().getFullYear();
  info: InfoData;

  constructor(public ipService: InfoPaginaService) {
    ipService.getInfo().subscribe((resp: InfoData) => {
      this.info = resp;
    });
  }

  ngOnInit(): void {
  }

}
