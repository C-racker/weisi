import { Inject, NgModule } from '@angular/core';
import { I18NService } from '@core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { SharedModule } from '@shared';
import { default as en_US } from './_i18n/en-US';
import { default as zh_CN } from './_i18n/zh-CN';
import { default as zh_TW } from './_i18n/zh-TW';

import { AccountRoutingModule } from './account-routing.module';
import { AccountLogComponent } from './log/log.component';
import { AccountProfileComponent } from './profile/profile.component';
import { AccountSecurityComponent } from './security/security.component';
import { AccountSecurityEmailComponent } from './security/settings/email.component';
import { AccountSecurityMobileComponent } from './security/settings/mobile.component';
import { AccountSecurityPwdComponent } from './security/settings/pwd.component';
import { AccountLayoutComponent } from './_layout/layout.component';

const COMPONENTS = [AccountLogComponent, AccountSecurityComponent, AccountProfileComponent];
const COMPONENTS_NOROUNT = [
  AccountLayoutComponent,
  AccountSecurityPwdComponent,
  AccountSecurityEmailComponent,
  AccountSecurityMobileComponent,
];

@NgModule({
  imports: [SharedModule, AccountRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class AccountModule {
  constructor(@Inject(ALAIN_I18N_TOKEN) i18n: I18NService) {
    i18n.load('zh-CN', zh_CN);
    i18n.load('zh-TW', zh_TW);
    i18n.load('en-US', en_US);
  }
}
