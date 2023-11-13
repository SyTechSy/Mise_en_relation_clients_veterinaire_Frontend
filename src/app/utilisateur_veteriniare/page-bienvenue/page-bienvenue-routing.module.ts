import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageBienvenuePage } from './page-bienvenue.page';

const routes: Routes = [
  {
    path: '',
    component: PageBienvenuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageBienvenuePageRoutingModule {}
