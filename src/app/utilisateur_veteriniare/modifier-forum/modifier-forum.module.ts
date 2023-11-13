import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModifierForumPageRoutingModule } from './modifier-forum-routing.module';

import { ModifierForumPage } from './modifier-forum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModifierForumPageRoutingModule
  ],
  declarations: [ModifierForumPage]
})
export class ModifierForumPageModule {}
