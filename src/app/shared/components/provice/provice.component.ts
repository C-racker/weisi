import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from '@delon/util';

@Component({
  selector: 'provice',
  templateUrl: './provice.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProviceComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProviceComponent implements ControlValueAccessor {
  private onChangeFn: (val: string) => void;
  private onTouchedFn: () => void;
  text: string;
  visible = false;
  data = [
    { name: '华东区', list: ['安徽', '江苏', '上海', '浙江', '福建', '山东', '江西'] },
    { name: '华南区', list: ['广西', '海南', '广东'] },
    { name: '华北区', list: ['北京', '河北', '内蒙古', '山西', '天津'] },
    { name: '华中区', list: ['河南', '湖北', '湖南'] },
    { name: '东北区', list: ['黑龙江', '吉林', '辽宁'] },
    { name: '西南区', list: ['重庆', '贵州', '四川', '西藏', '云南'] },
    { name: '西北区', list: ['甘肃', '宁夏', '青海', '陕西', '新疆'] },
  ];
  @Input() @InputBoolean() all = true;
  @Input() @InputBoolean() global = true;
  @Input() @InputBoolean() disabled = false;

  choose(val: string): void {
    this.refreshText(val);
    this.onChangeFn(val);
    this.visible = false;
  }

  private refreshText(val: string): void {
    this.text = this.global ? (val ? val : '全部') : '请选择';
  }

  writeValue(val: string): void {
    this.refreshText(val);
  }
  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
