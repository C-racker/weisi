import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Random } from 'mockjs';

@Component({
  selector: 'sms-setting',
  templateUrl: './setting.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SMSSettingComponent {
  i = {
    id: 10000,
    token: Random.string('lower', 32, 32),
    ips: '',
  };
}
