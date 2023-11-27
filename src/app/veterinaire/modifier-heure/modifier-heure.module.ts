import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierHeurePageRoutingModule } from './modifier-heure-routing.module';

import { ModifierHeurePage } from './modifier-heure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierHeurePageRoutingModule
  ],
  declarations: [ModifierHeurePage]
})
export class ModifierHeurePageModule {}
