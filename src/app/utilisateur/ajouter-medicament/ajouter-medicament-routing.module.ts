import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterMedicamentPage } from './ajouter-medicament.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterMedicamentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterMedicamentPageRoutingModule {}
