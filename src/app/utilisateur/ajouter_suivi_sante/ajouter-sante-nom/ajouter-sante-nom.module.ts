import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterSanteNomPageRoutingModule } from './ajouter-sante-nom-routing.module';

import { AjouterSanteNomPage } from './ajouter-sante-nom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterSanteNomPageRoutingModule
  ],
  declarations: [AjouterSanteNomPage]
})
export class AjouterSanteNomPageModule {}
