import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterSanteNomMaladiePageRoutingModule } from './ajouter-sante-nom-maladie-routing.module';

import { AjouterSanteNomMaladiePage } from './ajouter-sante-nom-maladie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterSanteNomMaladiePageRoutingModule
  ],
  declarations: [AjouterSanteNomMaladiePage]
})
export class AjouterSanteNomMaladiePageModule {}
