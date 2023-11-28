import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierSuiviAnimauxPageRoutingModule } from './modifier-suivi-animaux-routing.module';

import { ModifierSuiviAnimauxPage } from './modifier-suivi-animaux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierSuiviAnimauxPageRoutingModule
  ],
  declarations: [ModifierSuiviAnimauxPage]
})
export class ModifierSuiviAnimauxPageModule {}
