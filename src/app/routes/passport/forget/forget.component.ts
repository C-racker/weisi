import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'passport-forget',
  templateUrl: './forget.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PassportForgetComponent {
  error = '';
  loading = false;
  noForm: FormGroup;
  pwdForm: FormGroup;
  showType: 'no' | 'change' = 'no';

  get type(): 'mobile' | 'email' {
    return this.noForm ? this.noForm.controls.type.value : 'mobile';
  }

  get no(): string {
    return this.noForm.controls.no.value;
  }

  constructor(
    fb: FormBuilder,
    private router: Router,
    private msg: NzMessageService,
    public http: _HttpClient,
    private cdr: ChangeDetectorRef,
  ) {
    this.noForm = fb.group({
      type: ['mobile', [Validators.required]],
      no: [null, [Validators.required, this.checkNo()]],
    });
    this.pwdForm = fb.group({
      vcode: [null, [Validators.required, Validators.pattern(/^[0-9]{4}$/)]],
      password: [null, [Validators.required, Validators.pattern(/^ng\-alain\.com$/)]],
      repassword: [null, [Validators.required, Validators.pattern(/^ng\-alain\.com$/)]],
    });
  }

  private checkNo(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      if (this.type === 'email') {
        return Validators.email(control);
      }
      return !/1[0-9]{10}/g.test(control.value) ? { mobile: { value: control.value } } : null;
    };
  }

  private setLoading(status = false) {
    this.loading = status;
    this.cdr.detectChanges();
  }

  getCode() {
    this.error = '';
    this.setLoading(true);

    this.http
      .post('/yun/user/getcode?_allow_anonymous=true', this.noForm.value)
      .subscribe(() => {
        this.showType = 'change';
      })
      .add(() => this.setLoading());
  }

  changePwd() {
    this.error = '';
    this.setLoading(true);

    this.msg.success(`修改成功`);
    this.router.navigateByUrl('/passport');
  }
}
