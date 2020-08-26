import { Inject, NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { TechnologyDetailComponent } from './detail/derail.component';
import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyLayoutComponent } from './_layout/layout.component';

const COMPONENTS = [TechnologyDetailComponent];
const COMPONENTS_NOROUNT = [TechnologyLayoutComponent];

@NgModule({
  imports: [SharedModule, TechnologyRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class TechnologyModule {
  constructor() {}
}
