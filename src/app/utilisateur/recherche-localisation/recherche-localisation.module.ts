import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheLocalisationPageRoutingModule } from './recherche-localisation-routing.module';

import { RechercheLocalisationPage } from './recherche-localisation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheLocalisationPageRoutingModule
  ],
  declarations: [RechercheLocalisationPage]
})
export class RechercheLocalisationPageModule {}
