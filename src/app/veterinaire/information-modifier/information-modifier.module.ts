import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationModifierPageRoutingModule } from './information-modifier-routing.module';

import { InformationModifierPage } from './information-modifier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationModifierPageRoutingModule
  ],
  declarations: [InformationModifierPage]
})
export class InformationModifierPageModule {}
