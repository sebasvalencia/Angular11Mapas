import { Injectable } from '@angular/core';
import { Marcador } from '../interfaces/marcador.interface';


@Injectable()
export class MapasService {

  marcadores: Marcador[] = [];

  constructor() {
    const nuevoMarcador: Marcador = {
      lat: 6.246062,
      lng: -75.589227,
      titulo: 'Frisby',
      draggable: true
    }
    this.marcadores.push(nuevoMarcador);
  }

  insertarMarcador(marcador: Marcador) {
    this.marcadores.push(marcador);
  }

}
