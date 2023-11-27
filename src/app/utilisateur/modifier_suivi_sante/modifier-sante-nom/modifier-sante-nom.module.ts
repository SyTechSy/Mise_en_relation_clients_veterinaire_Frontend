import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierSanteNomPageRoutingModule } from './modifier-sante-nom-routing.module';

import { ModifierSanteNomPage } from './modifier-sante-nom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierSanteNomPageRoutingModule
  ],
  declarations: [ModifierSanteNomPage]
})
export class ModifierSanteNomPageModule {}
