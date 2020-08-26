import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@core';

@Component({
  selector: 'topbar-main-widgets',
  templateUrl: './main-widgets.component.html',
  host: {
    '[class.alain-yun__topbar-widget]': `true`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutTopbarMainWidgetsComponent {
  get name() {
    return this.userSrv.name;
  }

  constructor(private router: Router, private userSrv: UserService) {}

  logout() {
    this.userSrv.logout();
    this.router.navigateByUrl(this.userSrv.login_url);
  }
}
