import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'device-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceComponent implements OnInit {
  devlists: any = [
    {
      id: 1,
      name: '电器试验检测设备',
    },
    {
      id: 2,
      name: '电器试验室设计，咨询、维护',
    },
    {
      id: 3,
      name: '自动化行业解决方案',
    },
    {
      id: 4,
      name: '低压电气产品',
    },
    {
      id: 5,
      name: '电器自动化生产线',
    },
    {
      id: 6,
      name: '交流恒流源',
    },
    {
      id: 7,
      name: '直流电源',
    },
    {
      id: 8,
      name: '交流/变频电源',
    },
    {
      id: 9,
      name: '机场地面电源',
    },
    {
      id: 10,
      name: '光伏逆变测试解决方案',
    },
    {
      id: 11,
      name: '仪器仪表',
    },
    {
      id: 12,
      name: '工业机器人',
    },
  ];

  isShow = false;
  devices: any[] = [
    {
      id: 1,
      name: '电器试验检测设备',
      dev: [
        {
          src: 'http://www.weisiauto.com/uploadfile/2015/1208/20151208021351795.jpg',
          name: '电寿命试验',
          desc: '电寿命试验设备主要包括断路器电寿命测试系统和接触器电寿命测试系统等试验设备',
          list: [
            {
              id: 11,
              src: 'http://www.weisiauto.com/uploadfile/2016/0121/20160121100648471.jpg',
              name: '新型程控电流源在继电器电寿命试验中的应用',
              desc:
                '维思自动化采用最新型程控电流源应用于继电器电寿命试验中，有利于降低试验成本，切实站在客户的角度，为其提供成本低廉、运行可靠的试验设备。',
            },
            {
              id: 12,
              src: 'http://www.weisiauto.com/uploadfile/2016/0121/20160121100648471.jpg',
              name: '新型程控电流源在继电器电寿命试验中的应用',
              desc:
                '维思自动化采用最新型程控电流源应用于继电器电寿命试验中，有利于降低试验成本，切实站在客户的角度，为其提供成本低廉、运行可靠的试验设备。',
            },
          ],
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2015/1208/20151208021057633.jpg',
          name: '机械寿命',
          desc: '机械寿命设备主要包括ACB储能摇进机构寿命试验台、MCCB机械寿命试验台、按键开关寿命试验机、断路器测试系统、...',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0217/20140217102539647.jpg',
          name: '温升及脱扣试验',
          desc: '温升及透叩试验主要包括ETU特性测试台和交直流温升系统。温升试验目前是一次型式试验。传统的温升试验考核绕组...',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2015/1208/20151208021834615.jpg',
          name: '试验室信息化系统',
          desc: '试验室信息管理系(LIMS)Laboratory Information Management System。LIMS是英文单词Laboratory Informatio...',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2015/1209/20151209024104762.jpg',
          name: '试验负载',
          desc: '试验负载设备主要包括电器附件及电源负载柜、电寿命试验阻抗、负载阻抗器等等。',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0217/20140217103635163.jpg',
          name: '试验调节设备',
          desc: '试验调节设备主要包括F.Y阻容调节装置、飞弧测量人工中心点装置等试验仪器设备。',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2015/1208/20151208021808457.jpg',
          name: '试验室综合控制系统',
          desc: '控制台主要用于布置试验监控计算机，根据试验需求，监控计算机一般包含以下几部分：试验线路监视计算机、试验...',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0217/20140217104119938.jpg',
          name: '其他',
          desc: '其他标准化检测设备主要包括FOP11飞弧检测电阻柜、MCB飞弧检测装置、低压电器开关多功能试验台、电动机保护器...',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2016/0112/20160112053614917.jpg',
          name: '交直流接触器特性自动测试系统',
          desc: '接触器的静、动特性对电力设备正常运行具有重要影响。现有对接触器的设计与研究的方法，主要是基于理论分析与...',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2016/0218/20160218023223978.jpg',
          name: '塑壳式断路器触头特性自动测试台',
          desc: '测试数据可靠、准确、可信度高；测试方法更科学，更准确；自动化程度高',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2016/0511/20160511042554752.jpg',
          name: '继电器/接触器寿命可靠性试验装置',
          desc: '我公司为河北省特种设备监督检验院设计生产的继电器/接触器寿命可靠性试验设备已完工，并验收成果，该设备用于...',
        },
      ],
    },
    {
      id: 2,
      name: '电器试验室设计，咨询、维护',
      dev: [
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0212/20140212053041503.jpg',
          name: '试验室建设总包',
          desc:
            '一、在项目管理上，我们公司拥有丰富的经验和资深的项目经理，从成立项目小组开始都会全程实施动态跟踪，直到项目验收完成。目前通过这种管...',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0212/20140212053136431.jpg',
          name: '试验室培训',
          desc:
            '一、设备操作培训1、我们会派出拥有丰富经验的操作人员对贵公司负责这个设备操作的人员进行严格的培训，培训严格按照标准来进行，保证培训...',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0212/20140212053308438.jpg',
          name: '试验室设计',
          desc:
            '对于试验室的设计，我们拥有丰富的经验和成熟的技术团队，我们承诺并提供从土建布局到最后试验室竣工验收的一站式服务，其中在电气、工程...',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0212/20140212053511568.jpg',
          name: '试验室验收',
          desc:
            '一、关键设备验收1、对于设备关键零部器件的验收，包括变压器、阻抗等可能影响设备运行的重要器件的验收，保证器件符合标准规定。二、试验...',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0212/20140212053642726.jpg',
          name: '试验室咨询与规划',
          desc:
            '一、在试验室建设的规划中，我们可以帮助客户解答相关问题以及根据客户的需求来帮助客户完成试验室建设的规划。1、总体方案说明1）、概述2...',
        },
      ],
    },
    {
      id: 3,
      name: '自动化行业解决方案',
      dev: [
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0224/20140224031228483.jpg',
          name: '干馏煤监测系统',
          desc:
            '干馏煤监控系统通过传感器实时采集现场数据，通过上位机监测锅炉温度、压力、流量等现场实时数据。上位机监控软件采用西门子WINCC编写，通...',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0224/20140224031356459.png',
          name: '恒压供水设备控制系统',
          desc:
            '恒压供水设备主要是通过闭环自动调节供水压力至设定值的。本控水控制系统采用3台水泵，一台变频泵二台工频泵，由带有内置PID功能的变频器协...',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0224/20140224032323402.jpg',
          name: '机房监控样板间系统',
          desc:
            '背景机房有服务器100台，交换机、路由器、防火墙等网络设备50台，小型机4台。现在要求对信息中心内的所有服务器网络设备进行统一集中的控制...',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0224/20140224032913817.jpg',
          name: '煤粉锅炉监控系统',
          desc:
            '现代锅炉控制既要符合大热量输出，又要符合环保节能。传统的人工烧炉存在着热量输出不均衡，操作人员缺乏经验，煤资源浪费严重，燃烧...',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0224/20140224033306881.jpg',
          name: '燃烧控制装置',
          desc:
            '系统概述本公司生产的燃烧器以下几种控制方式：手动控制、段火控制、比例调节控制、触摸屏数字变频比例控制及微机联网控制。这几种控制方式',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0224/20140224034153847.jpg',
          name: '燃油锅炉监控系统',
          desc:
            '燃油锅炉的工作原理就是锅炉的燃料以柴油或重油为主通过电动控制将和锅炉炉体燃烧室连接的喷油嘴点燃。现在燃油锅炉都是采用的全自...',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0224/20140224034833699.jpg',
          name: '弱电监控系统',
          desc:
            '根据开关电器试验系统特点，并根据主回路的设计结构，本系统在结构上可分为布置在中央控制室（或某试验系统控制室）中的控制台及模...',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0224/20140224035214332.jpg',
          name: '水厂自动化系统',
          desc:
            '综合自动化管理、控制系统采用一套西门子S7-DP过程控制系统（PLC控制器加上通讯设备组件），过程检测仪表采用标准仪表、4～20mA D...',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0224/20140224040257295.jpg',
          name: '水处理自动化',
          desc:
            '高效沉淀池及加药间的自控系统主要实现工艺过程的监视和控制。系统可根据工艺要求，远程通过自动/手动方式完成工艺过程，并可可先系统...',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0224/20140224040653684.jpg',
          name: '水资源监控系统',
          desc:
            '由于大型水厂的水资源受到地理位置的限制，所以水源井和水池水厂等水处理单位可能距离较远，如果采用传统的人为手动控制，需要消耗...',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0224/20140224044240613.jpg',
          name: '天然气系统自动化',
          desc: '本安型控制设备针对本安型仪表的通讯解决方案手动、自动运行方式实时数据采集历史数据分析与预测本安型无线通讯技术',
        },
        {
          src: 'http://www.weisiauto.com/uploadfile/2014/0224/20140224045135668.jpg',
          name: '窑炉自动化系统',
          desc:
            '采用遗传算法、多态模糊、智能网络等先进过程控制技术综合红外、激光及热电偶等温度采集方式附加窑炉能耗监测与优化功能针对不同窑炉类型，...',
        },
      ],
    },
    {
      id: 4,
      name: '低压电气产品',
      dev: [
        {
          name: '变频器',
          desc: '这个设备非常好用',
        },
        {
          name: 'PLC，触摸屏',
          desc: '这个设备非常好用',
        },
        {
          name: '工业计算机',
          desc: '这个设备非常好用',
        },
        {
          name: '配电柜',
          desc: '这个设备非常好用',
        },
        {
          name: '干式变压器',
          desc: '这个设备非常好用',
        },
      ],
    },
    {
      id: 5,
      name: '电器试验检测设备',
      dev: [
        {
          name: '继电器',
          desc: '这个设备非常好用',
        },
      ],
    },
    {
      id: 6,
      name: '电器试验检测设备',
      dev: [
        {
          name: '继电器',
          desc: '这个设备非常好用',
        },
      ],
    },
    {
      id: 7,
      name: '电器试验检测设备',
      dev: [
        {
          name: '继电器',
          desc: '这个设备非常好用',
        },
      ],
    },
    {
      id: 8,
      name: '电器试验检测设备',
      dev: [
        {
          name: '继电器',
          desc: '这个设备非常好用',
        },
      ],
    },
    {
      id: 9,
      name: '电器试验检测设备',
      dev: [
        {
          name: '继电器',
          desc: '这个设备非常好用',
        },
      ],
    },
    {
      id: 10,
      name: '电器试验检测设备',
      dev: [
        {
          name: '继电器',
          desc: '这个设备非常好用',
        },
      ],
    },
    {
      id: 11,
      name: '电器试验检测设备',
      dev: [
        {
          name: '继电器',
          desc: '这个设备非常好用',
        },
      ],
    },
    {
      id: 12,
      name: '电器试验检测设备',
      dev: [
        {
          name: '继电器',
          desc: '这个设备非常好用',
        },
      ],
    },
  ];
  res: any = this.devices[0];
  // name
  name: any = this.res.name;
  // dev
  dev: any = this.res.dev;

  list: any = this.dev[0].list;
  // content: any = 1;
  id: any;
  show = false;
  code: any;
  detaillist: any;

  constructor(public router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.queryParams.subscribe((data) => {
      this.id = data.id;
      console.log(data);
      this.code = data.code;
    });
  }
  handleShow() {
    this.show = true;
  }
  handleActive() {
    // this.id = this.router.queryParams._value.id;
    console.log(this.id);
    this.isShow = true;
    console.log(this.devices[this.id - 1]);
    const { name, dev } = this.devices[this.id - 1];
    this.name = name;
    this.dev = dev;
    this.show = false;
    this.detaillist = this.devices[this.id - 1].dev[this.id - 1].list;
    console.log(this.detaillist[0].name);
  }
}
