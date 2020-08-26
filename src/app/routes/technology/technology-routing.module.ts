import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyDetailComponent } from './detail/derail.component';
import { TechnologyLayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: TechnologyLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnologyRoutingModule {}
