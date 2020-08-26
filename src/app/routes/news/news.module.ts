import { Inject, NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { HomeComponent } from './home/home.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsLayoutComponent } from './_layout/layout.component';

const COMPONENTS = [HomeComponent];
const COMPONENTS_NOROUNT = [NewsLayoutComponent];

@NgModule({
  imports: [SharedModule, NewsRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
  entryComponents: COMPONENTS_NOROUNT,
})
export class NewsModule {
  constructor() {}
}
