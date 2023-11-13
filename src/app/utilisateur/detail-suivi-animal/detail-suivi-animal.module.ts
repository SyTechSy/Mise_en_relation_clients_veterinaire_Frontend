import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSuiviAnimalPageRoutingModule } from './detail-suivi-animal-routing.module';

import { DetailSuiviAnimalPage } from './detail-suivi-animal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSuiviAnimalPageRoutingModule
  ],
  declarations: [DetailSuiviAnimalPage]
})
export class DetailSuiviAnimalPageModule {}
