import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PageFormBtn } from '@brand';
import { _HttpClient } from '@delon/theme';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AccountLayoutComponent } from '../_layout/layout.component';
import { AccountSecurityEmailComponent } from './settings/email.component';
import { AccountSecurityMobileComponent } from './settings/mobile.component';
import { AccountSecurityPwdComponent } from './settings/pwd.component';

@Component({
  selector: 'account-security',
  templateUrl: './security.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountSecurityComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  i: any;
  pwdModal: PageFormBtn = {
    type: 'modal',
    comp: AccountSecurityPwdComponent,
  };
  emailModal: PageFormBtn = {
    type: 'modal',
    comp: AccountSecurityEmailComponent,
  };
  mobileModal: PageFormBtn = {
    type: 'modal',
    comp: AccountSecurityMobileComponent,
  };

  constructor(private router: Router, private layoutComp: AccountLayoutComponent, private cdr: ChangeDetectorRef) {}

  private load(): void {
    this.i = null;
    this.cdr.detectChanges();
    this.layoutComp.notify.pipe(takeUntil(this.unsubscribe$)).subscribe((res) => {
      this.i = res;
      this.cdr.detectChanges();
    });
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntil(this.unsubscribe$),
      )
      .subscribe(() => this.load());
    this.load();
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
