import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterSanteRacePageRoutingModule } from './ajouter-sante-race-routing.module';

import { AjouterSanteRacePage } from './ajouter-sante-race.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterSanteRacePageRoutingModule
  ],
  declarations: [AjouterSanteRacePage]
})
export class AjouterSanteRacePageModule {}
