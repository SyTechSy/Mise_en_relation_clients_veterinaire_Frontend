import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeVeterinairePageRoutingModule } from './home-veterinaire-routing.module';

import { HomeVeterinairePage } from './home-veterinaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeVeterinairePageRoutingModule
  ],
  declarations: [HomeVeterinairePage]
})
export class HomeVeterinairePageModule {}
