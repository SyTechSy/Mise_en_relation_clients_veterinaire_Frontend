import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterSanteNomPage } from './ajouter-sante-nom.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterSanteNomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterSanteNomPageRoutingModule {}
