import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterSanteRacePage } from './ajouter-sante-race.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterSanteRacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterSanteRacePageRoutingModule {}
