import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierRdvPageRoutingModule } from './modifier-rdv-routing.module';

import { ModifierRdvPage } from './modifier-rdv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierRdvPageRoutingModule
  ],
  declarations: [ModifierRdvPage]
})
export class ModifierRdvPageModule {}
