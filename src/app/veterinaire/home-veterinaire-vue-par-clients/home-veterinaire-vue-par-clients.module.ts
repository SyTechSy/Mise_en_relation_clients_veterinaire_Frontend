import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeVeterinaireVueParClientsPageRoutingModule } from './home-veterinaire-vue-par-clients-routing.module';

import { HomeVeterinaireVueParClientsPage } from './home-veterinaire-vue-par-clients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeVeterinaireVueParClientsPageRoutingModule
  ],
  declarations: [HomeVeterinaireVueParClientsPage]
})
export class HomeVeterinaireVueParClientsPageModule {}
