import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilModificationPageRoutingModule } from './profil-modification-routing.module';

import { ProfilModificationPage } from './profil-modification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilModificationPageRoutingModule
  ],
  declarations: [ProfilModificationPage]
})
export class ProfilModificationPageModule {}
