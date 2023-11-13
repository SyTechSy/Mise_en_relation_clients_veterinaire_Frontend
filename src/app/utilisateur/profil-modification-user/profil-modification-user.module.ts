import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilModificationUserPageRoutingModule } from './profil-modification-user-routing.module';

import { ProfilModificationUserPage } from './profil-modification-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilModificationUserPageRoutingModule
  ],
  declarations: [ProfilModificationUserPage]
})
export class ProfilModificationUserPageModule {}
