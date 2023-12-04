import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageBienvenuPage } from './page-bienvenu.page';

const routes: Routes = [
  {
    path: '',
    component: PageBienvenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageBienvenuPageRoutingModule {}
