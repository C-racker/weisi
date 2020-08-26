import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ExistingProvider,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR, Validator } from '@angular/forms';
import { _HttpClient } from '@delon/theme';
import { InputBoolean, InputNumber } from '@delon/util';
import { OnChangeType } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'input-path',
  templateUrl: './input-path.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPathComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputPathComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputPathComponent implements ControlValueAccessor, Validator, OnChanges {
  private onChange: OnChangeType = () => {};
  private error = '';
  private _regex: RegExp;
  private defRegex = {
    url: /(https?:\/\/){0,1}([A-z0-9]+[_\-]?[A-z0-9]+\.)*[A-z0-9]+\-?[A-z0-9]+\.[A-z]{2,}(\/.*)*\/?/g,
    path: /\/[\/\*\.-A-z0-9]*/g,
  };
  value = '';
  @Input() placeholder = '';
  @Input() type: 'url' | 'path' = 'url';
  @Input() regex: RegExp;
  @Input() @InputNumber() max = 50;
  @Input() @InputBoolean() disabled = false;

  constructor(private cdr: ChangeDetectorRef) {
    this.updateRegex();
  }

  private updateRegex(): void {
    this._regex = this.regex ? this.regex : this.defRegex[this.type];
  }

  ngOnChanges(): void {
    this.updateRegex();
  }

  valChange(val: string): void {
    this.error = '';
    const lines = val.split('\n').filter((w) => w.trim().length > 0);
    const validLine = lines.filter((url) => {
      this._regex.lastIndex = 0;
      return this._regex.test(url);
    });
    if (validLine.length > this.max) {
      this.error = 'max';
    }
    if (validLine.length !== lines.length) {
      this.error = 'format';
    }
    this.onChange(val);
  }

  writeValue(value: string): void {
    this.value = value;
    this.cdr.detectChanges();
  }

  registerOnChange(fn: (value: {}) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {}

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.detectChanges();
  }

  validate(_: FormControl) {
    return this.error ? { [this.error]: { valid: true } } : null;
  }
}
