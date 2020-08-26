import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassportForgetComponent } from './forget/forget.component';
import { PassportLoginComponent } from './login/login.component';
import { PassportRegisterComponent } from './register/register.component';
import { PassportLayoutComponent } from './_layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: PassportLayoutComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: PassportLoginComponent },
      { path: 'forget', component: PassportForgetComponent },
      { path: 'register', component: PassportRegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PassportRoutingModule {}
