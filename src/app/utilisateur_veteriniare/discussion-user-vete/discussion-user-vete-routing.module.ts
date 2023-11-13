import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscussionUserVetePage } from './discussion-user-vete.page';

const routes: Routes = [
  {
    path: '',
    component: DiscussionUserVetePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscussionUserVetePageRoutingModule {}
