import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuiviSantePage } from './suivi-sante.page';

const routes: Routes = [
  {
    path: '',
    component: SuiviSantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuiviSantePageRoutingModule {}
