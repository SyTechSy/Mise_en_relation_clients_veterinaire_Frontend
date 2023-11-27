import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierHeurePage } from './modifier-heure.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierHeurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierHeurePageRoutingModule {}
