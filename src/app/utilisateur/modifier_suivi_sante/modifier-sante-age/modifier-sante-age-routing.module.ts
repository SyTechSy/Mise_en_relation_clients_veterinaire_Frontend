import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierSanteAgePage } from './modifier-sante-age.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierSanteAgePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierSanteAgePageRoutingModule {}
