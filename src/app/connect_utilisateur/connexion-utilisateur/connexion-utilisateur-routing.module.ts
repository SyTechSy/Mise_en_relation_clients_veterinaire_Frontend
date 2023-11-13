import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnexionUtilisateurPage } from './connexion-utilisateur.page';

const routes: Routes = [
  {
    path: '',
    component: ConnexionUtilisateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnexionUtilisateurPageRoutingModule {}
