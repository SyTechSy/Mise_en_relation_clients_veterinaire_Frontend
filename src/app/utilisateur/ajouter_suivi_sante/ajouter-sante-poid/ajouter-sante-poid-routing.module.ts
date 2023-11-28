import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterSantePoidPage } from './ajouter-sante-poid.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterSantePoidPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterSantePoidPageRoutingModule {}
