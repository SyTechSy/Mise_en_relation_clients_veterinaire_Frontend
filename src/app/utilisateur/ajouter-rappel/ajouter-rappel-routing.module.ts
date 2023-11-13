import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterRappelPage } from './ajouter-rappel.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterRappelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterRappelPageRoutingModule {}
