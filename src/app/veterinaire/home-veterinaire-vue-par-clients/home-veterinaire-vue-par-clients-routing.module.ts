import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeVeterinaireVueParClientsPage } from './home-veterinaire-vue-par-clients.page';

const routes: Routes = [
  {
    path: '',
    component: HomeVeterinaireVueParClientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeVeterinaireVueParClientsPageRoutingModule {}
