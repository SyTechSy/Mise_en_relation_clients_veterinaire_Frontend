import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterSanteNomVeterinaireTraitementPageRoutingModule } from './ajouter-sante-nom-veterinaire-traitement-routing.module';

import { AjouterSanteNomVeterinaireTraitementPage } from './ajouter-sante-nom-veterinaire-traitement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterSanteNomVeterinaireTraitementPageRoutingModule
  ],
  declarations: [AjouterSanteNomVeterinaireTraitementPage]
})
export class AjouterSanteNomVeterinaireTraitementPageModule {}
