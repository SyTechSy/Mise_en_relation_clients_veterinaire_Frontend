import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificationMedicamentPage } from './modification-medicament.page';

const routes: Routes = [
  {
    path: '',
    component: ModificationMedicamentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificationMedicamentPageRoutingModule {}
