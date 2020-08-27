import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
@Component({
  selector: 'technology-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologyDetailComponent implements OnInit {
  // 技术专栏

  constructor(public router: ActivatedRoute) {}
  // tslint:disable-next-line: member-ordering
  tech: any[] = [
    {
      id: 1,
      desc: '技术标准',
    },
    {
      id: 2,
      desc: '技术专栏',
    },
  ];
  // tslint:disable-next-line: member-ordering
  techList: any = [
    {
      id: 1,
      list: [
        {
          id: 1,
          desc: '解读新版成套装置标准 GB 7251',
          detail: '',
        },
        {
          id: 2,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 3,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 4,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 5,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 6,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 7,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 8,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 9,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 10,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 11,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 12,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 13,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 14,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 15,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 16,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 17,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 18,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 19,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 20,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 21,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 1,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 1,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 1,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 1,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 1,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 1,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 1,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 1,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 1,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 1,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 1,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 1,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 1,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 1,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
        {
          id: 1,
          desc: 'GB/T 20234.3-2015 电动汽车传导充电用连接装置 直流充电接口',
        },
      ],
    },
    {
      id: 2,
      list: [
        {
          id: 1,
          desc: '低压断路器特性试验台设计',
        },
        {
          id: 2,
          desc: '小型断路器的可靠性指标的研究',
        },
        {
          id: 3,
          desc: 'LC振荡回路开关电器短路开断试验系统',
        },
        {
          id: 4,
          desc: '小型断路器的可靠性指标的研究',
        },
        {
          id: 5,
          desc: '低压断路器特性试验台设计',
        },
        {
          id: 6,
          desc: '小型断路器的可靠性指标的研究',
        },
        {
          id: 7,
          desc: 'LC振荡回路开关电器短路开断试验系统',
        },
        {
          id: 4,
          desc: '小型断路器的可靠性指标的研究',
        },
        {
          id: 1,
          desc: '低压断路器特性试验台设计',
        },
        {
          id: 2,
          desc: '小型断路器的可靠性指标的研究',
        },
        {
          id: 3,
          desc: 'LC振荡回路开关电器短路开断试验系统',
        },
        {
          id: 4,
          desc: '小型断路器的可靠性指标的研究',
        },
        {
          id: 1,
          desc: '低压断路器特性试验台设计',
        },
        {
          id: 2,
          desc: '小型断路器的可靠性指标的研究',
        },
        {
          id: 3,
          desc: 'LC振荡回路开关电器短路开断试验系统',
        },
        {
          id: 4,
          desc: '小型断路器的可靠性指标的研究',
        },
      ],
    },
  ];
  id: any = 1;
  // tslint:disable-next-line: member-ordering
  name: any = '技术标准';
  // tslint:disable-next-line: member-ordering
  time: any = new Date().toLocaleDateString();
  // 每页显示的条数
  pageSize: any = 12;

  pages: any = this.techList[0].list.length;
  // 当前页
  index: any = 1;
  // 对应页码要显示的数据
  dataSetList: any;
  // 跳转详情页  隐藏列表
  isView = true;
  ngOnInit() {
    this.router.queryParams.subscribe((res) => {
      this.id = res.id;
    });
    this.dataSetList = this.techList[0].list.slice((this.index - 1) * this.pageSize, this.index * this.pageSize);
  }
  // 切换页码
  changePage(e) {
    this.index = e; // 1-0  2-12  3-24
    // console.log(this.count, this.pageCount, e);
    console.log(this.id);
    this.dataSetList = this.techList[this.id - 1].list.slice((this.index - 1) * this.pageSize, this.index * this.pageSize);
    // console.log(this.dataSetList);
  }
  // 切换侧边导航切换标题名字
  changeTech(id) {
    // 总条数
    const count: any = this.techList[id - 1].list.length;
    this.pages = count;
    // 总页数
    const pageCount: any = Math.ceil(count / this.pageSize);
    console.log(id);
    this.id = id;
    this.name = this.tech[this.id - 1].desc;
    this.dataSetList = this.techList[this.id - 1].list.slice((this.index - 1) * this.pageSize, this.index * this.pageSize);
    this.isView = true;
  }
  handlePage(id) {
    console.log(id, '--------------');
    this.isView = false;
  }
}
/**
 * 1. 首页展示id为1的导航栏里面的内容
 * 2. 初始化的时候  让他展示ID=1的数据
 * 3. 当切换侧边导航的时候将其自身id传过去进行数据交互,   技术标准=1   技术专栏=2
 * 4.
 */
