/*
 * 以下部分模拟数据来自控制台
 * https://console.upyun.com/
 */
import { MockRequest, MockStatusError } from '@delon/mock';
import { deepCopy } from '@delon/util';
import { Random } from 'mockjs';
import { genArr, genContent } from './utils';

let MOCKID = 10;
const OK = 'ok';
const USER = {
  user_id: 1,
  username: 'cipchk',
  realname: '测试',
  account_type: 'personal',
  company_name: '',
  email: 'cipchk@qq.com',
  email_status: true,
  mobile: '15900000000',
  mobile_status: true,
  im: null,
  website: 'https://ng-alain.com/',
  reg_time: Random.time(),
  status: 'NORMAL',
  location: '上海',
  sector: '其他,其他',
  address: '测试地址',
  zip: Random.zip(),
  verify_status: false,
};
const USAGE = {
  money: 2100.39,
  resource_flow_remain: 364965490744,
  transcode_remains: 0,
  transcode_narrowband_remains: 0,
  overdue_time: null,
  ticket_count: 0,
  account_status: 'NORMAL',
  storage: 3634891240,
  total_rebate: 0,
  freeze_rebate: 0,
};
interface DATAType {
  message: any;
  cdn: any;
  cdnEdge: any;
  help: any;
  helpArticleList: any;
  accountLog: any;
}
const DATA: DATAType = {
  message: null,
  cdn: null,
  cdnEdge: null,
  help: null,
  helpArticleList: null,
  accountLog: null,
};

function getIdx<T extends keyof DATAType>(type: T, id: number, field = 'id'): number {
  const idx = DATA[type].findIndex((w) => w[field] === id);
  if (idx === -1) {
    throw new MockStatusError(404);
  }
  return idx;
}

function get<T extends keyof DATAType>(type: T, id: number, field = 'id'): any {
  return DATA[type][getIdx(type, id, field)];
}

function save<T extends keyof DATAType>(type: T, body: any) {
  const id = body.id || 0;
  if (id > 0) {
    const idx = getIdx(type, id);
    DATA[type][idx] = { ...DATA[type][idx], ...body };
    return { msg: 'ok', item: DATA[type][idx], type: 'edit' };
  }

  const sorted = DATA[type].sort((a, b) => b.id - a.id);
  const item = { ...body, id: sorted.length > 0 ? sorted[0].id + 1 : 1 };
  (DATA[type] as any[]).splice(0, 0, item);
  return { msg: 'ok', item, type: 'add' };
}

function del<T extends keyof DATAType>(type: T, p: any) {
  const cid = +(p.cid || '0');
  let list: any[] = DATA[type];
  if (cid > 0) {
    list = DATA[type].find((w) => w.id === cid).list;
  }

  p.id.split(',').forEach((id) => {
    const idx = list.findIndex((w) => w.id === id);
    list.splice(idx, 1);
  });
  return { msg: 'ok' };
}

function genHtml(min = 2, max = 5) {
  return (
    '<p>' +
    new Array(Random.natural(min, max))
      .fill('')
      .map((v) => Random.sentence())
      .join('</p><p>') +
    '</p>'
  );
}

function genPage<T extends keyof DATAType>(type: T, queryString: any, qField = 'name', callback: (data: any) => any = null) {
  const pi = +(queryString.pi || 1);
  const ps = +(queryString.ps || 10);
  // data
  let data = deepCopy(DATA[type]);
  if (queryString.q) {
    data = data.filter((item) => item[qField].indexOf(queryString.q) > -1);
  }
  if (callback) {
    data = callback(data);
  }
  return {
    total: data.length,
    list: data.slice((pi - 1) * ps, pi * ps),
  };
}

// #region common

function attachment(req: MockRequest) {
  const file = req.body.get('file') as File;
  return { url: file.name, size: file.size, name: file.name };
}

// #endregion

// #region dashboard

function dashboard() {
  return {
    user: USER,
    usage: USAGE,
    // 产品快报
    news: [
      { id: 1, title: '喜大普奔，全新产品 WebSocket 上线啦' },
      { id: 2, title: '防御 DDoS 的终极奥义——SCDN' },
      { id: 3, title: '喜报！获 CDN 全国经营牌照，深入布局IPv6网络' },
    ],
    msg: OK,
  };
}

// #endregion

// #region message

function messageList(queryString: any) {
  const callback = (data: any[]) => {
    if (queryString.type !== '全部消息类型') {
      return (data = data.filter((item) => item.type === queryString.type));
    }
    return data;
  };
  if (DATA.message) {
    return genPage('message', queryString, 'type', callback);
  }
  const res: any[] = new Array(30).fill({}).map(() => ({
    id: MOCKID++,
    time: new Date(),
    title: Random.ctitle(5, 15),
    read: Random.boolean() && Random.boolean(),
    type: genArr(['优惠活动', '产品消息', '服务消息', '用户消息']),
  }));
  DATA.message = res;
  return genPage('message', queryString, 'type', callback);
}

// #endregion

// #region cdn

function cdnList(param: any) {
  const callback = (data: any[]) => {
    if (param.q) {
      return data.filter((w) => w.name.indexOf(param.q) !== -1);
    }
    if (param.status) {
      return data.filter((w) => w.status === param.status);
    }
    if (param.type) {
      return data.filter((w) => w.type === param.type);
    }
    return data;
  };
  if (DATA.cdn) {
    return genPage('cdn', param, 'type', callback);
  }
  const res: any[] = new Array(3).fill({}).map((_, idx) => ({
    id: MOCKID++,
    name: Random.title(1, 1),
    domains: [
      { domain: `${idx + 1}.ng-alain.com`, status: 'NORMAL' },
      { domain: 'test.ng-alain.com', status: 'REFUSED' },
    ],
    type: genArr(['picture', 'download', 'vod', 'cdn']),
    status: genArr(['normal', 'closed']),
    created: new Date(),
  }));
  res.splice(0, 0, {
    id: 1,
    name: 'ng-alain',
    domains: [
      { domain: `image.ng-alain.com`, status: 'NORMAL' },
      { domain: 'test.ng-alain.com', status: 'REFUSED' },
    ],
    type: 'cdn',
    status: 'normal',
    created: new Date(),
  });
  DATA.cdn = res;
  return genPage('cdn', param, 'type', callback);
}

function cdnItem(params: any) {
  return {
    ...cdnList({}).list.find((w) => w.name === params.name),
    type: 'picture',
    protocol: 'http',
    ssl_verify: false,
    oversea: 'enable',
    last: Random.float(100, 1000, 3, 3),
    lines: [
      {
        host: '1.1.1.1',
        port: 80,
        backup: 'main',
        weight: 1,
        max_fails: 3,
        fail_timeout: 30,
      },
      {
        host: 'ng-alain.com',
        port: 80,
        backup: 'main',
        weight: 1,
        max_fails: 3,
        fail_timeout: 30,
      },
    ],
    migration: {
      status: 'disable',
      paths: '',
      bucketName: '',
    },
    cache: {
      rule: [],
      noRule: [],
      global: {
        expired: 12,
        unit: 'hour',
        enabled: false,
      },
      qs: 'unopened',
      argumentsSort: false,
      sliceEnable: true,
    },
  };
}

function cdnEdgeList(queryString: any) {
  if (DATA.cdnEdge) {
    return genPage('cdnEdge', queryString, 'subject');
  }
  // labels
  DATA.cdnEdge = [];
  return genPage('cdnEdge', queryString, 'subject');
}

cdnEdgeList({});

// #endregion

// #region help

function helpCategories() {
  if (DATA.help) {
    return DATA.help;
  }
  let point = 0;
  function genList() {
    return new Array(Random.integer(5, 12)).fill({}).map((i, iidx) => ({
      id: ++point,
      key: Random.title(1, 1).toLowerCase(),
      title: Random.ctitle(3, 8),
      link: `/help/${point}`,
    }));
  }
  DATA.help = new Array(4 * 3).fill({}).map((p, idx) => {
    return {
      key: Random.title(1, 1).toLowerCase(),
      title: Random.ctitle(5, 15),
      icon: genArr(['cloud', 'meh', 'smile', 'mail'], 1),
      desc: Random.ctitle(5, 15),
      list: genList(),
    };
  });
  const ngAlainList = genList();
  ngAlainList[0].id = 1;
  ngAlainList[0].key = 'product';
  ngAlainList[0].title = `产品介绍`;
  (DATA.help as any[])[0] = {
    key: 'ng-alain',
    title: `NG-ALAIN`,
    icon: 'smile',
    desc: `一个基于 Antd 中后台前端解决方案，提供更多通用性业务模块，让开发者更加专注于业务。`,
    list: ngAlainList,
  };
  return DATA.help;
}

function helpArticleList() {
  if (DATA.helpArticleList) {
    return DATA.helpArticleList;
  }
  const res: any[] = new Array(6).fill({}).map((_, idx) => ({
    id: MOCKID++,
    key: Random.title(1, 1).toLowerCase(),
    title: genArr(['产品概述', '产品架构', '产品功能', '产品优势', '应用场景', '资源分布']),
    desc: '这是一段很长的描述这是一段很长的描述这是一段很长的描述这是一段很长的描述',
    created: new Date(),
  }));
  res[0].id = 1;
  res[0].key = `overview`;
  res[0].title = `产品概述`;
  DATA.helpArticleList = res;
  return res;
}

function helpArticleItem() {
  return {
    content: genContent(),
  };
}

// #endregion

// #region account

function accountLog(queryString: any) {
  const callback = (data: any[]) => {
    if (queryString.type !== '全部') {
      return (data = data.filter((item) => item.type === queryString.type));
    }
    return data;
  };
  if (DATA.accountLog) {
    return genPage('accountLog', queryString, 'type', callback);
  }
  const res: any[] = new Array(30).fill({}).map(() => ({
    id: MOCKID++,
    time: new Date(),
    type: genArr(['服务', '登录', '账号', '其他']),
    desc: Random.ctitle(5, 15),
    ip: Random.ip(),
  }));
  DATA.accountLog = res;
  return genPage('accountLog', queryString, 'type', callback);
}
// #endregion

// #region chart

function monitor(queryString: any) {
  return {
    health: Random.integer(0, 100),
    hit: Random.integer(0, 100),
    download: Random.integer(0, 2000),
    waf: Random.integer(0, 100),
    zone: new Array(100).fill({}).map(() => ({
      city: Random.province(),
    })),
  };
}
// #endregion

export const YUNS = {
  '/yun/dashboard': () => dashboard(),
  'POST /yun': (req: MockRequest) => ({ msg: OK, data: req.body }),
  'POST /yun/attachment': (req: MockRequest) => attachment(req),
  '/yun/user': { msg: OK, user: USER },
  'POST /yun/user/getcode': { code: '123456', msg: OK },
  'POST /yun/user/register': { msg: OK },
  '/yun/message': (req: MockRequest) => messageList(req.queryString),
  '/yun/message/:id': (req: MockRequest) => ({ ...get('message', +req.params.id), html: genHtml() }),
  '/yun/message/topbar': { msg: OK, total: 5, list: messageList({ type: '全部消息类型' }).list.slice(0, 3) },
  '/yun/cdn': (req: MockRequest) => cdnList(req.queryString),
  '/yun/cdn/:name': (req: MockRequest) => cdnItem(req.params),
  '/yun/cdn/edge': (req: MockRequest) => cdnEdgeList(req.queryString),
  '/yun/cdn/edge/:id': (req: MockRequest) => get('cdnEdge', +req.params.id),
  'POST /yun/cdn/edge': (req: MockRequest) => save('cdnEdge', req.body),
  'DELETE /yun/cdn/edge/:id': (req: MockRequest) => del('cdnEdge', req.params),
  '/yun/help/categories': () => helpCategories(),
  '/yun/help/article-list/:type': () => helpArticleList(),
  '/yun/help/article-item/:article': () => helpArticleItem(),
  '/yun/account/log': (req: MockRequest) => accountLog(req.queryString),
  '/yun/monitor': (req: MockRequest) => monitor(req.queryString),
};
