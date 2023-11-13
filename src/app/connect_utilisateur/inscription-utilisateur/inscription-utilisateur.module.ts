import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionUtilisateurPageRoutingModule } from './inscription-utilisateur-routing.module';

import { InscriptionUtilisateurPage } from './inscription-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionUtilisateurPageRoutingModule
  ],
  declarations: [InscriptionUtilisateurPage]
})
export class InscriptionUtilisateurPageModule {}
