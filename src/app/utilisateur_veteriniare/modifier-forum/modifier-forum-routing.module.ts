import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModifierForumPage } from './modifier-forum.page';

const routes: Routes = [
  {
    path: '',
    component: ModifierForumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModifierForumPageRoutingModule {}
