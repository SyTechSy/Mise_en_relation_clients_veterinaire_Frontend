import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnexionVeterinairePage } from './connexion-veterinaire.page';

const routes: Routes = [
  {
    path: '',
    component: ConnexionVeterinairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnexionVeterinairePageRoutingModule {}
