import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'storageUnit' })
export class StorageUnitPipe implements PipeTransform {
  transform(bit: number, type: 'kb' | 'mb' | 'gb' = 'gb', digits = 3): string {
    switch (type) {
      case 'kb':
        return (bit / 1024).toFixed(digits);
      case 'mb':
        return (bit / 1024 / 1024).toFixed(digits);
      case 'gb':
        return (bit / 1024 / 1024 / 1024).toFixed(digits);
      default:
        return bit.toFixed(digits);
    }
  }
}
