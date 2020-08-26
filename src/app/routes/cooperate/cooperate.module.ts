import { Inject, NgModule } from '@angular/core';

import { SharedModule } from '@shared';

import { CooperateRoutingModule } from './cooperate-routing.module';
import { HomeComponent } from './home/home.component';
import { CooperateLayoutComponent } from './_layout/layout.component';
const COMPONENTS = [HomeComponent];
const COMPONENTS_NOROUNT = [CooperateLayoutComponent];

@NgModule({
  imports: [SharedModule, CooperateRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class CooperateModule {}
