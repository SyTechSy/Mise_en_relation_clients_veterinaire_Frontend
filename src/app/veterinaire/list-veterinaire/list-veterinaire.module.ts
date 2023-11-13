import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListVeterinairePageRoutingModule } from './list-veterinaire-routing.module';

import { ListVeterinairePage } from './list-veterinaire.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListVeterinairePageRoutingModule
  ],
  declarations: [ListVeterinairePage]
})
export class ListVeterinairePageModule {}
