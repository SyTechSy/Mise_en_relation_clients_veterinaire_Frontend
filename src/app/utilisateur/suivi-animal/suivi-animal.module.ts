import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuiviAnimalPageRoutingModule } from './suivi-animal-routing.module';

import { SuiviAnimalPage } from './suivi-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuiviAnimalPageRoutingModule
  ],
  declarations: [SuiviAnimalPage]
})
export class SuiviAnimalPageModule {}
