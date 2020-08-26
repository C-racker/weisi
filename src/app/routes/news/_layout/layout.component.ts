import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { PageNav } from '@brand';
import { _HttpClient } from '@delon/theme';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'news-layout',
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsLayoutComponent implements OnDestroy {
  @ViewChild('distannce1') distannce1: ElementRef;
  goDistance(): void {
    this.distannce1.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }
  constructor() {}
  ngOnDestroy(): void {}
}
