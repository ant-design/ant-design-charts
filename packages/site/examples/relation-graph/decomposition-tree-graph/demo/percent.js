import React from 'react';
import ReactDOM from 'react-dom';
import { DecompositionTreeGraph } from '@ant-design/graphs';

const DemoDecompositionTreeGraph = () => {
  const data = {
    id: 'A0',
    value: {
      title: '全年降本增收',
      items: [
        {
          text: '3031万',
          value: '80%',
        },
      ],
      percent: 0.8,
    },
    children: [
      {
        id: 'A1',
        value: {
          title: '降本增收项目1',
          percent: 0.7,
          items: [
            {
              text: '1152万',
            },
            {
              text: '占比',
              value: '70%',
            },
          ],
        },
        children: [
          {
            id: 'A11',
            value: {
              title: '降本增收项目1-1',
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
              title: '降本增收项目1-2',
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
              title: '降本增收项目1-3',
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
          title: '降本增收项目2',
          percent: 0.3,
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
    nodeCfg: {
      size: [140, 25],
      percent: {
        position: 'bottom',
        size: 4,
        style: (arg) => {
          return {
            radius: [0, 0, 0, 2],
            fill: arg.value.percent > 0.3 ? stroke : '#1f8fff',
          };
        },
      },
      items: {
        containerStyle: {
          fill: '#fff',
        },
        padding: 6,
        style: (cfg, group, type) => {
          const styles = {
            icon: {
              width: 12,
              height: 12,
            },
            value: {
              fill: '#f00',
            },
            text: {
              fill: '#aaa',
            },
          };
          return styles[type];
        },
      },
      nodeStateStyles: {
        hover: {
          lineWidth: 2,
        },
      },
      title: {
        containerStyle: {
          fill: 'transparent',
        },
        style: {
          fill: '#000',
          fontSize: 12,
        },
      },
      style: (arg) => {
        return {
          fill: '#fff',
          radius: 2,
          stroke: arg.value.percent > 0.3 ? stroke : '#1f8fff',
        };
      },
    },
    edgeCfg: {
      label: {
        style: {
          fill: '#aaa',
          fontSize: 12,
          fillOpacity: 1,
        },
      },
      style: (edge) => {
        return {
          stroke: '#518AD3',
          strokeOpacity: 0.5,
        };
      },
      endArrow: {
        fill: '#518AD3',
      },
      edgeStateStyles: {
        hover: {
          strokeOpacity: 1,
        },
      },
    },
    markerCfg: (cfg) => {
      return {
        position: 'right',
        show: cfg.children?.length,
        style: (arg) => {
          return {
            stroke: arg.value.percent > 0.3 ? stroke : '#1f8fff',
          };
        },
      };
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <DecompositionTreeGraph {...config} />;
};

ReactDOM.render(<DemoDecompositionTreeGraph />, document.getElementById('container'));
