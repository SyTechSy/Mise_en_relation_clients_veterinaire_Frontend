import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierSuiviAnimauxPage } from './modifier-suivi-animaux.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierSuiviAnimauxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierSuiviAnimauxPageRoutingModule {}
