import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilPrincipalPage } from './profil-principal.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilPrincipalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilPrincipalPageRoutingModule {}
