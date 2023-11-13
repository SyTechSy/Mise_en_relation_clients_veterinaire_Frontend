import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuiviMedicamentPage } from './suivi-medicament.page';

const routes: Routes = [
  {
    path: '',
    component: SuiviMedicamentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuiviMedicamentPageRoutingModule {}
