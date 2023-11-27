import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterSanteNomVeterinaireVaccinPageRoutingModule } from './ajouter-sante-nom-veterinaire-vaccin-routing.module';

import { AjouterSanteNomVeterinaireVaccinPage } from './ajouter-sante-nom-veterinaire-vaccin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterSanteNomVeterinaireVaccinPageRoutingModule
  ],
  declarations: [AjouterSanteNomVeterinaireVaccinPage]
})
export class AjouterSanteNomVeterinaireVaccinPageModule {}
