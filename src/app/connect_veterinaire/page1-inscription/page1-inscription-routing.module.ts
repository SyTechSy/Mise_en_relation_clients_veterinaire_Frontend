import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Page1InscriptionPage } from './page1-inscription.page';

const routes: Routes = [
  {
    path: '',
    component: Page1InscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page1InscriptionPageRoutingModule {}
