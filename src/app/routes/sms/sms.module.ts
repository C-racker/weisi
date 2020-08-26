import { Inject, NgModule } from '@angular/core';
import { I18NService } from '@core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { SharedModule } from '@shared';
import { default as en_US } from './_i18n/en-US';
import { default as zh_CN } from './_i18n/zh-CN';
import { default as zh_TW } from './_i18n/zh-TW';

import { SMSHomeComponent } from './home/home.component';
import { SMSSettingComponent } from './setting/setting.component';
import { SMSRoutingModule } from './sms-routing.module';

const COMPONENTS = [SMSHomeComponent, SMSSettingComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, SMSRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class SMSModule {
  constructor(@Inject(ALAIN_I18N_TOKEN) i18n: I18NService) {
    i18n.load('zh-CN', zh_CN);
    i18n.load('zh-TW', zh_TW);
    i18n.load('en-US', en_US);
  }
}
