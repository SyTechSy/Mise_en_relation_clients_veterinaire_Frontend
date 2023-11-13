import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilVeterinaireVueParClientsPage } from './profil-veterinaire-vue-par-clients.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilVeterinaireVueParClientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilVeterinaireVueParClientsPageRoutingModule {}
