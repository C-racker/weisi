import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '@core';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.component.html',
  host: {
    '[class.alain-yun__topbar]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutTopbarComponent {
  @Input() menus: TemplateRef<void>;

  get name() {
    return this.userSrv.name;
  }

  constructor(private router: Router, private userSrv: UserService) {}

  logout() {
    this.userSrv.logout();
    this.router.navigateByUrl(this.userSrv.login_url);
  }
}
