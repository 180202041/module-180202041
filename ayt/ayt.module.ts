import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AytPageRoutingModule } from './ayt-routing.module';

import { AytPage } from './ayt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AytPageRoutingModule
  ],
  declarations: [AytPage]
})
export class AytPageModule {}
