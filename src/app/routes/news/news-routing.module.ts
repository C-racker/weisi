import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsLayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: NewsLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsRoutingModule {}
