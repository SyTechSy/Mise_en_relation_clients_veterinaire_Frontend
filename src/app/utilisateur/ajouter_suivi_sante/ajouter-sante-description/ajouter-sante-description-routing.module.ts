import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterSanteDescriptionPage } from './ajouter-sante-description.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterSanteDescriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterSanteDescriptionPageRoutingModule {}
