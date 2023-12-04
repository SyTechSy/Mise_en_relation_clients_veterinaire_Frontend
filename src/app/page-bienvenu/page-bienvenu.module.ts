import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageBienvenuPageRoutingModule } from './page-bienvenu-routing.module';

import { PageBienvenuPage } from './page-bienvenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageBienvenuPageRoutingModule
  ],
  declarations: [PageBienvenuPage]
})
export class PageBienvenuPageModule {}
