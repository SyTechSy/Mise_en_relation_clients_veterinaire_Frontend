import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterSanteNomVeterinaireTraitementPage } from './ajouter-sante-nom-veterinaire-traitement.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterSanteNomVeterinaireTraitementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterSanteNomVeterinaireTraitementPageRoutingModule {}
