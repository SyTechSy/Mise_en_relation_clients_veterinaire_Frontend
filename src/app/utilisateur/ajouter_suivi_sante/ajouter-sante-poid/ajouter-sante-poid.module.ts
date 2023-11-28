import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterSantePoidPageRoutingModule } from './ajouter-sante-poid-routing.module';

import { AjouterSantePoidPage } from './ajouter-sante-poid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterSantePoidPageRoutingModule
  ],
  declarations: [AjouterSantePoidPage]
})
export class AjouterSantePoidPageModule {}
