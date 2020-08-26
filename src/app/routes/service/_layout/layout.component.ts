import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'service-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceLayoutComponent {
  @ViewChild('distannce1') distannce1: ElementRef;
  goDistance(): void {
    this.distannce1.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }
  constructor() {}
}
