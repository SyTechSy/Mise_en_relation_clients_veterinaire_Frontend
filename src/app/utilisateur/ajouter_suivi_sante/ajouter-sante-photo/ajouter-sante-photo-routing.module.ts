import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterSantePhotoPage } from './ajouter-sante-photo.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterSantePhotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterSantePhotoPageRoutingModule {}
