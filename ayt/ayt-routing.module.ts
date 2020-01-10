import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AytPage } from './ayt.page';

const routes: Routes = [
  {
    path: '',
    component: AytPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AytPageRoutingModule {}
