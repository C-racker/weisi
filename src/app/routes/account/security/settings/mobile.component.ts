import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'account-security-mobile',
  templateUrl: './mobile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountSecurityMobileComponent {
  i: any;
  data: any = {};
  loading = false;

  constructor(private modalRef: NzModalRef, private cdr: ChangeDetectorRef) {}

  save() {
    this.loading = true;
    this.cdr.detectChanges();
    // TODO: Mock http request
    setTimeout(() => {
      this.i.mobile = this.data.mobile;
      this.modalRef.close(this.i);
    }, 1000);
  }

  close() {
    this.modalRef.close();
  }
}
