import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterSanteDateVaccinationPage } from './ajouter-sante-date-vaccination.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterSanteDateVaccinationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterSanteDateVaccinationPageRoutingModule {}
