// @ts-nocheck
import React from 'react';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import { FlowAnalysisGraph } from '../../src';

describe('Labels Line', () => {
  let container;
  const data = {
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
        // value: '来源A',
        value: {
          text: '来源A',
          subText: 'subText',
        },
      },
      {
        source: '-2',
        target: '0',
        value: {
          text: '来源B',
          subText: 'subText',
        },
      },
      {
        source: '-1',
        target: '0',
        value: '来源C',
      },
      {
        source: '0',
        target: '1',
        value: {
          text: '来源A',
          subText: 'subText',
        },
      },
      {
        source: '0',
        target: '2',
        value: {
          text: '来源A',
          subText: 'subText',
        },
      },
      {
        source: '0',
        target: '3',
        value: '哈哈',
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
        value: '哈哈哈',
      },
      {
        source: '4',
        target: '8',
        value: {
          text: '来源A',
          subText: 'subText',
        },
      },
    ],
  };
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('Render label', () => {
    let chartRef = undefined;
    const props = {
      className: 'container',
      onReady: (ref) => {
        chartRef = ref;
      },
    };
    const chartProps = {
      data,
      nodeCfg: {
        size: [140, 25],
        anchorPoints: (node) => {
          return [
            [0, 0.5],
            [1, 0.5],
          ];
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
      autoFit: false,
      edgeCfg: {
        type: 'labels-line',
        endArrow: true,
        // startArrow: true,
        label: {
          style: {
            fill: '#aaa',
            fontSize: 24,
            fillOpacity: 1,
          },
        },
        style: (edge) => {
          const stroke = edge.target === '0' ? '#c86bdd' : '#5ae859';
          return {
            stroke,
            // lineWidth: Math.random() * 10 + 1,
            strokeOpacity: 0.5,
          };
        },
        edgeStateStyles: {
          hover: {
            strokeOpacity: 1,
          },
        },
      },
      layout: {
        // rankdir: 'TB',
        ranksepFunc: () => 40,
        nodesepFunc: () => 20,
      },
      markerCfg: (cfg) => {
        const { edges } = data;
        return {
          position: 'right',
          // position: 'bottom',
          show: edges.find((item) => item.source === cfg.id),
          collapsed: !edges.find((item) => item.source === cfg.id),
        };
      },
      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    };
    act(() => {
      render(<FlowAnalysisGraph {...props} {...chartProps} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    const { anchorPoints } = chartRef.findById('-3')?.getModel();
    expect(anchorPoints).toEqual([
      [0, 0.5],
      [1, 0.5],
    ]);
  });
});
