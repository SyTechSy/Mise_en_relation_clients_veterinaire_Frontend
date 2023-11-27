import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierSanteSexePageRoutingModule } from './modifier-sante-sexe-routing.module';

import { ModifierSanteSexePage } from './modifier-sante-sexe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierSanteSexePageRoutingModule
  ],
  declarations: [ModifierSanteSexePage]
})
export class ModifierSanteSexePageModule {}
