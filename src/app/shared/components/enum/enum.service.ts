import { Injectable } from '@angular/core';
import { EnumData, EnumGroup, EnumGroupItem } from './enum.types';

@Injectable({ providedIn: 'root' })
export class EnumService {
  private data: EnumData;

  /**
   * 设置所有枚举数据源
   */
  set(val: EnumData): void {
    this.data = val || {};
  }

  /**
   * 追加数据
   */
  append(val: EnumData): void {
    this.data = {
      ...this.data,
      ...val,
    };
  }

  /**
   * 获取某个类型的枚举数据组
   */
  get(type: string): EnumGroup {
    return this.data[type] || {};
  }

  /**
   * 获取具体枚举项数据
   */
  getItem(type: string, key: string | number): EnumGroupItem {
    return this.get(type)[key] || { name: '' };
  }
}
