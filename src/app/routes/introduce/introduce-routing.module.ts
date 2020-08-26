import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroduceLayoutComponent } from './_layout/layout.component';

const routes: Routes = [{ path: '', component: IntroduceLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroduceRoutingModule {}
