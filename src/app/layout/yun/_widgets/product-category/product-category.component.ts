import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, OnInit } from '@angular/core';
// import { NavigationEnd, Router } from '@angular/router';
// import { I18NService } from '@core';
// import { ALAIN_I18N_TOKEN } from '@delon/theme';
// import { merge } from 'rxjs';
// import { filter } from 'rxjs/operators';
// import { YunProduct, YunProductService } from '../../services/product.service';

@Component({
  selector: 'product-category',
  templateUrl: './product-category.component.html',
  // host: {
  //   '[class.alain-yun__topbar-item]': 'true',
  //   '[class.alain-yun__topbar-dd]': 'true',
  //   '[class.alain-yun__topbar-dd-left]': 'true',
  // },
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutProductCategoryComponent implements OnInit {
  // item: YunProduct | null;
  // defaultName = this.i18n.fanyi('yun.topbar.pc');
  // name: string;

  // get products() {
  //   return this.productSrv.data;
  // }

  constructor(
    // @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    // private productSrv: YunProductService,
    // private router: Router,
    // private el: ElementRef<HTMLElement>,
    // private cdr: ChangeDetectorRef,
  ) {}

  private refresh(): void {
    // this.item = null;
    // const urlArr = this.router.url.split('/').filter((w) => !!w);
    // const url = urlArr.length >= 2 ? `/${urlArr.slice(0, 2).join('/')}` : null;
    // for (const p of this.products) {
    //   this.item = p.products.find((w) => w.link === url);
    //   if (this.item) {
    //     break;
    //   }
    // }
    // this.openChange(false);
  }

  ngOnInit(): void {
    // merge(this.productSrv.getData(), this.router.events.pipe(filter((e) => e instanceof NavigationEnd))).subscribe(() => this.refresh());
  }

  // openChange(val: boolean): void {
  //   if (val) {
  //     this.name = this.defaultName;
  //   } else {
  //     this.name = this.item ? this.item.name : this.defaultName;
  //   }
  //   this.cdr.detectChanges();
  // }
}
