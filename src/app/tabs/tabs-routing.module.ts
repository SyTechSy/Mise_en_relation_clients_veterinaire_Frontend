import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'accueil',
        loadChildren: () => import('../accueil/accueil.module').then(m => m.AccueilPageModule)
      },
      {
        path: 'discussion-user-vete',
        loadChildren: () => import('../utilisateur_veteriniare/discussion-user-vete/discussion-user-vete.module').then(m => m.DiscussionUserVetePageModule)
      },
      {
        path: 'profil-user',
        loadChildren: () => import('../utilisateur/profil-user/profil-user.module').then(m => m.ProfilUserPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/accueil',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
