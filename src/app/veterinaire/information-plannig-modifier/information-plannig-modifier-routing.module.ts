import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformationPlannigModifierPage } from './information-plannig-modifier.page';

const routes: Routes = [
  {
    path: '',
    component: InformationPlannigModifierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformationPlannigModifierPageRoutingModule {}
