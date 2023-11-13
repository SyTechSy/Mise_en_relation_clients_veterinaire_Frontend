import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuiviAnimalPage } from './suivi-animal.page';

const routes: Routes = [
  {
    path: '',
    component: SuiviAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuiviAnimalPageRoutingModule {}
