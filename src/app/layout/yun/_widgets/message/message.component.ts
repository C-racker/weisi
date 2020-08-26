import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'topbar-message',
  templateUrl: './message.component.html',
  host: {
    '[class.alain-yun__topbar-item]': 'true',
    '[class.alain-yun__topbar-dd]': 'showDD',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutTopbarMessageComponent implements AfterContentInit {
  res: { total: number; list: any[] };
  showDD = false;

  constructor(private http: _HttpClient, private cdr: ChangeDetectorRef) {}

  ngAfterContentInit(): void {
    this.http.get('/yun/message/topbar').subscribe((res) => {
      this.res = res;
      this.showDD = res.total > 0;
      this.cdr.detectChanges();
      // TODO: fixed https://github.com/NG-ZORRO/ng-zorro-antd/issues/5216
      setTimeout(() => this.cdr.detectChanges());
    });
  }
}
