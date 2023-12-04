import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheLocalisationPage } from './recherche-localisation.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheLocalisationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheLocalisationPageRoutingModule {}
