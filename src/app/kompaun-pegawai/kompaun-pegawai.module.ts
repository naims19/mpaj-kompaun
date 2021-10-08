import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KompaunPegawaiPageRoutingModule } from './kompaun-pegawai-routing.module';

import { KompaunPegawaiPage } from './kompaun-pegawai.page';

import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KompaunPegawaiPageRoutingModule,
    CalendarModule
  ],
  declarations: [KompaunPegawaiPage]
})
export class KompaunPegawaiPageModule {}
