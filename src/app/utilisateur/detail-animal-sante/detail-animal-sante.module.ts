import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailAnimalSantePageRoutingModule } from './detail-animal-sante-routing.module';

import { DetailAnimalSantePage } from './detail-animal-sante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailAnimalSantePageRoutingModule
  ],
  declarations: [DetailAnimalSantePage]
})
export class DetailAnimalSantePageModule {}
