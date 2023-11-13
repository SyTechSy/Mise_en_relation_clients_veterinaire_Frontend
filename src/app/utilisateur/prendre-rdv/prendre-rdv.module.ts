import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrendreRdvPageRoutingModule } from './prendre-rdv-routing.module';

import { PrendreRdvPage } from './prendre-rdv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrendreRdvPageRoutingModule
  ],
  declarations: [PrendreRdvPage]
})
export class PrendreRdvPageModule {}
