import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeVeterinairePlanningModificationPage } from './home-veterinaire-planning-modification.page';

const routes: Routes = [
  {
    path: '',
    component: HomeVeterinairePlanningModificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeVeterinairePlanningModificationPageRoutingModule {}
