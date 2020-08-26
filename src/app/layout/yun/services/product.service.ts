import { Inject, Injectable } from '@angular/core';
import { I18NService } from '@core';
import { ALAIN_I18N_TOKEN, MenuIcon, _HttpClient } from '@delon/theme';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface YunProductCategory {
  [key: string]: any;

  name: string;

  id?: string;

  products?: YunProduct[];
}

export interface YunProduct {
  [key: string]: any;

  id: string;

  name: string;

  abbr: string;

  icon?: string | MenuIcon;

  description?: string;

  /** Link for current product */
  link?: string;

  document?: string;

  open?: boolean;
}

@Injectable({ providedIn: 'root' })
export class YunProductService {
  private _orgData: any;
  private _data: YunProductCategory[];

  get data(): YunProductCategory[] {
    return this._data || [];
  }

  getData(): Observable<YunProductCategory[]> {
    return this._data ? of(this._data) : this.getByHttp();
  }

  constructor(private http: _HttpClient, @Inject(ALAIN_I18N_TOKEN) private i18nSrv: I18NService) {}

  private getByHttp(): Observable<YunProductCategory[]> {
    return this.http.get(`./assets/tmp/product-${this.i18nSrv.currentLang}.json`).pipe(
      tap((res: any) => {
        this._orgData = res;
        this._data = this.fixSourceData(res);
      }),
      map(() => this._data),
    );
  }

  private fixSourceData(a: any) {
    const fixProduct = (item: any) => {
      if (!item.products) {
        return;
      }
      const products = (item.products as string[])
        .map((id) => a.products[id] as YunProduct)
        .filter((w) => !!w)
        .map((i) => {
          i.id = i.productId;
          i.abbr = i.abbr || i.name;
          return i;
        });
      return {
        id: item.id,
        name: item.name,
        products,
      };
    };

    const res = [];
    a.categories.forEach((p: any) => {
      res.push(fixProduct(p));
    });
    return res.filter((w) => !!w);
  }
}
