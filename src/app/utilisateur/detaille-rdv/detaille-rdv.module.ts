import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailleRdvPageRoutingModule } from './detaille-rdv-routing.module';

import { DetailleRdvPage } from './detaille-rdv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailleRdvPageRoutingModule
  ],
  declarations: [DetailleRdvPage]
})
export class DetailleRdvPageModule {}
