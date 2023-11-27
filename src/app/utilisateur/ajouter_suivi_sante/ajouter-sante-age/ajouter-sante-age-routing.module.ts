import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterSanteAgePage } from './ajouter-sante-age.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterSanteAgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterSanteAgePageRoutingModule {}
