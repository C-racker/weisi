import { Location } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { I18NService } from '@core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { InputBoolean } from '@delon/util';
import { Subscription } from 'rxjs';
import { delay, filter } from 'rxjs/operators';
import { PageNav, PageNavBack, PageRouteData } from './page.types';

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  host: {
    '[class.container]': 'true',
    '[class.alain-yun__page]': 'true',
    '[class.alain-yun__page-backbar-disabled]': 'backDisabled',
    '[class.alain-yun__page-hasback]': '_back && _back.title',
    '[class.alain-yun__page-hasnav]': '_showNav && navData.length > 0',
    '[class.alain-yun__page-compact]': 'compact',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPageComponent implements OnInit, OnChanges, OnDestroy {
  private router$: Subscription;
  _tit: string | TemplateRef<void>;
  _back: PageNavBack;
  _showNav = true;
  _nav: PageNav[] | TemplateRef<void>;
  navData: PageNav[] = [];
  navTpl: TemplateRef<void>;
  @Input() back: PageNavBack;
  @Input() tit: string | TemplateRef<void> | null;
  @Input() @InputBoolean() showTit = true;
  @Input() subTit: string | TemplateRef<void>;
  @Input() extra: string | TemplateRef<void>;
  @Input() header: TemplateRef<void>;
  @Input() nav: PageNav[] | TemplateRef<void>;
  @Input() @InputBoolean() showNav: boolean;
  @Input() @InputBoolean() compact = false;

  private get urlData(): PageRouteData {
    return this.route.snapshot.firstChild?.data || {};
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.router$ = this.router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        delay(100),
      )
      .subscribe(() => this.refresh());
    this.refresh();
  }

  private refresh(): void {
    this.refreshTitle();
    this.refreshBack();
    this.refreshNav();
    this.cdr.detectChanges();
  }

  private refreshTitle(): void {
    // From input
    if (this.tit) {
      this._tit = this.tit;
      return;
    }
    // From route data
    let title = '';
    const urlData = this.urlData;
    if (urlData.i18n) {
      title = this.i18n.fanyi(urlData.i18n);
    } else if (urlData.title) {
      title = urlData.title;
    }
    // From nav
    if (!title && this.navData) {
      const navItem = this.navData.find((w) => w.url === this.router.url);
      if (navItem) {
        title = navItem.i18n ? this.i18n.fanyi(navItem.i18n) : navItem.title;
      }
    }

    this._tit = title;
  }

  private refreshNav(): void {
    this._showNav = this.showNav != null ? this.showNav : this.urlData.pageShowNav !== false;
    if (Array.isArray(this.nav)) {
      const url = this.router.url;
      const fn = (list: PageNav[], parent?: PageNav) => {
        for (const i of list) {
          if (i.i18n) {
            i.title = this.i18n.fanyi(i.i18n);
          }
          i.selected = i.url === url;
          if (parent && !parent._subText) {
            parent._subText = i.selected ? i.title : null;
          }
          if (Array.isArray(i.children)) {
            fn(i.children, i);
          } else {
            i.children = [];
          }
        }
      };
      const copyNav = [...this.nav].map((i) => {
        i._subText = null;
        return i;
      });
      fn(copyNav);
      this.navData = copyNav;
    } else {
      this.navTpl = this.nav;
    }
  }

  private refreshBack(): void {
    const navItem = this.navData ? this.navData.find((w) => w.url === this.router.url) : null;
    const back: PageNavBack = {
      ...navItem?.back,
      ...this.urlData.pageBack,
      ...this.back,
    };
    if (back.i18n) {
      back.title = this.i18n.fanyi(back.i18n);
    }
    this._back = back;
  }

  toBack() {
    const { disabled, url } = this.back;
    if (disabled) {
      return false;
    }

    if (url) {
      this.router.navigateByUrl(url);
    } else {
      this.location.back();
    }
  }

  to(i: PageNav) {
    if (i.disabled || i.children.length > 0) {
      return;
    }
    if (/^https?:\/\//g.test(i.url)) {
      window.open(i.url);
      return;
    }
    this.router.navigateByUrl(i.url);
  }

  ngOnChanges(): void {
    this.refresh();
  }

  ngOnDestroy(): void {
    if (this.router$) {
      this.router$.unsubscribe();
    }
  }
}
