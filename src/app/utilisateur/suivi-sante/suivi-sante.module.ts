import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuiviSantePageRoutingModule } from './suivi-sante-routing.module';

import { SuiviSantePage } from './suivi-sante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuiviSantePageRoutingModule
  ],
  declarations: [SuiviSantePage]
})
export class SuiviSantePageModule {}
