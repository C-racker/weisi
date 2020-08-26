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
            // 设置所有枚举配置
            this.enumSrv.set(res.enum);
            // 应用信息：包括站点名、描述、年份
            this.settingService.setApp(res.app);
            // 用户信息：包括姓名、头像、邮箱地址
            this.settingService.setUser(res.user);
            // ACL：设置权限为全量
            this.aclService.setFull(true);
            // 设置标题
            this.titleSrv.default = '';
            this.titleSrv.suffix = 'Ng Alain Yun';
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
