import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CooperateLayoutComponent } from './_layout/layout.component';

const routes: Routes = [{ path: '', component: CooperateLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CooperateRoutingModule {
  constructor() {}
}
