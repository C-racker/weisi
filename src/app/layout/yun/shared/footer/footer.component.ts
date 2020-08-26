import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  host: {
    '[class.alain-yun__footer]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFooterComponent {}
