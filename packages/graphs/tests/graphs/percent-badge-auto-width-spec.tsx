// @ts-nocheck
import React, { useRef } from 'react';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import { DecompositionTreeGraph } from '../../src';

describe('Percent badge with auto width', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  it('percent', () => {
    let chartRef = undefined;
    const props = {
      className: 'container',
      onReady: (ref) => {
        chartRef = ref;
      },
    };
    const stroke = '#EA2F97';
    const config = {
      data: {
        id: 'total',
        value: { title: '首屏体感均值', items: [{ text: '总耗时：2059ms' }] },
        children: [
          { id: 'beforeappstart', value: { title: '资源加载耗时', items: [{ text: '耗时：806ms' }], percent: '0.39' } },
          {
            id: 'beforerequest',
            value: {
              title: '接口请求前串行逻辑耗时（可能是获取定位等）',
              items: [{ text: '耗时：54ms' }],
              percent: '0.03',
            },
          },
          {
            id: 'c2crequestcost',
            value: {
              title: '端到端耗时',
              items: [{ text: '耗时：2121ms' }, { text: '预加载节省耗时：1180ms' }],
              percent: '0.46',
            },
            children: [
              {
                id: 'queryTradeBuy）',
                value: {
                  title: '服务总耗时',
                  items: [{ text: 'queryTradeBuy' }, { text: '耗时：1613ms' }],
                  percent: '0.76',
                },
                children: [
                  {
                    id: 'FzHotelTradeService#queryHotelInitBizInfo4Render',
                    value: {
                      title: '获取行业信息（商品、卖家、买家等）',
                      items: [{ text: 'FzHotelTradeService#queryHotelInitBizInfo4Render' }, { text: '耗时：593ms' }],
                      percent: '0.37',
                    },
                  },
                  {
                    id: 'PayingMemberService#getMemberCardItem',
                    value: {
                      title: '查询菲住联盟会员卡信息',
                      items: [{ text: 'PayingMemberService#getMemberCardItem' }, { text: '耗时：4ms' }],
                      percent: '0.00',
                    },
                  },
                  {
                    id: 'ConfirmOrderPageService#render',
                    value: {
                      title: '调用业务中台fliggy-buy2获取优惠/资金等信息',
                      items: [{ text: 'ConfirmOrderPageService#render' }, { text: '耗时：450ms' }],
                      percent: '0.28',
                    },
                  },
                  {
                    id: 'FzHotelTradeBuyService#enrichHotelRender4Buy',
                    value: {
                      title: '获取行业组件信息',
                      items: [{ text: 'FzHotelTradeBuyService#enrichHotelRender4Buy' }, { text: '耗时：19ms' }],
                      percent: '0.01',
                    },
                  },
                  {
                    id: 'TempStoreService#store',
                    value: {
                      title: '保存奥创组件信息',
                      items: [{ text: 'TempStoreService#store' }, { text: '耗时：12ms' }],
                      percent: '0.01',
                    },
                  },
                  {
                    id: 'FfaInterflowRegisterService#getRegisterInfo4Trade',
                    value: {
                      title: '获取会员注册信息',
                      items: [{ text: 'FfaInterflowRegisterService#getRegisterInfo4Trade' }, { text: '耗时：48ms' }],
                      percent: '0.03',
                    },
                  },
                  {
                    id: 'GeneralRightService#getRightInfo',
                    value: {
                      title: '获取会员权益信息',
                      items: [{ text: 'GeneralRightService#getRightInfo' }, { text: '耗时：40ms' }],
                      percent: '0.03',
                    },
                  },
                  {
                    id: 'InsSceneService#recommend',
                    value: {
                      title: '保险推荐',
                      items: [{ text: 'InsSceneService#recommend' }, { text: '耗时：241ms' }],
                      percent: '0.15',
                    },
                  },
                ],
              },
              {
                id: 'netWork',
                value: { title: '网络开销(http传输+mtop层)', items: [{ text: '耗时：508ms' }], percent: '0.24' },
              },
            ],
          },
          { id: 'rendercost', value: { title: '渲染耗时', items: [{ text: '耗时：330ms' }], percent: '0.16' } },
        ],
      },
      autoFit: true,
      behaviors: [],
      nodeCfg: {
        style: { stroke: '#40a9ff' },
        percent: { size: 5, position: 'bottom' },
        autoWidth: true,
        title: { autoEllipsis: true },
        items: {},
        nodeStateStyles: { hover: { stroke: '#1890ff', lineWidth: 2 } },
      },
      edgeCfg: { endArrow: { fill: '#40a9ff' } },
    };

    act(() => {
      render(<DecompositionTreeGraph {...props} {...config} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    expect(
      chartRef
        .getNodes()[0]
        .get('group')
        .getChildren()
        .filter((item) => item.cfg.name === 'percent-rect-background'),
    ).not.toBeUndefined();
  });
});
