export const FlowLoopData = {
  nodes: [
    {
      id: '-3',
      value: {
        title: '来源页面A',
        items: [
          {
            text: '曝光PV',
            value: '10.30万',
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
          },
        ],
      },
    },
    {
      id: '-2',
      value: {
        title: '来源页面B',
        items: [
          {
            text: '点击UV',
            value: '10.30万',
            icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
          },
        ],
      },
    },
    {
      id: '-1',
      value: {
        title: '来源页面C',
        items: [
          {
            text: '访问页面UV',
          },
        ],
      },
    },
    {
      id: '0',
      value: {
        title: '活动页面',
        items: [
          {
            text: '访问页面UV',
          },
        ],
      },
    },
    {
      id: '1',
      value: {
        title: '去向页面A',
        items: [
          {
            text: '访问页面UV',
          },
        ],
      },
    },
    {
      id: '2',
      value: {
        title: '去向页面B',
        items: [
          {
            text: '访问页面UV',
          },
        ],
      },
    },
    {
      id: '3',
      value: {
        title: '去向页面C',
        items: [
          {
            text: '访问页面UV',
          },
        ],
      },
    },
    {
      id: '4',
      value: {
        title: '去向页面D',
        items: [
          {
            text: '访问页面UV',
          },
        ],
      },
    },
    {
      id: '5',
      value: {
        title: '去向页面E',
        items: [
          {
            text: '访问页面UV',
          },
        ],
      },
    },
    {
      id: '6',
      value: {
        title: '去向页面F',
        items: [
          {
            text: '访问页面UV',
          },
        ],
      },
    },
    {
      id: '7',
      value: {
        title: '去向页面G',
        items: [
          {
            text: '访问页面UV',
          },
        ],
      },
    },
    {
      id: '8',
      value: {
        title: '去向页面H',
        items: [
          {
            text: '访问页面UV',
          },
        ],
      },
    },
  ],
  edges: [
    {
      source: '-3',
      target: '0',
      value: '来源A',
    },
    {
      source: '-2',
      target: '0',
      value: '来源B',
    },
    {
      source: '-1',
      target: '0',
      value: '来源C',
    },
    {
      source: '0',
      target: '1',
    },
    {
      source: '1',
      target: '-3',
    },
    {
      source: '0',
      target: '2',
    },
    {
      source: '0',
      target: '3',
    },
    {
      source: '0',
      target: '4',
    },
    {
      source: '0',
      target: '5',
    },
    {
      source: '2',
      target: '6',
    },
    {
      source: '3',
      target: '7',
    },
    {
      source: '4',
      target: '8',
    },
  ],
};
