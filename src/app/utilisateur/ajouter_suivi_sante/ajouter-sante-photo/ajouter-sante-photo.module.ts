import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterSantePhotoPageRoutingModule } from './ajouter-sante-photo-routing.module';

import { AjouterSantePhotoPage } from './ajouter-sante-photo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterSantePhotoPageRoutingModule
  ],
  declarations: [AjouterSantePhotoPage]
})
export class AjouterSantePhotoPageModule {}
