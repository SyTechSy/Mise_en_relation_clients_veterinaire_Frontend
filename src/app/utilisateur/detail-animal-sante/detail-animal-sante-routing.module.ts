import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailAnimalSantePage } from './detail-animal-sante.page';

const routes: Routes = [
  {
    path: '',
    component: DetailAnimalSantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailAnimalSantePageRoutingModule {}
