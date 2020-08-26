import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { YunProductService } from '@brand';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  constructor(
    private productSrv: YunProductService,
    private http: _HttpClient,
    public msg: NzMessageService,
    private cdr: ChangeDetectorRef,
  ) {}
  @ViewChild('distannce1') distannce1: ElementRef;
  // get products() {
  //   return this.productSrv.data;
  // }
  i: any;
  // tslint:disable-next-line: member-ordering
  array: any[] = [
    {
      id: 1,
      src: 'http://www.weisiauto.com/html/images/01.jpg',
    },
    {
      id: 2,
      src: 'http://www.weisiauto.com/html/images/02.jpg',
    },
    {
      id: 3,
      src: 'http://www.weisiauto.com/html/images/03.jpg',
    },
    {
      id: 4,
      src: 'http://www.weisiauto.com/html/images/04.jpg',
    },
  ];
  products = [
    {
      name: '',
      products: [
        {
          name: '公司简介',
          description: '好好好  好用!!!',
          url: 'introduce',
        },
        {
          name: '新闻动态',
          description: '好好好  好用!!!',
          url: 'news',
        },
        {
          name: '产品优势',
          description: '好好好  好用!!!',
          url: 'device',
        },
        {
          name: '售后服务',
          description: '好好好  好用!!!',
          url: 'service',
        },
      ],
    },
    {
      name: '产品中心',
      products: [
        {
          name: '设备1',
          description: '好好好  好用!!!',
        },
        {
          name: '设备2',
          description: '好好好  好用!!!',
        },
        {
          name: '设备3',
          description: '好好好  好用!!!',
        },
        {
          name: '设备4',
          description: '好好好  好用!!!',
        },
      ],
    },
  ];
  next() {
    console.log('next');
  }
  goDistance(): void {
    this.distannce1.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  }

  ngOnInit(): void {
    this.productSrv.getData().subscribe(() => this.cdr.detectChanges());
    this.http.get('/yun/dashboard').subscribe((res) => {
      this.i = res;
      console.log(this.i);
      this.cdr.detectChanges();
    });
  }
}
