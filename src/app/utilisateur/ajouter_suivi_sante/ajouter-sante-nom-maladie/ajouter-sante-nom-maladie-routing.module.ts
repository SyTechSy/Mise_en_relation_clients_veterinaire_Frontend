import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterSanteNomMaladiePage } from './ajouter-sante-nom-maladie.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterSanteNomMaladiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterSanteNomMaladiePageRoutingModule {}
