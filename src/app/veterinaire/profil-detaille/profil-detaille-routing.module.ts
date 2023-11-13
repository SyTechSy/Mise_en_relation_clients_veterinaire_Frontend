import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilDetaillePage } from './profil-detaille.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilDetaillePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilDetaillePageRoutingModule {}
