import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilModificationUserPage } from './profil-modification-user.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilModificationUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilModificationUserPageRoutingModule {}
