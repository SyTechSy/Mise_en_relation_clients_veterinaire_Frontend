import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeVeterinairePlanningModificationPageRoutingModule } from './home-veterinaire-planning-modification-routing.module';

import { HomeVeterinairePlanningModificationPage } from './home-veterinaire-planning-modification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeVeterinairePlanningModificationPageRoutingModule
  ],
  declarations: [HomeVeterinairePlanningModificationPage]
})
export class HomeVeterinairePlanningModificationPageModule {}
