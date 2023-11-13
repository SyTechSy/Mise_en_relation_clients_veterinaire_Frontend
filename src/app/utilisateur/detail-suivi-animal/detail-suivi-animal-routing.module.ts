import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSuiviAnimalPage } from './detail-suivi-animal.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSuiviAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSuiviAnimalPageRoutingModule {}
