import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page3InscriptionPage } from './page3-inscription.page';

const routes: Routes = [
  {
    path: '',
    component: Page3InscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page3InscriptionPageRoutingModule {}
