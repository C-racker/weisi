import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YunLayoutSimpleComponent, YunLayoutSimpleOptions } from '@brand';
import { SMSHomeComponent } from './home/home.component';
import { SMSSettingComponent } from './setting/setting.component';

const routes: Routes = [
  {
    path: '',
    component: YunLayoutSimpleComponent,
    data: {
      leftNavs: [
        { i18n: 'sms.menu.home', router: '/sms/home' },
        { i18n: 'sms.menu.templates', router: '/sms/templates', disabled: true },
        { i18n: 'sms.menu.import', router: '/sms/import', disabled: true },
        { i18n: 'sms.menu.report', router: '/sms/report', disabled: true },
        { i18n: 'sms.menu.setting', router: '/sms/setting' },
      ],
    } as YunLayoutSimpleOptions,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: SMSHomeComponent },
      { path: 'setting', component: SMSSettingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SMSRoutingModule {}
