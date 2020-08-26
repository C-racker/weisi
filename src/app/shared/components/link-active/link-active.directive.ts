import { Directive, ElementRef, Input, OnChanges, OnDestroy, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface LinkActiveOptions {
  link?: string;

  cls?: string | string[];

  exact?: boolean;
}

@Directive({
  selector: '[linkActive]',
  exportAs: 'linkActive',
})
export class LinkActiveDirective implements OnChanges, OnDestroy {
  private _opt: LinkActiveOptions;
  private subscription: Subscription;
  private classes: string[];
  private _isActive: boolean;

  @Input('linkActive')
  set opt(val: string | LinkActiveOptions) {
    if (typeof val === 'string') {
      val = { link: val };
    }
    const opt = { exact: false, cls: 'alain-yun__topbar-item-btn-active', ...val };

    const classes = Array.isArray(opt.cls) ? opt.cls : opt.cls.split(' ');
    this.classes = classes.filter((c) => !!c);

    this._opt = opt;
  }

  get isActive() {
    return this._isActive;
  }

  constructor(private router: Router, private element: ElementRef, private renderer: Renderer2) {
    this.subscription = router.events.pipe(filter((e) => !!this._opt && e instanceof NavigationEnd)).subscribe(() => this.update());
  }

  private update() {
    const { link } = this._opt;
    const url = link ? link : this.router.url;
    if (!url || !this.router.navigated) {
      return;
    }

    Promise.resolve().then(() => {
      const hasActiveLinks = this.hasActiveLinks();
      if (this._isActive !== hasActiveLinks) {
        this._isActive = hasActiveLinks;
        this.classes.forEach((c) => {
          if (hasActiveLinks) {
            this.renderer.addClass(this.element.nativeElement, c);
          } else {
            this.renderer.removeClass(this.element.nativeElement, c);
          }
        });
      }
    });
  }

  private hasActiveLinks(): boolean {
    const { link, exact } = this._opt;
    if (!link) {
      return false;
    }
    const currentUrl = this.router.url;
    if (exact) {
      return currentUrl === link;
    }

    return this.router.isActive(link, false);
  }

  ngOnChanges(): void {
    this.update();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
