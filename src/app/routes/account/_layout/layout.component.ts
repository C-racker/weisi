import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { PageNav } from '@brand';
import { _HttpClient } from '@delon/theme';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'account-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountLayoutComponent implements OnDestroy {
  private notify$ = new BehaviorSubject<any>(null);
  private unsubscribe$ = new Subject<void>();
  nav: PageNav[] = [
    { title: '安全设置', url: '/account/security' },
    { title: '用户资料', url: '/account/profile' },
    { title: '操作员', url: '/account/operators', disabled: true },
    { title: '子账号', url: '/account/subaccount', disabled: true, tag: { text: 'NEW' } },
  ];
  i: any;

  get notify(): Observable<any> {
    return this.notify$.asObservable();
  }

  constructor(http: _HttpClient) {
    http
      .get(`/yun/user`)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        this.i = res.user;
        this.notify$.next(res.user);
      });
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
