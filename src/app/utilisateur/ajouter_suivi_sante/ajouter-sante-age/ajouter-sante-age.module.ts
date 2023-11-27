import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterSanteAgePageRoutingModule } from './ajouter-sante-age-routing.module';

import { AjouterSanteAgePage } from './ajouter-sante-age.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterSanteAgePageRoutingModule
  ],
  declarations: [AjouterSanteAgePage]
})
export class AjouterSanteAgePageModule {}
