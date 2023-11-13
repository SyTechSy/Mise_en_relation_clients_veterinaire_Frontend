import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page1InscriptionPageRoutingModule } from './page1-inscription-routing.module';

import { Page1InscriptionPage } from './page1-inscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page1InscriptionPageRoutingModule
  ],
  declarations: [Page1InscriptionPage]
})
export class Page1InscriptionPageModule {}
