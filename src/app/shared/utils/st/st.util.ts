import { Injectable } from '@angular/core';
import { STColumn, STColumnBadge, STColumnTag } from '@delon/abc/st';
import { EnumService } from '../../components/enum/enum.service';
import { EnumGroup } from '../../components/enum/enum.types';

export interface STUtilOption {
  column?: STColumn;
  filter?: boolean;
}

@Injectable({ providedIn: 'root' })
export class STUtil {
  constructor(private enumSrv: EnumService) {}

  private genFilter(filter: boolean, data: EnumGroup): STColumn {
    if (!filter) {
      return null;
    }
    return {
      filter: {
        menus: Object.keys(data).map((key) => ({ value: key, text: data[key].name })),
        multiple: false,
      },
    };
  }

  gen(type: string, opt?: STUtilOption): STColumn {
    opt = { ...opt };
    const data = this.enumSrv.get(type);
    const enumData: { [key: string]: string } = {};
    Object.keys(data).forEach((key) => {
      enumData[key] = data[key].name;
    });
    return { title: '类型', index: 'status', type: 'enum', enum: enumData, ...this.genFilter(opt.filter, data), ...opt?.column };
  }

  genTag(type: string, opt?: STUtilOption): STColumn {
    opt = { ...opt };
    const data = this.enumSrv.get(type);
    const tag: STColumnTag = {};
    Object.keys(data).forEach((key) => {
      tag[key] = { text: data[key].name };
    });
    return { title: '类型', index: 'status', type: 'tag', tag, ...this.genFilter(opt.filter, data), ...opt?.column };
  }

  genBadge(type: string, opt?: STUtilOption): STColumn {
    opt = { ...opt };
    const data = this.enumSrv.get(type);
    const badge: STColumnBadge = {};
    Object.keys(data).forEach((key) => {
      badge[key] = { text: data[key].name, color: data[key].color as any };
    });
    return { title: '状态', index: 'status', type: 'badge', badge, ...this.genFilter(opt.filter, data), ...opt?.column };
  }
}
