import { Inject, NgModule } from '@angular/core';
import { I18NService } from '@core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { SharedModule } from '@shared';

import { IntroduceHomeComponent } from './home/home.component';
import { IntroduceRoutingModule } from './introduce-routing.module';
import { IntroduceLayoutComponent } from './_layout/layout.component';

const COMPONENTS = [IntroduceHomeComponent];
const COMPONENTS_NOROUNT = [IntroduceLayoutComponent];
@NgModule({
  imports: [SharedModule, IntroduceRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class IntroduceModule {}
