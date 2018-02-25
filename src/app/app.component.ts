import { Component } from '@angular/core';

import { MapasService } from './services/mapas.service';

import { Marcador } from './interfaces/marcador.interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // datos por defecto - frisby de la 70
  lat = 6.246062;
  lng = -75.589227;

  constructor(public _ms: MapasService) { }

  clickMapa(evento) {
    const nuevoMarcador: Marcador = {
      lat: evento.coords.lat,
      lng: evento.coords.lng,
      titulo: 'Sin titulo',
      draggable: true
    };

    this._ms.insertarMarcador(nuevoMarcador);

    console.log(evento);
  }




}
