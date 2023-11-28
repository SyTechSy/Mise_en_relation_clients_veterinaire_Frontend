import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterSanteSymptomePage } from './ajouter-sante-symptome.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterSanteSymptomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterSanteSymptomePageRoutingModule {}
