import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterSanteNomVaccinPageRoutingModule } from './ajouter-sante-nom-vaccin-routing.module';

import { AjouterSanteNomVaccinPage } from './ajouter-sante-nom-vaccin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterSanteNomVaccinPageRoutingModule
  ],
  declarations: [AjouterSanteNomVaccinPage]
})
export class AjouterSanteNomVaccinPageModule {}
