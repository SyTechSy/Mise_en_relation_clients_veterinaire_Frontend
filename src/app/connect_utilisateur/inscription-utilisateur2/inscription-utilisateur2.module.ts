import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscriptionUtilisateur2PageRoutingModule } from './inscription-utilisateur2-routing.module';

import { InscriptionUtilisateur2Page } from './inscription-utilisateur2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscriptionUtilisateur2PageRoutingModule
  ],
  declarations: [InscriptionUtilisateur2Page]
})
export class InscriptionUtilisateur2PageModule {}
