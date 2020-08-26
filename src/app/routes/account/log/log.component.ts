import { ChangeDetectionStrategy, Component } from '@angular/core';
import { STColumn } from '@delon/abc/st/table';

@Component({
  selector: 'account-log',
  templateUrl: './log.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountLogComponent {
  url = `/yun/account/log`;
  params = {
    type: '全部',
    start: null,
    end: null,
  };
  types = ['全部', '服务', '登录', '账号', '其他'];

  columns: STColumn[] = [
    { title: '操作时间', index: 'time', type: 'date' },
    { title: '操作类型', index: 'type' },
    { title: '详细描述', index: 'desc' },
    { title: '操作 IP 记录', index: 'ip' },
  ];
}
