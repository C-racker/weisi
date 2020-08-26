import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { _HttpClient } from '@delon/theme';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'account-security-pwd',
  templateUrl: './pwd.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountSecurityPwdComponent implements OnInit {
  i: any;
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private modalRef: NzModalRef, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      old: [null, [Validators.required]],
      pwd: [null, [Validators.required]],
      repwd: [null, [Validators.required, this.pwdConfirmign.bind(this)]],
    });
    this.form.patchValue(this.i);
  }

  private pwdConfirmign(c: FormControl): { notEqual: boolean } {
    if (this.form && this.form.get('pwd').value !== c.value) {
      return { notEqual: true };
    }
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
