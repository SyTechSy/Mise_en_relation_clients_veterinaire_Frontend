import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterSanteNomTraitementPageRoutingModule } from './ajouter-sante-nom-traitement-routing.module';

import { AjouterSanteNomTraitementPage } from './ajouter-sante-nom-traitement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterSanteNomTraitementPageRoutingModule
  ],
  declarations: [AjouterSanteNomTraitementPage]
})
export class AjouterSanteNomTraitementPageModule {}
