import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from '@delon/util';
import { NzSafeAny, OnChangeType } from 'ng-zorro-antd/core/types';
import { EnumService } from './enum.service';

@Component({
  selector: 'enum-select, [enum-select]',
  templateUrl: './enum-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EnumSelectComponent),
      multi: true,
    },
  ],
  host: {
    '[style.display]': `'inline-block'`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnumSelectComponent implements ControlValueAccessor {
  @Input()
  set type(key: string) {
    const res = this.enumSrv.get(key);
    this.list = Object.keys(res).map((value) => ({ value, label: res[value].name }));
    if (this.all) {
      this.list.splice(0, 0, { value: '', label: '全部' });
    }
  }
  value: any;
  constructor(private enumSrv: EnumService, private cdr: ChangeDetectorRef) {}
  // tslint:disable-next-line: member-ordering
  val: NzSafeAny;
  // tslint:disable-next-line: member-ordering
  list: Array<{}> = [];
  // tslint:disable-next-line: member-ordering
  @Input() placeholder = '';
  // tslint:disable-next-line: member-ordering
  @Input() @InputBoolean() all = true;
  @Input() @InputBoolean() disabled = false;
  private onChange: OnChangeType = () => {};

  valChange(val: NzSafeAny): void {
    this.onChange(val);
  }

  writeValue(value: NzSafeAny): void {
    this.val = value;
    this.cdr.detectChanges();
  }

  registerOnChange(fn: (value: {}) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(_fn: () => {}): void {}

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.detectChanges();
  }
}
