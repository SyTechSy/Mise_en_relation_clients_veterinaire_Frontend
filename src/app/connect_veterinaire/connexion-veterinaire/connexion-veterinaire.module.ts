import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnexionVeterinairePageRoutingModule } from './connexion-veterinaire-routing.module';

import { ConnexionVeterinairePage } from './connexion-veterinaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnexionVeterinairePageRoutingModule
  ],
  declarations: [ConnexionVeterinairePage]
})
export class ConnexionVeterinairePageModule {}
