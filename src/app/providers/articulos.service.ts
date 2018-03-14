import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Articulos } from '../interfaces/articulos';

@Injectable()
export class ArticulosService {

  articulos: Articulos[] = [];

  constructor(private _afd: AngularFireDatabase) {}

  getArticulos() {
    this.articulos.length = 0;

    this._afd.object('articulos').valueChanges().subscribe(data => {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const element = data[key];
          this.articulos.push({
            key: key,
            titulo: element.titulo,
            articulo: element.articulo,
            fechaPublicacion: element.fechaPublicacion
          });
        }
      }
    });
  }

  crearArticulo(key: string, data: any) {

    return this._afd.object(`articulos/${key}`).update(data);
  }

}
