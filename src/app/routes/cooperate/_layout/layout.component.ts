import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'cooperate-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CooperateLayoutComponent {
  @ViewChild('distannce1') distannce1: ElementRef;
  goDistance(): void {
    this.distannce1.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }
}
