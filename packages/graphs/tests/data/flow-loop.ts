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
      sourceAnchor: 1,
      // 该边连入 target 点的第 0 个 anchorPoint，
      targetAnchor: 0,
      value: '来源A',
    },
    {
      source: '-2',
      target: '0',
      sourceAnchor: 1,
      // 该边连入 target 点的第 0 个 anchorPoint，
      targetAnchor: 0,
      value: '来源B',
    },
    {
      source: '-1',
      target: '0',
      sourceAnchor: 1,
      // 该边连入 target 点的第 0 个 anchorPoint，
      targetAnchor: 0,
      value: '来源C',
    },
    {
      source: '0',
      target: '-1',
      sourceAnchor: 1,
      // 该边连入 target 点的第 0 个 anchorPoint，
      targetAnchor: 0,
      value: '来源C',
    },
    {
      source: '0',
      target: '1',
      sourceAnchor: 1,
      // 该边连入 target 点的第 0 个 anchorPoint，
      targetAnchor: 0,
    },
    {
      source: '1',
      target: '-3',
      sourceAnchor: 1,
      // 该边连入 target 点的第 0 个 anchorPoint，
      targetAnchor: 0,
    },
    {
      source: '0',
      target: '2',
      sourceAnchor: 1,
      // 该边连入 target 点的第 0 个 anchorPoint，
      targetAnchor: 0,
    },
    {
      source: '0',
      target: '3',
      sourceAnchor: 1,
      // 该边连入 target 点的第 0 个 anchorPoint，
      targetAnchor: 0,
    },
    {
      source: '0',
      target: '4',
      sourceAnchor: 1,
      // 该边连入 target 点的第 0 个 anchorPoint，
      targetAnchor: 0,
    },
    {
      source: '0',
      target: '5',
      sourceAnchor: 1,
      // 该边连入 target 点的第 0 个 anchorPoint，
      targetAnchor: 0,
    },
    {
      source: '2',
      target: '6',
      sourceAnchor: 1,
      // 该边连入 target 点的第 0 个 anchorPoint，
      targetAnchor: 0,
    },
    {
      source: '3',
      target: '7',
      sourceAnchor: 1,
      // 该边连入 target 点的第 0 个 anchorPoint，
      targetAnchor: 0,
    },
    {
      source: '4',
      target: '8',
      sourceAnchor: 1,
      // 该边连入 target 点的第 0 个 anchorPoint，
      targetAnchor: 0,
    },
  ],
};

export const FlowLoopDoubleData = {
  nodes: [
    {
      id: '4',
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
      id: '5',
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
      id: '6',
      value: {
        title: '去向页面C',
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
      source: '4',
      target: '5',
    },
    {
      source: '5',
      target: '6',
    },
    {
      source: '6',
      target: '4',
    },
  ],
};
