import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationPlannigModifierPageRoutingModule } from './information-plannig-modifier-routing.module';

import { InformationPlannigModifierPage } from './information-plannig-modifier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformationPlannigModifierPageRoutingModule
  ],
  declarations: [InformationPlannigModifierPage]
})
export class InformationPlannigModifierPageModule {}
