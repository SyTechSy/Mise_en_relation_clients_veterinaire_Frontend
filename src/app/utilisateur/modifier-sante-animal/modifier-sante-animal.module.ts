import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierSanteAnimalPageRoutingModule } from './modifier-sante-animal-routing.module';

import { ModifierSanteAnimalPage } from './modifier-sante-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierSanteAnimalPageRoutingModule
  ],
  declarations: [ModifierSanteAnimalPage]
})
export class ModifierSanteAnimalPageModule {}
