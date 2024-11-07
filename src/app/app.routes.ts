import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'productos/categoria/:id', component: ProductosComponent },
    // { path: 'servicios', component: ServiciosComponent },
    // { path: 'proyectos', component: ProyectosComponent },
    { path: 'contacto', component: ContactoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }