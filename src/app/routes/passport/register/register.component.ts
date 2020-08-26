import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { _HttpClient } from '@delon/theme';

type RegisterType = 'personal' | 'company';

@Component({
  selector: 'passport-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PassportRegisterComponent implements OnInit {
  loading = false;
  showType: 'choose' | 'form' = 'choose';
  type: RegisterType;
  formStep = 0;
  nameForm: FormGroup;
  mobileForm: FormGroup;
  user: any = {};

  get typeName(): string {
    return this.type === 'personal' ? '个人' : '企业';
  }

  constructor(fb: FormBuilder, route: ActivatedRoute, public http: _HttpClient, private cdr: ChangeDetectorRef) {
    const maps = route.snapshot.queryParamMap;
    if (maps.has('type')) {
      this.type = maps.get('type') as RegisterType;
    }
    this.nameForm = fb.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      ent: [null, [this.checkEnt()]],
    });
    this.mobileForm = fb.group({
      real_name: [null, [Validators.required]],
      mobile: [null, [Validators.required, Validators.pattern(/^1[0-9]{10}$/g)]],
      code: [null, [Validators.required, Validators.pattern(/^[0-9]{4}$/g)]],
    });
  }

  private checkEnt(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      if (this.type === 'personal') {
        return null;
      }
      return !!control.value
        ? Validators.pattern(/^[\u4e00-\u9fa5\(\)\（\）]*$|^[a-zA-Z\(\)\（\） ]*$/)(control)
        : { required: { value: control.value } };
    };
  }

  ngOnInit(): void {
    if (this.type) {
      this.chooseType(this.type);
    }
  }

  private setLoading(status = false) {
    this.loading = status;
    this.cdr.detectChanges();
  }

  chooseType(type: RegisterType) {
    this.type = type;
    this.showType = 'form';
    this.cdr.detectChanges();
  }

  saveName() {
    this.user = { ...this.user, ...this.nameForm.value };
    this.formStep = 1;
    this.cdr.detectChanges();
  }

  get mobile(): string {
    return this.mobileForm.controls.mobile.value;
  }

  get validMobile(): boolean {
    return this.mobileForm.controls.mobile.valid;
  }

  save() {
    this.user = { ...this.user, ...this.mobileForm.value };
    this.setLoading(true);

    this.http
      .post('/yun/user/register?_allow_anonymous=true', this.user)
      .subscribe(() => {
        this.formStep = 2;
        this.cdr.detectChanges();
      })
      .add(() => this.setLoading());
  }
}
