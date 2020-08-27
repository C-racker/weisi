import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ACLService } from '@delon/acl';
import { SettingsService, TitleService } from '@delon/theme';
import { NzIconService } from 'ng-zorro-antd/icon';
import { catchError } from 'rxjs/operators';

import { ICONS } from '../../../style-icons';
import { ICONS_AUTO } from '../../../style-icons-auto';
import { EnumService } from '../../shared/components/enum/enum.service';

/**
 * 用于应用启动时
 * 一般用来获取应用所需要的基础数据等
 */
@Injectable()
export class StartupService {
  constructor(
    iconSrv: NzIconService,
    private settingService: SettingsService,
    private aclService: ACLService,
    private httpClient: HttpClient,
    @Inject(DOCUMENT) private doc: any,
    private titleSrv: TitleService,
    private enumSrv: EnumService,
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }

  load(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve) => {
      this.httpClient
        .get(`assets/tmp/app-data.json`)
        .pipe(
          // 接收其他拦截器后产生的异常消息
          catchError((appData) => {
            resolve(null);
            return appData;
          }),
        )
        .subscribe(
          (res: any) => {
            this.titleSrv.suffix = '西安维思自动化工程有限公司';
          },
          () => {},
          () => {
            resolve(null);
            this.removeLoading();
          },
        );
    });
  }

  private removeLoading() {
    const el = this.doc.querySelector('#j-preloader');
    if (el) {
      el.remove();
    }
  }
}
