import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilDetaillePageRoutingModule } from './profil-detaille-routing.module';

import { ProfilDetaillePage } from './profil-detaille.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilDetaillePageRoutingModule
  ],
  declarations: [ProfilDetaillePage]
})
export class ProfilDetaillePageModule {}
