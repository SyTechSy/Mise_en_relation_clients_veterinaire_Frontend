import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterSuiviAnimauxPageRoutingModule } from './ajouter-suivi-animaux-routing.module';

import { AjouterSuiviAnimauxPage } from './ajouter-suivi-animaux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterSuiviAnimauxPageRoutingModule
  ],
  declarations: [AjouterSuiviAnimauxPage]
})
export class AjouterSuiviAnimauxPageModule {}
