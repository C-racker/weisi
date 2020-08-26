import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'quick-help',
  templateUrl: './quick-help.component.html',
  host: {
    '[class.quick-help]': 'true',
    '[class.quick-help-open]': 'open',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickHelpComponent {
  open = false;
}
