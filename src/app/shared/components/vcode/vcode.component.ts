import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { InputNumber } from '@delon/util';

@Component({
  selector: 'vcode, [vcode]',
  templateUrl: './vcode.component.html',
  styleUrls: ['./vcode.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VCodeComponent implements OnChanges, OnDestroy {
  private interval$: any;
  count = 0;
  loading = false;

  @Input() @InputNumber() during = 60;
  @Input() mobile: string;
  @Input() url = '/yun/user/getcode';
  @Input() type: 'sms' | 'voice' = 'sms';

  constructor(private cdr: ChangeDetectorRef, private http: _HttpClient) {}

  send() {
    this.loading = true;
    this.cdr.detectChanges();
    this.http
      .post(this.url, { mobile: this.mobile, type: this.type })
      .subscribe(() => {
        this.begin();
      })
      .add(() => {
        this.loading = false;
        this.cdr.detectChanges();
      });
  }

  private begin(): void {
    this.count = +this.during;
    this.interval$ = setInterval(() => {
      this.count -= 1;
      if (this.count <= 0) {
        this.end();
      }
      this.cdr.detectChanges();
    }, 1000);
  }

  private end(): void {
    if (this.interval$) {
      clearInterval(this.interval$);
    }
  }

  ngOnChanges() {
    this.cdr.detectChanges();
  }

  ngOnDestroy() {
    this.end();
  }
}
