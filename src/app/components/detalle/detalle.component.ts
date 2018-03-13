import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  id: number;

  constructor(private _ar: ActivatedRoute) {
    this._ar.params.subscribe((params: Params) => {

      this.id = params['id'];
    });
  }

  ngOnInit() {
  }

}
