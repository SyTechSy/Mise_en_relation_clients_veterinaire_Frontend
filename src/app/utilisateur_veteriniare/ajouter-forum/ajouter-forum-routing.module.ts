import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterForumPage } from './ajouter-forum.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterForumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterForumPageRoutingModule {}
