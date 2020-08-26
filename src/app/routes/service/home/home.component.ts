import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'service-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  addrs: any[] = [
    {
      name: '重庆子公司',
      addr: '地址：重庆市渝北区龙塔街道黄龙路28号朗俊中心3幢2-1',
      link: '联系人：何女士',
      phone: '电话：18512341285',
      tel: '电话：023-8825739',
      wx: 'http://www.weisiauto.com/uploadfile/2018/0305/20180305030925863.jpg',
    },
    {
      name: '西安总部',
      addr: '地址：西安市未央区草滩六路大普工业园3栋4层',
      link: '联系人：胡经理',
      phone: '手机：18909292360 ',
      tel: '电话：029-65621610-817',
      wx: '',
    },
    {
      name: '上海办事处',
      addr: '地址：上海市青浦区酒龙路99号',
      link: '联系人：魏经理',
      phone: '手机：13812698052',
      tel: '电话：021-59815902-801      ',
      wx: '',
    },
    {
      name: '广州办事处',
      addr: '地址：今古洲经济开发区宝源路',
      link: '联系人：魏经理',
      phone: '手机：13571958840',
      tel: '电话：021-59815902-801      ',
      wx: '',
    },
  ];
  constructor() {}
}
