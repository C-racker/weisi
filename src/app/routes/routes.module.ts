import { NgModule } from '@angular/core';

import { SharedModule } from '@shared';
import { CallbackComponent } from './callback/callback.component';
// dashboard pages
import { DASHBOARD_COOMPONENTS } from './home';
import { RouteRoutingModule } from './routes-routing.module';
import { AComponent } from './devices/a/a.component';
const COMPONENTS = [...DASHBOARD_COOMPONENTS, CallbackComponent];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [SharedModule, RouteRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT, AComponent],
  entryComponents: COMPONENTS_NOROUNT,
})
export class RoutesModule {}
