import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationModifierPage } from './information-modifier.page';

const routes: Routes = [
  {
    path: '',
    component: InformationModifierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationModifierPageRoutingModule {}
