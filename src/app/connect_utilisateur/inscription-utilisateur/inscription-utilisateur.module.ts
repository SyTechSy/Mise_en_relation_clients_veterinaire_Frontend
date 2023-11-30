import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionUtilisateurPageRoutingModule } from './inscription-utilisateur-routing.module';

import { InscriptionUtilisateurPage } from './inscription-utilisateur.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    InscriptionUtilisateurPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [InscriptionUtilisateurPage]
})
export class InscriptionUtilisateurPageModule {}
