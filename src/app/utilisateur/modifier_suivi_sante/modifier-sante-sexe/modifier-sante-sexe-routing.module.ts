import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierSanteSexePage } from './modifier-sante-sexe.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierSanteSexePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierSanteSexePageRoutingModule {}
