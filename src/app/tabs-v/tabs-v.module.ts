import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsVPageRoutingModule } from './tabs-v-routing.module';

import { TabsVPage } from './tabs-v.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsVPageRoutingModule
  ],
  declarations: [TabsVPage]
})
export class TabsVPageModule {}
