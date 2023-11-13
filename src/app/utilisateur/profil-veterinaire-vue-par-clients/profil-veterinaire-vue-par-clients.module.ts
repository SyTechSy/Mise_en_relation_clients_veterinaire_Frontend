import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilVeterinaireVueParClientsPageRoutingModule } from './profil-veterinaire-vue-par-clients-routing.module';

import { ProfilVeterinaireVueParClientsPage } from './profil-veterinaire-vue-par-clients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilVeterinaireVueParClientsPageRoutingModule
  ],
  declarations: [ProfilVeterinaireVueParClientsPage]
})
export class ProfilVeterinaireVueParClientsPageModule {}
