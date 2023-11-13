import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterRappelPageRoutingModule } from './ajouter-rappel-routing.module';

import { AjouterRappelPage } from './ajouter-rappel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterRappelPageRoutingModule
  ],
  declarations: [AjouterRappelPage]
})
export class AjouterRappelPageModule {}
