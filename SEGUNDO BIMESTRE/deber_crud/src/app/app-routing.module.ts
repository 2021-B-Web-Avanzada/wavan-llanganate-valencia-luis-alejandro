import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelularesPageComponent } from './celulares/celulares-page/celulares-page.component';
import { MarcasPageComponent } from './marcas/marcas-page/marcas-page.component';

const routes: Routes = [
  {
    path: 'marcas',
    component: MarcasPageComponent,
  },
  {
    path: 'marcas/celulares',
    component: CelularesPageComponent,
  },
  {
    path: '',
    redirectTo: '/marcas',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/marcas',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
