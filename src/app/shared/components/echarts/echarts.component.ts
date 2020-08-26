import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  Output,
} from '@angular/core';
import { BrandService } from '@brand';
import { InputBoolean, InputNumber, LazyService } from '@delon/util';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, filter } from 'rxjs/operators';
import { EChartsConfig, EChartsThemeName } from './echarts.config';

declare var echarts: any;
let firstLoaded = false;

@Component({
  selector: 'echarts',
  template: ` <nz-skeleton *ngIf="!inited"></nz-skeleton> `,
  host: {
    '[class.d-block]': `true`,
    '[style.width.px]': `width`,
    '[style.height.px]': `height`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EChartsComponent implements AfterViewInit, OnChanges, OnDestroy {
  private cog: EChartsConfig;
  private lazy$: Subscription;
  private resize$: Subscription;
  private _chart: any;
  private _options: any;
  private _loading = false;
  inited = false;

  @Input() @InputNumber(null) width: number;
  @Input() @InputNumber() height = 200;
  @Input() @InputNumber() delay = 100;
  @Input() @InputBoolean() preClear = false;
  @Input()
  set loading(val: boolean) {
    this._loading = val;
    this.setLoading();
  }
  @Input() theme = EChartsThemeName;
  @Input()
  set options(val: any) {
    this._options = val;
    this.init();
  }
  @Output() ready = new EventEmitter<any>();
  @Output() chartClick = new EventEmitter<any>();
  @Output() chartDblClick = new EventEmitter<any>();
  @Output() chartContextmenu = new EventEmitter<any>();

  get chart(): any {
    return this._chart;
  }

  constructor(
    private el: ElementRef<HTMLDivElement>,
    defCog: EChartsConfig,
    private lazySrv: LazyService,
    private ngZone: NgZone,
    private brandSrv: BrandService,
  ) {
    this.cog = { ...new EChartsConfig(), ...defCog };
  }

  private initDelay(): void {
    if (this.inited) {
      return;
    }

    this.inited = true;

    if (!firstLoaded && typeof this.cog.echartsLoad === 'function') {
      firstLoaded = true;
      this.cog.echartsLoad((window as any).echarts, this.brandSrv.theme);
    }

    setTimeout(() => this.init(), Math.min(this.delay, 100));
  }

  private init(): void {
    if (!this.inited) {
      return;
    }
    this.ngZone.runOutsideAngular(() => {
      if (this._chart == null) {
        this._chart = echarts.init(this.el.nativeElement, this.theme);
        this.registerEvent('click', this.chartClick)
          .registerEvent('dblclick', this.chartDblClick)
          .registerEvent('contextmenu', this.chartContextmenu);
        this.ngZone.run(() => this.ready.emit(this._chart));
      }

      if (this.preClear) {
        this._chart.clear();
      }
      this._chart.setOption({
        ...this.cog.defaultOptions,
        ...this._options,
      });
      this.setLoading();
    });
  }

  private registerEvent(type: 'click' | 'dblclick' | 'contextmenu', event: EventEmitter<any>): this {
    if (event.observers.length > 0) {
      this._chart.on(type, (params) => this.ngZone.run(() => event.emit(params)));
    }
    return this;
  }

  private installResizeEvent() {
    this.resize$ = fromEvent(window, 'resize')
      .pipe(
        filter(() => !!this._chart),
        debounceTime(200),
      )
      .subscribe(() => this.ngZone.runOutsideAngular(() => this._chart.resize()));
  }

  setLoading(status?: boolean): void {
    if (status != null) {
      this._loading = status;
    }
    if (!this._chart) {
      return;
    }
    if (this._loading) {
      this._chart.showLoading({
        text: '',
        color: '#41abdb',
        textColor: '#41abdb',
        maskColor: this.brandSrv.theme === 'dark' ? 'rgba(31, 31, 31, 0.8)' : 'rgba(255, 255, 255, 0.8)',
      });
    } else {
      this._chart.hideLoading();
    }
  }

  ngAfterViewInit(): void {
    this.installResizeEvent();

    if ((window as any).echarts) {
      this.initDelay();
      return;
    }
    const url = this.cog.lib[0];
    this.lazy$ = this.lazySrv.change
      .pipe(filter((ls) => ls.findIndex((w) => w.path === url) !== -1 && ls[0].status === 'ok'))
      .subscribe(() => this.initDelay());
    this.lazySrv.load(url);
  }

  ngOnChanges(): void {
    this.init();
  }

  ngOnDestroy(): void {
    if (this._chart) {
      this.ngZone.runOutsideAngular(() => this._chart.dispose());
    }
    if (this.resize$) {
      this.resize$.unsubscribe();
    }
    if (this.lazy$) {
      this.lazy$.unsubscribe();
    }
  }
}
