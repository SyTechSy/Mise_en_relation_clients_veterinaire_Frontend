import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeVeterinairePage } from './home-veterinaire.page';

const routes: Routes = [
  {
    path: '',
    component: HomeVeterinairePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeVeterinairePageRoutingModule {}
