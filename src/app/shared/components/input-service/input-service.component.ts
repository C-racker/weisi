import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  ExistingProvider,
  forwardRef,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { _HttpClient } from '@delon/theme';
import { InputBoolean } from '@delon/util';
import { OnChangeType } from 'ng-zorro-antd/core/types';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'input-service',
  templateUrl: './input-service.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputServiceComponent),
      multi: true,
    },
  ],
  host: {
    '[class.d-inline-block]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputServiceComponent implements OnInit, ControlValueAccessor {
  private searchChange$ = new BehaviorSubject('');
  private onChange: OnChangeType = () => {};
  private calledReady = false;
  list: any[] = [];
  loading = false;
  value = '';
  @Input() allowClear = false;
  @Input() @InputBoolean() disabled = false;
  @Output() ready = new EventEmitter<string>();
  @Output() itemChange = new EventEmitter<any>();

  constructor(private http: _HttpClient, private cdr: ChangeDetectorRef) {}

  onSearch(value: string): void {
    this.loading = true;
    this.searchChange$.next(value);
  }

  valueChange(value: string): void {
    this.onChange(value);
    this.callItemChange();
  }

  private callItemChange(): void {
    this.itemChange.emit(this.list.find((w) => w.name === this.value));
  }

  private callReady(): void {
    if (this.calledReady) {
      return;
    }
    if (!this.allowClear && !this.value) {
      this.value = this.list.length > 0 ? this.list[0].name : '';
    }
    this.ready.emit(this.value);
    this.callItemChange();
  }

  ngOnInit(): void {
    this.searchChange$
      .asObservable()
      .pipe(debounceTime(500))
      .pipe(switchMap((val: string) => this.http.get(`/yun/cdn?q=${val}`)))
      .subscribe((data) => {
        this.list = data.list;
        this.callReady();
        this.loading = false;
        this.cdr.detectChanges();
      });
  }

  writeValue(value: string): void {
    this.value = value;
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
