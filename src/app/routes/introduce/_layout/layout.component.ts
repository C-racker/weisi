import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageNav } from '@brand';

import { ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'introduce-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IntroduceLayoutComponent {
  @ViewChild('distannce1') distannce1: ElementRef;
  goDistance(): void {
    this.distannce1.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }
}
