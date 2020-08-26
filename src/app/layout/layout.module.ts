import { DragDropModule } from '@angular/cdk/drag-drop';
import { Inject, NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { I18NService } from '@core';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { default as en_US } from './yun/_i18n/en-US';
import { default as zh_CN } from './yun/_i18n/zh-CN';
import { default as zh_TW } from './yun/_i18n/zh-TW';

import { YUN_COMPONENTS, YUN_ENTRYCOMPONENTS } from './yun/index';

@NgModule({
  imports: [SharedModule, DragDropModule],
  entryComponents: YUN_ENTRYCOMPONENTS,
  declarations: YUN_COMPONENTS,
  exports: YUN_COMPONENTS,
})
export class LayoutModule {
  constructor(@Inject(ALAIN_I18N_TOKEN) i18n: I18NService) {
    i18n.load('zh-CN', zh_CN);
    i18n.load('zh-TW', zh_TW);
    i18n.load('en-US', en_US);
  }
}
