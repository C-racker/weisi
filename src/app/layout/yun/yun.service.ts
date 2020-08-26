import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type BrandNotifyType = 'mobile' | 'theme';

export interface BrandNotifyResult {
  type: BrandNotifyType;
  /** when type is `theme` */
  theme?: string;
}

@Injectable({ providedIn: 'root' })
export class BrandService implements OnDestroy {
  private notify$ = new BehaviorSubject<BrandNotifyResult>(null);
  private _isMobile = false;
  private _theme = 'default';

  get notify() {
    return this.notify$.asObservable();
  }

  get isMobile() {
    return this._isMobile;
  }

  get theme() {
    return this._theme;
  }

  constructor(bm: BreakpointObserver) {
    const mobileMedia = 'only screen and (max-width: 1199.99px)';
    bm.observe(mobileMedia).subscribe((state) => this.checkMedia(state.matches));
    this.checkMedia(bm.isMatched(mobileMedia));
    this._theme = localStorage.getItem('site-theme') || 'default';
  }

  notifyTheme(theme: string): void {
    this._theme = theme;
    this.notify$.next({ type: 'theme', theme });
  }

  private checkMedia(value: boolean) {
    this._isMobile = value;
    this.notify$.next({ type: 'mobile' });
  }

  ngOnDestroy(): void {
    this.notify$.unsubscribe();
  }
}
