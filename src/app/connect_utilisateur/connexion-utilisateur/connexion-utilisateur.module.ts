import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnexionUtilisateurPageRoutingModule } from './connexion-utilisateur-routing.module';

import { ConnexionUtilisateurPage } from './connexion-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnexionUtilisateurPageRoutingModule
  ],
  declarations: [ConnexionUtilisateurPage]
})
export class ConnexionUtilisateurPageModule {}
