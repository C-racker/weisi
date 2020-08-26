import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BrandService } from '@brand';

@Component({
  selector: 'passport-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  host: {
    '[class.dark]': `theme === 'dark'`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PassportLayoutComponent {
  get theme(): string {
    return this.brandSrv.theme;
  }

  constructor(private brandSrv: BrandService) {}
}
