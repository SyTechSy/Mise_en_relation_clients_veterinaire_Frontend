import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page2InscriptionPage } from './page2-inscription.page';

const routes: Routes = [
  {
    path: '',
    component: Page2InscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page2InscriptionPageRoutingModule {}
