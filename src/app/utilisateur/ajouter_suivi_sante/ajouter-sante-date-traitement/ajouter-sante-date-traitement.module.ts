import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterSanteDateTraitementPageRoutingModule } from './ajouter-sante-date-traitement-routing.module';

import { AjouterSanteDateTraitementPage } from './ajouter-sante-date-traitement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterSanteDateTraitementPageRoutingModule
  ],
  declarations: [AjouterSanteDateTraitementPage]
})
export class AjouterSanteDateTraitementPageModule {}
