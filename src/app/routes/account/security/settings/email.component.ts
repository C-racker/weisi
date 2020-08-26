import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { _HttpClient } from '@delon/theme';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'account-security-email',
  templateUrl: './email.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountSecurityEmailComponent implements OnInit {
  i: any;
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private modalRef: NzModalRef, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      pwd: [null, [Validators.required]],
    });
  }

  save() {
    this.loading = true;
    this.cdr.detectChanges();
    // TODO: Mock http request
    setTimeout(() => {
      this.modalRef.close(this.i);
    }, 1000);
  }

  close() {
    this.modalRef.close();
  }
}
