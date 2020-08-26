import { Pipe, PipeTransform } from '@angular/core';
import { EnumService } from './enum.service';

@Pipe({ name: 'enum' })
export class EnumPipe implements PipeTransform {
  constructor(private enumSrv: EnumService) {}

  transform(key: string | number, type: string): string {
    return this.enumSrv.getItem(type, key)?.name || key.toString();
  }
}
