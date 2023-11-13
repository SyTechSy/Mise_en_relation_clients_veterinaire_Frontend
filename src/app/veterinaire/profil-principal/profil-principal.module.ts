import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilPrincipalPageRoutingModule } from './profil-principal-routing.module';

import { ProfilPrincipalPage } from './profil-principal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilPrincipalPageRoutingModule
  ],
  declarations: [ProfilPrincipalPage]
})
export class ProfilPrincipalPageModule {}
