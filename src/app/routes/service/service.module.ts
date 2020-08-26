import { Inject, NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { HomeComponent } from './home/home.component';

import { ServiceRoutingModule } from './service-routing.module';
import { ServiceLayoutComponent } from './_layout/layout.component';
const COMPONENTS = [HomeComponent];
const COMPONENTS_NOROUNT = [ServiceLayoutComponent];

@NgModule({
  imports: [SharedModule, ServiceRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class ServiceModule {
  constructor() {}
}
