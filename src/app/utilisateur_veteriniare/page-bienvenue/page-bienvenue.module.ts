import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageBienvenuePageRoutingModule } from './page-bienvenue-routing.module';

import { PageBienvenuePage } from './page-bienvenue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageBienvenuePageRoutingModule
  ],
  declarations: [PageBienvenuePage]
})
export class PageBienvenuePageModule {}
