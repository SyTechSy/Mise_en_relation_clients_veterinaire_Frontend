import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesRdvPageRoutingModule } from './mes-rdv-routing.module';

import { MesRdvPage } from './mes-rdv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesRdvPageRoutingModule
  ],
  declarations: [MesRdvPage]
})
export class MesRdvPageModule {}
