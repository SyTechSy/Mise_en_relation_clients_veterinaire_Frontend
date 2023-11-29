import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs-v/tabs-v.module').then(m => m.TabsVPageModule)
  },
  {
    path: 'tabs/accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'discussion-user-vete',
    loadChildren: () => import('./utilisateur_veteriniare/discussion-user-vete/discussion-user-vete.module').then( m => m.DiscussionUserVetePageModule)
  },
  {
    path: 'tabs/profil-user',
    loadChildren: () => import('./utilisateur/profil-user/profil-user.module').then( m => m.ProfilUserPageModule)
  },
  {
    path: 'page1-inscription',
    loadChildren: () => import('./connect_veterinaire/page1-inscription/page1-inscription.module').then( m => m.Page1InscriptionPageModule)
  },
  {
    path: 'page2-inscription',
    loadChildren: () => import('./connect_veterinaire/page2-inscription/page2-inscription.module').then( m => m.Page2InscriptionPageModule)
  },
  {
    path: 'page3-inscription',
    loadChildren: () => import('./connect_veterinaire/page3-inscription/page3-inscription.module').then( m => m.Page3InscriptionPageModule)
  },
  {
    path: 'page4-inscription',
    loadChildren: () => import('./connect_veterinaire/page4-inscription/page4-inscription.module').then( m => m.Page4InscriptionPageModule)
  },
  {
    path: 'page5-inscription',
    loadChildren: () => import('./connect_veterinaire/page5-inscription/page5-inscription.module').then( m => m.Page5InscriptionPageModule)
  },
  {
    path: 'connexion-veterinaire',
    loadChildren: () => import('./connect_veterinaire/connexion-veterinaire/connexion-veterinaire.module').then( m => m.ConnexionVeterinairePageModule)
  },
  {
    path: 'connexion-utilisateur',
    loadChildren: () => import('./connect_utilisateur/connexion-utilisateur/connexion-utilisateur.module').then( m => m.ConnexionUtilisateurPageModule)
  },
  {
    path: 'inscription-utilisateur',
    loadChildren: () => import('./connect_utilisateur/inscription-utilisateur/inscription-utilisateur.module').then( m => m.InscriptionUtilisateurPageModule)
  },
  {
    path: 'page-bienvenue',
    loadChildren: () => import('./utilisateur_veteriniare/page-bienvenue/page-bienvenue.module').then( m => m.PageBienvenuePageModule)
  },
  {
    path: 'section-choix',
    loadChildren: () => import('./utilisateur_veteriniare/section-choix/section-choix.module').then( m => m.SectionChoixPageModule)
  },
  {
    path: 'ajouter-animal',
    loadChildren: () => import('./utilisateur/ajouter-animal/ajouter-animal.module').then( m => m.AjouterAnimalPageModule)
  },
  {
    path: 'ajouter-medicament',
    loadChildren: () => import('./utilisateur/ajouter-medicament/ajouter-medicament.module').then( m => m.AjouterMedicamentPageModule)
  },
  {
    path: 'ajouter-rappel',
    loadChildren: () => import('./utilisateur/ajouter-rappel/ajouter-rappel.module').then( m => m.AjouterRappelPageModule)
  },
  {
    path: 'detail-suivi-animal/:id',
    loadChildren: () => import('./utilisateur/detail-suivi-animal/detail-suivi-animal.module').then( m => m.DetailSuiviAnimalPageModule)
  },
  {
    path: 'detaille-rdv',
    loadChildren: () => import('./utilisateur/detaille-rdv/detaille-rdv.module').then( m => m.DetailleRdvPageModule)
  },
  {
    path: 'mes-rdv',
    loadChildren: () => import('./utilisateur/mes-rdv/mes-rdv.module').then( m => m.MesRdvPageModule)
  },
  {
    path: 'modification-medicament/:id',
    loadChildren: () => import('./utilisateur/modification-medicament/modification-medicament.module').then( m => m.ModificationMedicamentPageModule)
  },
  {
    path: 'profil-veterinaire-vue-par-clients/:id',
    loadChildren: () => import('./utilisateur/profil-veterinaire-vue-par-clients/profil-veterinaire-vue-par-clients.module').then( m => m.ProfilVeterinaireVueParClientsPageModule)
  },
  {
    path: 'modifier-animal/:id',
    loadChildren: () => import('./utilisateur/modifier-animal/modifier-animal.module').then( m => m.ModifierAnimalPageModule)
  },
  {
    path: 'modifier-rdv',
    loadChildren: () => import('./utilisateur/modifier-rdv/modifier-rdv.module').then( m => m.ModifierRdvPageModule)
  },
  {
    path: 'prendre-rdv',
    loadChildren: () => import('./utilisateur/prendre-rdv/prendre-rdv.module').then( m => m.PrendreRdvPageModule)
  },
  {
    path: 'profil-modification-user',
    loadChildren: () => import('./utilisateur/profil-modification-user/profil-modification-user.module').then( m => m.ProfilModificationUserPageModule)
  },
  {
    path: 'suivi-animal',
    loadChildren: () => import('./utilisateur/suivi-animal/suivi-animal.module').then( m => m.SuiviAnimalPageModule)
  },
  {
    path: 'suivi-medicament',
    loadChildren: () => import('./utilisateur/suivi-medicament/suivi-medicament.module').then( m => m.SuiviMedicamentPageModule)
  },
  {
    path: 'ajouter-forum',
    loadChildren: () => import('./utilisateur_veteriniare/ajouter-forum/ajouter-forum.module').then( m => m.AjouterForumPageModule)
  },
  {
    path: 'list-forum',
    loadChildren: () => import('./utilisateur_veteriniare/list-forum/list-forum.module').then( m => m.ListForumPageModule)
  },
  {
    path: 'modifier-forum',
    loadChildren: () => import('./utilisateur_veteriniare/modifier-forum/modifier-forum.module').then( m => m.ModifierForumPageModule)
  },
  {
    path: 'tabs-v/home-veterinaire',
    loadChildren: () => import('./veterinaire/home-veterinaire/home-veterinaire.module').then( m => m.HomeVeterinairePageModule)
  },
  {
    path: 'home-veterinaire-planning-modification',
    loadChildren: () => import('./veterinaire/home-veterinaire-planning-modification/home-veterinaire-planning-modification.module').then( m => m.HomeVeterinairePlanningModificationPageModule)
  },
  {
    path: 'home-veterinaire-vue-par-clients/:id',
    loadChildren: () => import('./veterinaire/home-veterinaire-vue-par-clients/home-veterinaire-vue-par-clients.module').then( m => m.HomeVeterinaireVueParClientsPageModule)
  },
  {
    path: 'information-modifier',
    loadChildren: () => import('./veterinaire/information-modifier/information-modifier.module').then( m => m.InformationModifierPageModule)
  },
  {
    path: 'information-plannig-modifier',
    loadChildren: () => import('./veterinaire/information-plannig-modifier/information-plannig-modifier.module').then( m => m.InformationPlannigModifierPageModule)
  },
  {
    path: 'list-veterinaire',
    loadChildren: () => import('./veterinaire/list-veterinaire/list-veterinaire.module').then( m => m.ListVeterinairePageModule)
  },
  {
    path: 'profil-detaille',
    loadChildren: () => import('./veterinaire/profil-detaille/profil-detaille.module').then( m => m.ProfilDetaillePageModule)
  },
  {
    path: 'profil-modification',
    loadChildren: () => import('./veterinaire/profil-modification/profil-modification.module').then( m => m.ProfilModificationPageModule)
  },
  {
    path: 'profil-principal',
    loadChildren: () => import('./veterinaire/profil-principal/profil-principal.module').then( m => m.ProfilPrincipalPageModule)
  },
  {
    path: 'inscription-utilisateur2',
    loadChildren: () => import('./connect_utilisateur/inscription-utilisateur2/inscription-utilisateur2.module').then( m => m.InscriptionUtilisateur2PageModule)
  },
  {
    path: 'tabs-v',
    loadChildren: () => import('./tabs-v/tabs-v.module').then( m => m.TabsVPageModule)
  },
  {
    path: 'ajouter-heure',
    loadChildren: () => import('./veterinaire/ajouter-heure/ajouter-heure.module').then( m => m.AjouterHeurePageModule)
  },
  {
    path: 'modifier-heure/:id',
    loadChildren: () => import('./veterinaire/modifier-heure/modifier-heure.module').then( m => m.ModifierHeurePageModule)
  },
  {
    path: 'suivi-sante',
    loadChildren: () => import('./utilisateur/suivi-sante/suivi-sante.module').then( m => m.SuiviSantePageModule)
  },
  {
    path: 'detail-animal-sante/:id',
    loadChildren: () => import('./utilisateur/detail-animal-sante/detail-animal-sante.module').then( m => m.DetailAnimalSantePageModule)
  },
  {
    path: 'modifier-sante-nom',
    loadChildren: () => import('./utilisateur/modifier_suivi_sante/modifier-sante-nom/modifier-sante-nom.module').then( m => m.ModifierSanteNomPageModule)
  },
  {
    path: 'modifier-sante-race',
    loadChildren: () => import('./utilisateur/modifier_suivi_sante/modifier-sante-race/modifier-sante-race.module').then( m => m.ModifierSanteRacePageModule)
  },
  {
    path: 'modifier-sante-age',
    loadChildren: () => import('./utilisateur/modifier_suivi_sante/modifier-sante-age/modifier-sante-age.module').then( m => m.ModifierSanteAgePageModule)
  },
  {
    path: 'modifier-sante-sexe',
    loadChildren: () => import('./utilisateur/modifier_suivi_sante/modifier-sante-sexe/modifier-sante-sexe.module').then( m => m.ModifierSanteSexePageModule)
  },
  {
    path: 'ajouter-sante-age',
    loadChildren: () => import('./utilisateur/ajouter_suivi_sante/ajouter-sante-age/ajouter-sante-age.module').then( m => m.AjouterSanteAgePageModule)
  },
  {
    path: 'ajouter-sante-nom',
    loadChildren: () => import('./utilisateur/ajouter_suivi_sante/ajouter-sante-nom/ajouter-sante-nom.module').then( m => m.AjouterSanteNomPageModule)
  },
  {
    path: 'ajouter-sante-race',
    loadChildren: () => import('./utilisateur/ajouter_suivi_sante/ajouter-sante-race/ajouter-sante-race.module').then( m => m.AjouterSanteRacePageModule)
  },
  {
    path: 'ajouter-sante-sexe',
    loadChildren: () => import('./utilisateur/ajouter_suivi_sante/ajouter-sante-sexe/ajouter-sante-sexe.module').then( m => m.AjouterSanteSexePageModule)
  },
  {
    path: 'ajouter-sante-photo',
    loadChildren: () => import('./utilisateur/ajouter_suivi_sante/ajouter-sante-photo/ajouter-sante-photo.module').then( m => m.AjouterSantePhotoPageModule)
  },
  {
    path: 'ajouter-sante-date-vaccination',
    loadChildren: () => import('./utilisateur/ajouter_suivi_sante/ajouter-sante-date-vaccination/ajouter-sante-date-vaccination.module').then( m => m.AjouterSanteDateVaccinationPageModule)
  },
  {
    path: 'ajouter-sante-nom-veterinaire-vaccin',
    loadChildren: () => import('./utilisateur/ajouter_suivi_sante/ajouter-sante-nom-veterinaire-vaccin/ajouter-sante-nom-veterinaire-vaccin.module').then( m => m.AjouterSanteNomVeterinaireVaccinPageModule)
  },
  {
    path: 'ajouter-sante-nom-vaccin',
    loadChildren: () => import('./utilisateur/ajouter_suivi_sante/ajouter-sante-nom-vaccin/ajouter-sante-nom-vaccin.module').then( m => m.AjouterSanteNomVaccinPageModule)
  },
  {
    path: 'ajouter-sante-date-traitement',
    loadChildren: () => import('./utilisateur/ajouter_suivi_sante/ajouter-sante-date-traitement/ajouter-sante-date-traitement.module').then( m => m.AjouterSanteDateTraitementPageModule)
  },
  {
    path: 'ajouter-sante-nom-veterinaire-traitement',
    loadChildren: () => import('./utilisateur/ajouter_suivi_sante/ajouter-sante-nom-veterinaire-traitement/ajouter-sante-nom-veterinaire-traitement.module').then( m => m.AjouterSanteNomVeterinaireTraitementPageModule)
  },
  {
    path: 'ajouter-sante-nom-traitement',
    loadChildren: () => import('./utilisateur/ajouter_suivi_sante/ajouter-sante-nom-traitement/ajouter-sante-nom-traitement.module').then( m => m.AjouterSanteNomTraitementPageModule)
  },
  {
    path: 'ajouter-sante-date-maladie',
    loadChildren: () => import('./utilisateur/ajouter_suivi_sante/ajouter-sante-date-maladie/ajouter-sante-date-maladie.module').then( m => m.AjouterSanteDateMaladiePageModule)
  },
  {
    path: 'ajouter-sante-nom-maladie',
    loadChildren: () => import('./utilisateur/ajouter_suivi_sante/ajouter-sante-nom-maladie/ajouter-sante-nom-maladie.module').then( m => m.AjouterSanteNomMaladiePageModule)
  },
  {
    path: 'ajouter-sante-symptome',
    loadChildren: () => import('./utilisateur/ajouter_suivi_sante/ajouter-sante-symptome/ajouter-sante-symptome.module').then( m => m.AjouterSanteSymptomePageModule)
  },
  {
    path: 'ajouter-sante-poid',
    loadChildren: () => import('./utilisateur/ajouter_suivi_sante/ajouter-sante-poid/ajouter-sante-poid.module').then( m => m.AjouterSantePoidPageModule)
  },
  {
    path: 'ajouter-sante-description',
    loadChildren: () => import('./utilisateur/ajouter_suivi_sante/ajouter-sante-description/ajouter-sante-description.module').then( m => m.AjouterSanteDescriptionPageModule)
  },
  {
    path: 'ajouter-suivi-animaux',
    loadChildren: () => import('./utilisateur/ajouter-suivi-animaux/ajouter-suivi-animaux.module').then( m => m.AjouterSuiviAnimauxPageModule)
  },
  {
    path: 'modifier-suivi-animaux',
    loadChildren: () => import('./utilisateur/modifier-suivi-animaux/modifier-suivi-animaux.module').then( m => m.ModifierSuiviAnimauxPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
