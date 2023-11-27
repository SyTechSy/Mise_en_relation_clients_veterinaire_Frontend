import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierSanteAgePageRoutingModule } from './modifier-sante-age-routing.module';

import { ModifierSanteAgePage } from './modifier-sante-age.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierSanteAgePageRoutingModule
  ],
  declarations: [ModifierSanteAgePage]
})
export class ModifierSanteAgePageModule {}
