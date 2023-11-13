import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesRdvPage } from './mes-rdv.page';

const routes: Routes = [
  {
    path: '',
    component: MesRdvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesRdvPageRoutingModule {}
