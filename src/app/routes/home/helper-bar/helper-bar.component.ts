import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

const HELPERBARKEY = 'hbt';
type helperBarType = 'support' | 'refer' | 'ftp' | 'dev' | 'wo' | null;

@Component({
  selector: 'helper-bar',
  templateUrl: './helper-bar.component.html',
  host: {
    '[class.helper-bar]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelperBarComponent implements OnInit, OnDestroy {
  type: helperBarType = null;
  private queryParams$: Subscription;

  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef, @Inject(DOCUMENT) private doc: any) {}

  ngOnInit(): void {
    (this.doc.body as HTMLBodyElement).classList.add('helper-bar__body');
    this.queryParams$ = this.route.queryParams.subscribe((maps) => {
      if (maps[HELPERBARKEY]) {
        this.type = maps[HELPERBARKEY] as helperBarType;
        this.cdr.detectChanges();
      }
    });
  }

  ngOnDestroy(): void {
    if (this.queryParams$) {
      this.queryParams$.unsubscribe();
    }
    (this.doc.body as HTMLBodyElement).classList.remove('helper-bar__body');
  }
}
