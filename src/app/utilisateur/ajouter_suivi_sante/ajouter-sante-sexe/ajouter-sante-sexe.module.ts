import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterSanteSexePageRoutingModule } from './ajouter-sante-sexe-routing.module';

import { AjouterSanteSexePage } from './ajouter-sante-sexe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterSanteSexePageRoutingModule
  ],
  declarations: [AjouterSanteSexePage]
})
export class AjouterSanteSexePageModule {}
