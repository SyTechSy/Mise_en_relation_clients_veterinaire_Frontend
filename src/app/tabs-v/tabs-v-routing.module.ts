import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsVPage } from './tabs-v.page';

const routes: Routes = [
  {
    path: 'tabs-v',
    component: TabsVPage,
    children: [
      {
        path: 'home-veterinaire',
        loadChildren: () => import('../veterinaire/home-veterinaire/home-veterinaire.module').then(m => m.HomeVeterinairePageModule)
      },
      {
        path: 'discussion-user-vete',
        loadChildren: () => import('../utilisateur_veteriniare/discussion-user-vete/discussion-user-vete.module').then(m => m.DiscussionUserVetePageModule)
      },
      {
        path: 'profil-principal',
        loadChildren: () => import('../veterinaire/profil-principal/profil-principal.module').then(m => m.ProfilPrincipalPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs-v/home-veterinaire',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs-v/home-veterinaire',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsVPageRoutingModule {}
