import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterForumPageRoutingModule } from './ajouter-forum-routing.module';

import { AjouterForumPage } from './ajouter-forum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterForumPageRoutingModule
  ],
  declarations: [AjouterForumPage]
})
export class AjouterForumPageModule {}
