import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierSanteRacePageRoutingModule } from './modifier-sante-race-routing.module';

import { ModifierSanteRacePage } from './modifier-sante-race.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierSanteRacePageRoutingModule
  ],
  declarations: [ModifierSanteRacePage]
})
export class ModifierSanteRacePageModule {}
