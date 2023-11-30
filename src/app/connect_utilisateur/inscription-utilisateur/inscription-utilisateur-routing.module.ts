import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscriptionUtilisateurPage } from './inscription-utilisateur.page';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: InscriptionUtilisateurPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    // ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class InscriptionUtilisateurPageRoutingModule {}
