import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterHeurePageRoutingModule } from './ajouter-heure-routing.module';

import { AjouterHeurePage } from './ajouter-heure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterHeurePageRoutingModule
  ],
  declarations: [AjouterHeurePage]
})
export class AjouterHeurePageModule {}
