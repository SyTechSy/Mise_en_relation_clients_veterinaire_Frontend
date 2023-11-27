import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierSanteNomPage } from './modifier-sante-nom.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierSanteNomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierSanteNomPageRoutingModule {}
