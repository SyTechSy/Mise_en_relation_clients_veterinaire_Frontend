import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterSanteDateTraitementPage } from './ajouter-sante-date-traitement.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterSanteDateTraitementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterSanteDateTraitementPageRoutingModule {}
