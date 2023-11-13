import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SectionChoixPage } from './section-choix.page';

const routes: Routes = [
  {
    path: '',
    component: SectionChoixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionChoixPageRoutingModule {}
