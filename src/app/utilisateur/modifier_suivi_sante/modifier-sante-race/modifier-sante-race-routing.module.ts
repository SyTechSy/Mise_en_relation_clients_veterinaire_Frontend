import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierSanteRacePage } from './modifier-sante-race.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierSanteRacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierSanteRacePageRoutingModule {}
