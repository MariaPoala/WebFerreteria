import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'nosotros', component: NosotrosComponent }
    // { path: 'servicios', component: ServiciosComponent },
    // { path: 'proyectos', component: ProyectosComponent },
    // { path: 'contacto', component: ContactoComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }