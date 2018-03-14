import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { AppRoutingModule } from './app.router';
import { BuscarComponent } from './components/buscar/buscar.component';

import { KeysPipe } from './pipes/keys.pipe';
import { ArticulosService } from './providers/articulos.service';
import { CrearArticuloComponent } from './components/crear-articulo/crear-articulo.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticulosComponent,
    DetalleComponent,
    BuscarComponent,
    KeysPipe,
    CrearArticuloComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    AngularFireDatabase,
    ArticulosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
