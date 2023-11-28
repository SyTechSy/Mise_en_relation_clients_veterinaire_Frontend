import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterSanteDescriptionPageRoutingModule } from './ajouter-sante-description-routing.module';

import { AjouterSanteDescriptionPage } from './ajouter-sante-description.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterSanteDescriptionPageRoutingModule
  ],
  declarations: [AjouterSanteDescriptionPage]
})
export class AjouterSanteDescriptionPageModule {}
