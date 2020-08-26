import { Inject, NgModule } from '@angular/core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { SharedModule } from '@shared';
import { DeviceRoutingModule } from './device-routing.module';
import { ServiceComponent } from './service/service.component';
import { DeviceLayoutComponent } from './_layout/layout.component';

const COMPONENTS = [ServiceComponent];
const COMPONENTS_NOROUNT = [DeviceLayoutComponent];

@NgModule({
  imports: [SharedModule, DeviceRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class DeviceModule {}
