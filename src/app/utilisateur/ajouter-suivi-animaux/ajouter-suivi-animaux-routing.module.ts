import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterSuiviAnimauxPage } from './ajouter-suivi-animaux.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterSuiviAnimauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterSuiviAnimauxPageRoutingModule {}
