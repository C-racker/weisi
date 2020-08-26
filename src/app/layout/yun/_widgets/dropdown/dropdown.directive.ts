import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[topbar-dropdown]:not([data-disabled])',
  host: {
    '[class.alain-yun__topbar-dd]': 'true',
    '[class.alain-yun__topbar-dd-open]': 'open',
    '(click)': 'toggle()',
    '(document:click)': 'close($event)',
  },
  exportAs: 'topbarDropdown',
})
export class LayoutTopbarDropdownDirective {
  open = false;
  // tslint:disable-next-line: no-output-rename
  @Output('topbar-dropdown-change') change = new EventEmitter<boolean>();

  constructor(private el: ElementRef<HTMLElement>) {}

  private notify(): void {
    this.change.emit(this.open);
  }

  toggle(): void {
    this.open = !this.open;
    this.notify();
  }

  close(e: Event): void {
    if (!this.el.nativeElement.contains(e.target as HTMLElement)) {
      this.open = false;
      this.notify();
    }
  }
}
