import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page5InscriptionPage } from './page5-inscription.page';

const routes: Routes = [
  {
    path: '',
    component: Page5InscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page5InscriptionPageRoutingModule {}
