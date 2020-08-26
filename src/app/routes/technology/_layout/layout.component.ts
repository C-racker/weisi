import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { PageNav } from '@brand';

@Component({
  selector: 'technology-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyLayoutComponent {
  @ViewChild('distannce1') distannce1: ElementRef;
  goDistance(): void {
    this.distannce1.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }
}
