import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { I18NService, UserService } from '@core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { deepMerge } from '@delon/util';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { BrandService } from './yun.service';
import { CLS_SCREEN, YunLayoutSimpleNavItem, YunLayoutSimpleOptions } from './yun.types';

@Component({
  selector: 'layout-yun-simple',
  templateUrl: './yun-simple.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class YunLayoutSimpleComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  private _optinos: YunLayoutSimpleOptions;

  @Input()
  set optinos(val: YunLayoutSimpleOptions) {
    this._optinos = deepMerge(
      {
        leftNavs: [],
        right: {
          navs: [],
          home: true,
          user: true,
        },
      } as YunLayoutSimpleOptions,
      this.route.snapshot.data,
      val,
    );
    this.fixI18n(this._optinos.leftNavs);
    this.fixI18n(this._optinos.right.navs);
  }
  get optinos() {
    return this._optinos;
  }

  get name() {
    return this.userSrv.name;
  }

  private get body(): HTMLBodyElement {
    return this.doc.body;
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private srv: BrandService,
    @Inject(DOCUMENT) private doc: any,
    private userSrv: UserService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
  ) {
    // scroll to top in change page
    router.events
      .pipe(
        takeUntil(this.unsubscribe$),
        filter((ev) => ev instanceof NavigationEnd),
      )
      .subscribe(() => {
        this.scrollToTop();
      });
  }

  private scrollToTop() {
    this.body.scrollTop = 0;
  }

  fixI18n(ls: YunLayoutSimpleNavItem[]): void {
    const fn = (list: YunLayoutSimpleNavItem[]) => {
      for (const i of list) {
        if (i.i18n) {
          i.text = this.i18n.fanyi(i.i18n);
        }
        if (Array.isArray(i.children) && i.children.length > 0) {
          fn(i.children);
        } else {
          i.children = [];
        }
      }
    };
    fn(ls);
  }

  to(i: YunLayoutSimpleNavItem): void {
    if (i.click) {
      i.click();
      return;
    }

    if (!i.router) {
      return;
    }
    if (/^https?/g.test(i.router)) {
      window.open(i.router);
    } else {
      this.router.navigateByUrl(i.router);
    }
  }

  logout() {
    this.userSrv.logout();
    this.router.navigateByUrl(this.userSrv.login_url);
  }

  ngOnInit() {
    this.optinos = null;

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
