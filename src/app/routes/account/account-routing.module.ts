import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountLogComponent } from './log/log.component';
import { AccountProfileComponent } from './profile/profile.component';
import { AccountSecurityComponent } from './security/security.component';
import { AccountLayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: AccountLayoutComponent,
    children: [
      { path: '', redirectTo: 'security', pathMatch: 'full' },
      { path: 'security', component: AccountSecurityComponent },
      { path: 'profile', component: AccountProfileComponent },
    ],
  },
  { path: 'log', component: AccountLogComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}
