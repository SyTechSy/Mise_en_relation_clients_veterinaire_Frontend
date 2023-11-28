import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterSanteDateMaladiePage } from './ajouter-sante-date-maladie.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterSanteDateMaladiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterSanteDateMaladiePageRoutingModule {}
