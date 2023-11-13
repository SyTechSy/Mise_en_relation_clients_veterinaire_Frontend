import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiscussionUserVetePageRoutingModule } from './discussion-user-vete-routing.module';

import { DiscussionUserVetePage } from './discussion-user-vete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscussionUserVetePageRoutingModule
  ],
  declarations: [DiscussionUserVetePage]
})
export class DiscussionUserVetePageModule {}
