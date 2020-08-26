import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { PageFormBtn } from '@brand';
import { DrawerHelper, ModalHelper, _HttpClient } from '@delon/theme';
import { deepCopy } from '@delon/util';
import { NzDrawerOptions, NzDrawerRef } from 'ng-zorro-antd/drawer';
import { ModalOptions, NzModalRef } from 'ng-zorro-antd/modal';
import { CLS_DRAWER_WRAP } from '../const';
import { PageFormSwitch } from './page-form.types';

@Component({
  selector: 'page-form, [page-form]',
  templateUrl: './page-form.component.html',
  host: {
    '[class.alain-yun__pageform]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPageFormComponent {
  _btn: PageFormBtn;
  _switch: PageFormSwitch;
  loading = false;
  @Input() data: any;
  @Input() tit: string | TemplateRef<void>;
  @Input() type: 'btn' | 'switch' | 'custom';
  @Input()
  set btn(val: PageFormBtn) {
    this._btn = { type: 'drawer', btn: '管理', height: 220, size: 'md', hiddenScroll: false, ...val };
  }
  @Input()
  set switch(val: PageFormSwitch) {
    // TODO: the url value just only in test
    this._switch = { method: 'post', dataKeyName: 'value', url: '/yun', ...val };
  }
  @Input() custom: TemplateRef<void>;
  @Output() switchChange = new EventEmitter<boolean>();
  @Output() resultChange = new EventEmitter<any>();
  @ContentChild('modal', { static: false }) modalTpl: TemplateRef<{ $implicit: { data: any }; modalRef: NzModalRef<string> }>;
  @ContentChild('drawer', { static: false }) drawerTpl: TemplateRef<{ $implicit: { data: any }; drawerRef: NzDrawerRef<string> }>;

  constructor(
    private drawerHelper: DrawerHelper,
    private modalHelper: ModalHelper,
    private http: _HttpClient,
    private cdr: ChangeDetectorRef,
  ) {
    this.btn = null;
    this.switch = null;
  }

  open(): void {
    const { type, size, height, hiddenScroll, comp, data } = this._btn;
    if (type === 'drawer') {
      const drawerOptions: NzDrawerOptions = {
        nzPlacement: 'bottom',
        nzHeight: height || 320,
        nzWrapClassName: CLS_DRAWER_WRAP,
        nzBodyStyle: hiddenScroll ? { overflow: 'hidden' } : null,
      };
      this.drawerHelper
        .static(
          null,
          this.drawerTpl || comp,
          { i: deepCopy(data || this.data) },
          {
            drawerOptions,
            footer: null,
          },
        )
        .subscribe((res) => this.resultChange.emit(res));
    } else if (type === 'modal') {
      const modalOptions: ModalOptions = {
        nzWrapClassName: CLS_DRAWER_WRAP,
        nzBodyStyle: hiddenScroll ? { overflow: 'hidden' } : null,
      };
      this.modalHelper
        .createStatic(
          this.modalTpl || comp,
          { i: deepCopy(data || this.data) },
          {
            modalOptions,
            size,
          },
        )
        .subscribe((res) => this.resultChange.emit(res));
    }
  }

  async clickSwitch(val: boolean) {
    this.switchChange.emit(val);
    const { request, url, method, dataKeyName } = this._switch;

    if (!url && !request) {
      return;
    }

    this.loading = true;
    this.cdr.detectChanges();
    let res = false;
    if (request) {
      res = await request(val);
    } else if (url) {
      const body = { [dataKeyName]: val };
      res = await this.http
        .request(method, url, { body })
        .toPromise()
        .then((v) => v as boolean);
    }

    this.loading = false;
    this.cdr.detectChanges();
  }
}
