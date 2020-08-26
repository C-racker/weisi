import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceLayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: DeviceLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeviceRoutingModule {}
