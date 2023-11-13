import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page2InscriptionPageRoutingModule } from './page2-inscription-routing.module';

import { Page2InscriptionPage } from './page2-inscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page2InscriptionPageRoutingModule
  ],
  declarations: [Page2InscriptionPage]
})
export class Page2InscriptionPageModule {}
