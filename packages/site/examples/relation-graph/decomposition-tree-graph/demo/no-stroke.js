import React from 'react';
import ReactDOM from 'react-dom';
import { DecompositionTreeGraph } from '@ant-design/charts';

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
  const config = {
    data,
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    nodeCfg: {
      title: {
        containerStyle: {
          fill: 'transparent',
        },
        style: {
          fill: '#000',
        },
      },
      items: {
        containerStyle: {
          fill: '#fff',
        },
        style: (cfg, group, type) => {
          const styles = {
            icon: {
              width: 10,
              height: 10,
            },
            value: {
              fill: '#52c41a',
            },
            text: {
              fill: '#aaa',
            },
          };
          return styles[type];
        },
      },
      style: {
        stroke: 'transparent',
      },
      nodeStateStyles: false,
    },
    edgeCfg: {
      endArrow: {
        show: false,
      },
      style: (item, graph) => {
        /**
         * graph.findById(item.target).getModel()
         * item.source: 获取 source 数据
         * item.target: 获取 target 数据
         */
        // console.log(graph.findById(item.source).getModel());
        return {
          stroke: '#40a9ff',
          lineWidth: Math.random() * 10 + 1,
          strokeOpacity: 0.5,
        };
      },
      edgeStateStyles: false,
    },
  };
  // @ts-ignore
  return <DecompositionTreeGraph {...config} />;
};

ReactDOM.render(<DemoDecompositionTreeGraph />, document.getElementById('container'));
