import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterSanteNomTraitementPage } from './ajouter-sante-nom-traitement.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterSanteNomTraitementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterSanteNomTraitementPageRoutingModule {}
