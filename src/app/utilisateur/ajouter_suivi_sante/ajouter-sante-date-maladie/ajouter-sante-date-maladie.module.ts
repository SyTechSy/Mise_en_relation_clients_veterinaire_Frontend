import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterSanteDateMaladiePageRoutingModule } from './ajouter-sante-date-maladie-routing.module';

import { AjouterSanteDateMaladiePage } from './ajouter-sante-date-maladie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterSanteDateMaladiePageRoutingModule
  ],
  declarations: [AjouterSanteDateMaladiePage]
})
export class AjouterSanteDateMaladiePageModule {}
