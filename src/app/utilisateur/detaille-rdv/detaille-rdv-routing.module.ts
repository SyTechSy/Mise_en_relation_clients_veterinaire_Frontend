import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailleRdvPage } from './detaille-rdv.page';

const routes: Routes = [
  {
    path: '',
    component: DetailleRdvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailleRdvPageRoutingModule {}
