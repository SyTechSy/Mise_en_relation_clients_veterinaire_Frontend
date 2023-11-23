import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterHeurePage } from './ajouter-heure.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterHeurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterHeurePageRoutingModule {}
