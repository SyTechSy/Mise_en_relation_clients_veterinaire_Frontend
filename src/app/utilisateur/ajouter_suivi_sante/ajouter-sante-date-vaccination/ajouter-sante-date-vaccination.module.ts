import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterSanteDateVaccinationPageRoutingModule } from './ajouter-sante-date-vaccination-routing.module';

import { AjouterSanteDateVaccinationPage } from './ajouter-sante-date-vaccination.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterSanteDateVaccinationPageRoutingModule
  ],
  declarations: [AjouterSanteDateVaccinationPage]
})
export class AjouterSanteDateVaccinationPageModule {}
