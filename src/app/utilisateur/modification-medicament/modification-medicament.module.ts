import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificationMedicamentPageRoutingModule } from './modification-medicament-routing.module';

import { ModificationMedicamentPage } from './modification-medicament.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificationMedicamentPageRoutingModule
  ],
  declarations: [ModificationMedicamentPage]
})
export class ModificationMedicamentPageModule {}
