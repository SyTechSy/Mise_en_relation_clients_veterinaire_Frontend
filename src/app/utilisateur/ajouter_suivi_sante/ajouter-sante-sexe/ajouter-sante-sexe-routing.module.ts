import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterSanteSexePage } from './ajouter-sante-sexe.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterSanteSexePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterSanteSexePageRoutingModule {}
