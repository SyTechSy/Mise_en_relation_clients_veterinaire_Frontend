import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierAnimalPageRoutingModule } from './modifier-animal-routing.module';

import { ModifierAnimalPage } from './modifier-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierAnimalPageRoutingModule
  ],
  declarations: [ModifierAnimalPage]
})
export class ModifierAnimalPageModule {}
