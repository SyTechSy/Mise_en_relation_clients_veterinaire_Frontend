import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierRdvPage } from './modifier-rdv.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierRdvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierRdvPageRoutingModule {}
