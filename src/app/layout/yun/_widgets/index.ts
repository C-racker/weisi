import { LayoutTopbarDropdownDirective } from './dropdown/dropdown.directive';
import { LayoutTopbarMainMenusComponent } from './main-menus/main-menus.component';
import { LayoutTopbarMainWidgetsComponent } from './main-widgets/main-widgets.component';
import { LayoutTopbarMessageComponent } from './message/message.component';
import { LayoutProductCategoryComponent } from './product-category/product-category.component';
import { LayoutTopbarComponent } from './topbar/topbar.component';

export const YUN_WIDGETS = [
  LayoutTopbarDropdownDirective,
  LayoutTopbarComponent,
  LayoutProductCategoryComponent,
  LayoutTopbarMessageComponent,
  LayoutTopbarMainMenusComponent,
  LayoutTopbarMainWidgetsComponent,
];
