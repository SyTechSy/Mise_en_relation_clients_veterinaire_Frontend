import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterSanteNomVaccinPage } from './ajouter-sante-nom-vaccin.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterSanteNomVaccinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterSanteNomVaccinPageRoutingModule {}
