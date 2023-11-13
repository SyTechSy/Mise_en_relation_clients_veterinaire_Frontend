import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page5InscriptionPageRoutingModule } from './page5-inscription-routing.module';

import { Page5InscriptionPage } from './page5-inscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page5InscriptionPageRoutingModule
  ],
  declarations: [Page5InscriptionPage]
})
export class Page5InscriptionPageModule {}
