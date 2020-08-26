import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'technology-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyDetailComponent {
  tech: any[] = ['技术标准', '技术支持'];
  constructor() {}
}
