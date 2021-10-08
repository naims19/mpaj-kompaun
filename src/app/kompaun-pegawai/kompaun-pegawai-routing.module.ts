import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KompaunPegawaiPage } from './kompaun-pegawai.page';

const routes: Routes = [
  {
    path: '',
    component: KompaunPegawaiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KompaunPegawaiPageRoutingModule {}
