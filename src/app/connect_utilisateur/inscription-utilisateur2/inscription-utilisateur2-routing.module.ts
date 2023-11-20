import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionUtilisateur2Page } from './inscription-utilisateur2.page';

const routes: Routes = [
  {
    path: '',
    component: InscriptionUtilisateur2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InscriptionUtilisateur2PageRoutingModule {}
