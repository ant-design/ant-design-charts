import React from 'react';
import ReactDOM from 'react-dom';
import { FlowAnalysisGraph } from '@ant-design/charts';

const DemoFlowAnalysisGraph = () => {
  const data = {
    nodes: [
      {
        id: '0',
        value: {
          title: 'spmd1',
          items: [
            {
              text: '曝光UV',
              value: '1000万',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
              trend: '45.9%',
            },
            {
              text: '点击UV',
              value: '10万',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
              trend: '1.9%',
            },
          ],
        },
      },
      {
        id: '1',
        value: {
          title: '开通营销页1',
          items: [
            {
              text: '访问UV',
              value: '1000万',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
              trend: '45.9%',
            },
          ],
        },
      },
      {
        id: '2',
        value: {
          title: '开通营销页2',
          items: [
            {
              text: '访问UV',
              value: '1000万',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
              trend: '45.9%',
            },
          ],
        },
      },
      {
        id: '3',
        value: {
          title: '去向页面1',
          items: [
            {
              text: '访问UV',
              value: '1000万',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
              trend: '45.9%',
            },
          ],
        },
      },
      {
        id: '4',
        value: {
          title: '去向页面2',
          items: [
            {
              text: '访问UV',
              value: '1000万',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
              trend: '45.9%',
            },
          ],
        },
      },
    ],
    edges: [
      {
        source: '0',
        target: '1',
      },
      {
        source: '0',
        target: '2',
      },
      {
        source: '1',
        target: '3',
      },
      {
        source: '2',
        target: '4',
      },
    ],
  };

  const config = {
    data,
    nodeCfg: {
      size: [180, 30],
      items: {
        padding: 6,
        containerStyle: {
          fill: '#fff',
        },
      },
      customContent: (item, group, cfg) => {
        const { startX, startY, width } = cfg;
        const { text, value, icon, trend } = item;
        text &&
          group?.addShape('text', {
            attrs: {
              textBaseline: 'top',
              x: startX,
              y: startY,
              text,
              fill: '#aaa',
            },
            // group 内唯一字段
            name: `text-${Math.random()}`,
          });
        value &&
          group?.addShape('text', {
            attrs: {
              textBaseline: 'top',
              x: startX + 60,
              y: startY,
              text: value,
              fill: '#000',
            },
            name: `value-${Math.random()}`,
          });
        icon &&
          group?.addShape('image', {
            attrs: {
              x: startX + 100,
              y: startY,
              width: 8,
              height: 10,
              img: icon,
            },
            name: `image-${Math.random()}`,
          });
        trend &&
          group?.addShape('text', {
            attrs: {
              textBaseline: 'top',
              x: startX + 110,
              y: startY,
              text: trend,
              fill: '#f00',
            },
            name: `value-${Math.random()}`,
          });

        // 行高
        return 14;
      },
      nodeStateStyles: {
        hover: {
          stroke: '#1890ff',
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
      style: {
        fill: '#E6EAF1',
        stroke: '#B2BED5',
        radius: [2, 2, 2, 2],
      },
    },
    edgeCfg: {
      label: {
        style: {
          fill: '#aaa',
          fontSize: 12,
          fillOpacity: 0.5,
        },
      },
      edgeStateStyles: {
        hover: {
          stroke: '#1890ff',
          lineWidth: 2,
        },
      },
    },
    markerCfg: (cfg) => {
      const { edges } = data;
      return {
        position: 'right',
        show: edges.find((item) => item.source === cfg.id),
        collapsed: !edges.find((item) => item.source === cfg.id),
      };
    },
    layout: {
      ranksepFunc: () => 30,
      nodesepFunc: () => 30,
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return <FlowAnalysisGraph {...config} />;
};

ReactDOM.render(<DemoFlowAnalysisGraph />, document.getElementById('container'));
