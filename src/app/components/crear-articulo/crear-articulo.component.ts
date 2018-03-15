import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { Articulos } from '../../interfaces/articulos';
import { ArticulosService } from '../../providers/articulos.service';

@Component({selector: 'app-crear-articulo', templateUrl: './crear-articulo.component.html', styleUrls: ['./crear-articulo.component.scss']})
export class CrearArticuloComponent implements OnInit {

  titulo = '';
  articulo = '';
  fechaPublicacion = new Date();

  constructor(private _articulosServ: ArticulosService) {}

  ngOnInit() {}

  crearTituloH4(field: HTMLTextAreaElement) {
    this.insertText(field.selectionStart, '<h4></h4>\n', field.selectionEnd);
  }

  crearTituloH5(field: HTMLTextAreaElement) {
    this.insertText(field.selectionStart, '<h5></h5>\n', field.selectionEnd);
  }

  crearParrafo(field: HTMLTextAreaElement) {
    this.insertText(field.selectionStart, '<p>\n\n</p>\n', field.selectionEnd);
  }

  crearTextoNegrita(field: HTMLTextAreaElement) {
    this.insertText(field.selectionStart, '<span class="negrita"></span>', field.selectionEnd);
  }

  crearTextoInclinado(field: HTMLTextAreaElement) {
    this.insertText(field.selectionStart, '<span class="inclinado"></span>', field.selectionEnd);
  }

  crearTextoSubrayado(field: HTMLTextAreaElement) {
    this.insertText(field.selectionStart, '<span class="subrayado"></span>', field.selectionEnd);
  }

  crearTextoTachado(field: HTMLTextAreaElement) {
    this.insertText(field.selectionStart, '<span class="tachado"></span>', field.selectionEnd);
  }

  cargarImagenes(field: HTMLTextAreaElement, event: any) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        const comp = this;
        const image = new Image();
        image.onload = function () {
          const canvas = document.createElement('canvas');
          let width = image.width;
          let height = image.height;
          const maxWidth = 300;
          const maxHeight = 300;

          if (width > height) {
              if (width > maxWidth) {
                  height *= maxWidth / width;
                  width = maxWidth;
              }
          } else {
              if (height > maxHeight) {
                  width *= maxHeight / height;
                  height = maxHeight;
              }
          }

          const ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          canvas.width = width;
          canvas.height = height;
          ctx.drawImage(image, 0, 0, width, height);

          comp.insertText(field.selectionStart, `<img class="rounded" src="${canvas.toDataURL('image/png')}">`, field.selectionEnd);
        };

        image.src = reader.result;
      };
    }
  }

  grabarArticulo() {

    const key: string = this.fechaPublicacion.getTime().toString();

    const data: any = {
      key: key,
      titulo: this.titulo,
      articulo: this.articulo,
      fechaPublicacion: this.fechaPublicacion
    };

    console.log(key, data);
    this._articulosServ.crearArticulo(key, data);
  }

  private insertText(before: number, newText: string, after: number) {
    console.log(before, after);
    const beforeStr = this.articulo.substr(0, before);
    const afterStr = this.articulo.substr(after, this.articulo.length);



    this.articulo = `${beforeStr}${newText}${afterStr}`;
  }
}
