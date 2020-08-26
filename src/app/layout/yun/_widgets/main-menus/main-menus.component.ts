import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'topbar-main-menus',
  templateUrl: './main-menus.component.html',
  host: {
    '[class.alain-yun__topbar-menus]': `true`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutTopbarMainMenusComponent {}
