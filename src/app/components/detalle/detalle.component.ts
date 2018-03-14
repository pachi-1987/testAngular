import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticulosService } from '../../providers/articulos.service';
import { Articulos } from '../../interfaces/articulos';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  id: string;
  articulo: Articulos;

  constructor(private _ar: ActivatedRoute, private _articulosServ: ArticulosService) {
    this._ar.params.subscribe((params: Params) => {

      this.id = params['id'];
      this._articulosServ.getArticulo(this.id).subscribe((data: Articulos) => {
        console.log(data);
        this.articulo = data;
      });
    });
  }

  ngOnInit() {
  }

}
