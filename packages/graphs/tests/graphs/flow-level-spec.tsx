// @ts-nocheck
import React from 'react';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import { FlowAnalysisGraph } from '../../src';
import { FlowData } from '../data';

describe('Flow level props', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  it('Render level', () => {
    let chartRef = undefined;
    const props = {
      className: 'container',
      onReady: (ref) => {
        chartRef = ref;
      },
    };

    const fetchData = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            nodes: [
              {
                id: Math.random().toString(),
                value: {
                  title: '来源页面99',
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
                id: Math.random().toString(),
                value: {
                  title: '来源页面999',
                  items: [
                    {
                      text: '曝光PV',
                      value: '10.30万',
                      icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
                    },
                  ],
                },
              },
            ],
            edges: [],
          });
        }, 1000);
      });
    };
    const asyncData = async () => {
      return await fetchData();
    };

    const level = 2;

    const chartProps = {
      data: FlowData,
      autoFit: false,
      fitCenter: false,
      level,
      nodeCfg: {
        asyncData,
        size: [140, 25],
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
      edgeCfg: {
        label: {
          style: {
            fill: '#aaa',
            fontSize: 12,
            fillOpacity: 1,
          },
        },
        style: (edge) => {
          const stroke = edge.target === '0' ? '#c86bdd' : '#5ae859';
          return {
            stroke,
            lineWidth: Math.random() * 10 + 1,
            strokeOpacity: 0.5,
          };
        },
        edgeStateStyles: {
          hover: {
            strokeOpacity: 1,
          },
        },
      },
      markerCfg: {
        position: 'right',
        show: true,
      },
      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    };
    act(() => {
      render(<FlowAnalysisGraph {...props} {...chartProps} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    const { _graphId } = chartRef.findById('-3')?.getModel();
    expect(_graphId).toBeDefined();
    expect(chartRef.get('data').nodes.length).toBe(4);
  });
});
