import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterMedicamentPageRoutingModule } from './ajouter-medicament-routing.module';

import { AjouterMedicamentPage } from './ajouter-medicament.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterMedicamentPageRoutingModule
  ],
  declarations: [AjouterMedicamentPage]
})
export class AjouterMedicamentPageModule {}
