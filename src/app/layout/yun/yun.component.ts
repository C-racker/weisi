import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, NavigationError, RouteConfigLoadStart, Router } from '@angular/router';
import { ReuseTabService } from '@delon/abc/reuse-tab';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { BrandService } from './yun.service';
import { CLS_SCREEN } from './yun.types';

@Component({
  selector: 'layout-yun',
  templateUrl: './yun.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YunLayoutComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  isFetching = false;

  private get body(): HTMLBodyElement {
    return this.doc.body;
  }

  constructor(
    router: Router,
    msg: NzMessageService,
    reuseTabSrv: ReuseTabService,
    private srv: BrandService,
    @Inject(DOCUMENT) private doc: any,
    private cdr: ChangeDetectorRef,
  ) {
    // scroll to top in change page
    router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((evt) => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
        this.isFetching = true;
        this.scrollToTop();
        this.cdr.detectChanges();
      }
      if (evt instanceof NavigationError) {
        this.isFetching = false;
        this.cdr.detectChanges();
        msg.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
        return;
      }
      if (!(evt instanceof NavigationEnd)) {
        return;
      }

      this.isFetching = false;
      this.cdr.detectChanges();
      // If have already cached router, should be don't need scroll to top
      if (reuseTabSrv.exists(evt.url)) {
        return;
      }

      this.scrollToTop();
    });
  }

  private scrollToTop() {
    this.body.scrollTop = 0;
  }

  ngOnInit() {
    this.srv.notify
      .pipe(
        takeUntil(this.unsubscribe$),
        filter((w) => w.type === 'mobile'),
      )
      .subscribe(() => {
        this.body.classList.remove(CLS_SCREEN.mobile, CLS_SCREEN.pc);
        this.body.classList.add(this.srv.isMobile ? CLS_SCREEN.mobile : CLS_SCREEN.pc);
      });
  }

  ngOnDestroy() {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
