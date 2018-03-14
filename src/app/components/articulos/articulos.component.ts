import { Component, OnInit } from '@angular/core';


import { Articulos } from '../../interfaces/articulos';
import { ArticulosService } from '../../providers/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {

  articulos: any;

  constructor(public _as: ArticulosService) {

    this._as.getArticulos();
  }

  ngOnInit() {}

}
