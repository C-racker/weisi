import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { STColumn } from '@delon/abc/st';
import addDays from 'date-fns/addDays';
import differenceInDays from 'date-fns/differenceInDays';
import format from 'date-fns/format';
import { Random } from 'mockjs';

@Component({
  selector: 'sms-home',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SMSHomeComponent implements OnInit {
  i = {
    count1: 20,
    count2: 0,
    count3: 1,
    sendTrade: 50,
    sendMarking: 50,
    start: addDays(new Date(), -6),
    end: new Date(),
  };
  sendChartData = [
    { name: '已发送行业短信', value: this.i.sendTrade },
    { name: '已发送营销短信', value: this.i.sendMarking },
  ];
  sendChartOptions: any = {
    legend: {
      orient: 'vertical',
      right: 10,
      top: 20,
      bottom: 20,
      data: this.sendChartData.map((i) => i.name),
    },
    series: [
      {
        type: 'pie',
        radius: '50%',
        label: {
          position: 'outer',
          alignTo: 'none',
          bleedMargin: 5,
        },
        data: this.sendChartData,
      },
    ],
  };
  list: any[] = [];
  columns: STColumn[] = [{ title: '短信类型' }, { title: '短信名称' }, { title: '审批状态' }];
  rateChartOptions: any = {};

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadRate();
  }

  loadRate(): void {
    const { start, end } = this.i;
    // Mock data
    const data = new Array(Math.max(differenceInDays(end, start) + 1, 14)).fill({}).map((_, idx) => ({
      date: format(addDays(new Date(), -idx), 'yyyy-MM-dd'),
      suc: Random.integer(0, 1000),
      fail: Random.integer(0, 10),
    }));

    this.rateChartOptions = {
      tooltip: {
        trigger: 'axis',
        formatter: '{b}<br />{a0}: {c0}<br />{a1}: {c1}',
        axisPointer: {
          type: 'shadow',
        },
      },
      legend: {
        data: ['成功', '失败'],
      },
      xAxis: [
        {
          type: 'category',
          data: data.map((v) => v.date),
        },
      ],
      yAxis: [
        {
          type: 'value',
          splitNumber: 5,
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
          },
        },
      ],
      series: [
        {
          name: '成功',
          type: 'bar',
          data: data.map((v) => v.suc),
          barWidth: 10,
          barGap: 0,
        },
        {
          name: '失败',
          type: 'bar',
          data: data.map((v) => v.fail),
          barWidth: 10,
          barGap: 0,
        },
      ],
    };
    this.cdr.detectChanges();
  }
}
