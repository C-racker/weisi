import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceLayoutComponent } from './_layout/layout.component';

const routes: Routes = [{ path: '', component: ServiceLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRoutingModule {}
