import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page4InscriptionPageRoutingModule } from './page4-inscription-routing.module';

import { Page4InscriptionPage } from './page4-inscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page4InscriptionPageRoutingModule
  ],
  declarations: [Page4InscriptionPage]
})
export class Page4InscriptionPageModule {}
