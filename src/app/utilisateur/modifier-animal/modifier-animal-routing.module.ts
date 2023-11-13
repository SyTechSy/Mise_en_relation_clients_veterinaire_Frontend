import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierAnimalPage } from './modifier-animal.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierAnimalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierAnimalPageRoutingModule {}
