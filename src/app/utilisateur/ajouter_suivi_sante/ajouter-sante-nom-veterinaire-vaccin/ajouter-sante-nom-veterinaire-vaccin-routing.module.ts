import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterSanteNomVeterinaireVaccinPage } from './ajouter-sante-nom-veterinaire-vaccin.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterSanteNomVeterinaireVaccinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterSanteNomVeterinaireVaccinPageRoutingModule {}
