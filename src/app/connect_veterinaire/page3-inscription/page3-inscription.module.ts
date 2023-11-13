import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Page3InscriptionPageRoutingModule } from './page3-inscription-routing.module';

import { Page3InscriptionPage } from './page3-inscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Page3InscriptionPageRoutingModule
  ],
  declarations: [Page3InscriptionPage]
})
export class Page3InscriptionPageModule {}
