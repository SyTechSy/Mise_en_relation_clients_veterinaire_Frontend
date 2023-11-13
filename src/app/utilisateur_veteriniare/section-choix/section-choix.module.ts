import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectionChoixPageRoutingModule } from './section-choix-routing.module';

import { SectionChoixPage } from './section-choix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SectionChoixPageRoutingModule
  ],
  declarations: [SectionChoixPage]
})
export class SectionChoixPageModule {}
