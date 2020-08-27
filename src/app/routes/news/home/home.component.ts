import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'news-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  newslist: any[] = [
    {
      id: 1,
      desc: '工业级光耦隔离继电器放大板研发完成',
    },
    {
      id: 1,
      desc: '视频来了！接触器超程开距测试设备介绍与详细使用教程',
    },
    {
      id: 1,
      desc: 'Modbus通讯协议的几种实现方式(LabVIEW)',
    },
    {
      id: 1,
      desc: '工业级光耦隔离继电器放大板研发完成',
    },
    {
      id: 1,
      desc: '工业级光耦隔离继电器放大板研发完成',
    },
    {
      id: 1,
      desc: 'Modbus通讯协议的几种实现方式(LabVIEW)',
    },
    {
      id: 1,
      desc: '工业物联网的应用领域与方向',
    },
    {
      id: 1,
      desc: '工业级光耦隔离继电器放大板研发完成',
    },
    {
      id: 1,
      desc: 'Modbus通讯协议的几种实现方式(LabVIEW)',
    },
    {
      id: 1,
      desc: '工业物联网的应用领域与方向',
    },
    {
      id: 1,
      desc: '工业级光耦隔离继电器放大板研发完成',
    },
    {
      id: 1,
      desc: 'Modbus通讯协议的几种实现方式(LabVIEW)',
    },
    {
      id: 1,
      desc: '工业级光耦隔离继电器放大板研发完成',
    },
    {
      id: 1,
      desc: '工业级光耦隔离继电器放大板研发完成',
    },
    {
      id: 1,
      desc: 'Modbus通讯协议的几种实现方式(LabVIEW)',
    },
    {
      id: 1,
      desc: 'Modbus通讯协议的几种实现方式(LabVIEW)',
    },
    {
      id: 1,
      desc: '工业级光耦隔离继电器放大板研发完成',
    },
    {
      id: 1,
      desc: '工业级光耦隔离继电器放大板研发完成',
    },
    {
      id: 1,
      desc: 'Modbus通讯协议的几种实现方式(LabVIEW)',
    },
    {
      id: 1,
      desc: 'Modbus通讯协议的几种实现方式(LabVIEW)',
    },
    {
      id: 1,
      desc: '工业级光耦隔离继电器放大板研发完成',
    },
    {
      id: 1,
      desc: '工业级光耦隔离继电器放大板研发完成',
    },
    {
      id: 1,
      desc: 'Modbus通讯协议的几种实现方式(LabVIEW)',
    },
    {
      id: 1,
      desc: 'Modbus通讯协议的几种实现方式(LabVIEW)',
    },
    {
      id: 1,
      desc: '工业级光耦隔离继电器放大板研发完成',
    },
    {
      id: 1,
      desc: '工业级光耦隔离继电器放大板研发完成',
    },
    {
      id: 1,
      desc: 'Modbus通讯协议的几种实现方式(LabVIEW)',
    },
  ];
  // 总数据条数
  pageCount = this.newslist.length;
  // 每页条数]
  pageSize = 12;
  // 总页数
  pages = Math.ceil(this.pageCount / this.pageSize);
  // 当前页
  index: any = 1;
  // d当前页对用的数据
  dataSetList: any;
  time: any = new Date().toLocaleDateString();
  constructor() {}
  changePage(e) {
    this.index = e;
    this.dataSetList = this.newslist.slice((this.index - 1) * this.pageSize, this.index * this.pageSize);
    // console.log(this.dataSetList);
  }
  ngOnInit(): void {
    this.dataSetList = this.newslist.slice((this.index - 1) * this.pageSize, this.index * this.pageSize);
  }
}
