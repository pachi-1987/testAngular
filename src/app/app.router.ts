import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticulosComponent } from './components/articulos/articulos.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { CrearArticuloComponent } from './components/crear-articulo/crear-articulo.component';

const routes: Routes = [
{ path: 'home', component: ArticulosComponent },
{ path: 'buscar', component: BuscarComponent },
{ path: 'detalle/:id', component: DetalleComponent },
{ path: 'nuevo', component: CrearArticuloComponent },
{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {}
