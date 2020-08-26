import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { _HttpClient } from '@delon/theme';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AccountLayoutComponent } from '../_layout/layout.component';

@Component({
  selector: 'account-profile',
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountProfileComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  i: any;
  loading = false;

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

  save() {
    this.loading = true;
    this.cdr.detectChanges();
    // TODO: Mock http request
    setTimeout(() => {
      this.loading = false;
      this.cdr.detectChanges();
    }, 1000);
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
