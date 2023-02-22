import React from 'react';
import ReactDOM from 'react-dom';
import { DecompositionTreeGraph } from '@ant-design/graphs';

const DemoDecompositionTreeGraph = () => {
  const data = {
    id: 'A0',
    value: {
      title: '订单金额',
      items: [
        {
          text: '3031万',
        },
      ],
    },
    children: [
      {
        id: 'A1',
        value: {
          title: '华南',
          items: [
            {
              text: '1152万',
            },
            {
              text: '占比',
              value: '30%',
            },
          ],
        },
        children: [
          {
            id: 'A11',
            value: {
              title: '广东',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A12',
            value: {
              title: '广西',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A13',
            value: {
              title: '海南',
              items: [
                {
                  text: '1152万',
                },
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'A2',
        value: {
          title: '华北',
          items: [
            {
              text: '595万',
            },
            {
              text: '占比',
              value: '30%',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
            },
          ],
        },
      },
    ],
  };

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          [1, 2].map(() => ({
            id: 'A2' + Math.random().toString(),
            value: {
              title: '异步节点' + Math.random().toString(),
              items: [
                {
                  text: '595万',
                },
                {
                  text: '占比',
                  value: '50%',
                  icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
                },
              ],
            },
          })),
        );
      }, 1000);
    });
  };

  const getChildren = async () => {
    const asyncData = await fetchData();
    return asyncData;
  };

  const config = {
    data,
    autoFit: false,
    nodeCfg: {
      getChildren,
    },
    markerCfg: (cfg) => {
      const { children } = cfg;
      return {
        show: true,
        collapsed: !children?.length,
      };
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <DecompositionTreeGraph {...config} />;
};

ReactDOM.render(<DemoDecompositionTreeGraph />, document.getElementById('container'));
