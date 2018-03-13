import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { AppRoutingModule } from './app.router';
import { BuscarComponent } from './components/buscar/buscar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticulosComponent,
    DetalleComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
