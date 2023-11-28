import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterSanteSymptomePageRoutingModule } from './ajouter-sante-symptome-routing.module';

import { AjouterSanteSymptomePage } from './ajouter-sante-symptome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterSanteSymptomePageRoutingModule
  ],
  declarations: [AjouterSanteSymptomePage]
})
export class AjouterSanteSymptomePageModule {}
