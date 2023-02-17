import React from 'react';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import { DecompositionTreeGraph, FlowAnalysisGraph } from '../../src';
import { TreeData, FlowData } from '../data';

describe('Marker Events', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('render DecompositionTreeGraph', () => {
    let chartRef = undefined;
    let ext;
    const props = {
      className: 'container',
      onReady: (graph) => {
        chartRef = graph;
        graph.on('marker:click', (evt, extra) => {
          ext = extra;
        });
        graph.emit('marker:click', '', {
          type: 'collapse',
          collapsed: true,
        });
      },
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

    const getChildren = async (): Promise<any> => {
      return await fetchData();
    };
    const config = {
      data: TreeData,
      height: 600,
      nodeCfg: {
        getChildren,
      },
      tooltipCfg: {
        customContent: () => {
          return <div>tooltip</div>;
        },
      },
      markerCfg: (cfg) => {
        const { children } = cfg;
        return {
          show: true,
          collapsed: !children?.length,
        };
      },

      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    } as any;
    act(() => {
      render(<DecompositionTreeGraph {...props} {...config} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    expect(ext).toEqual({
      type: 'collapse',
      collapsed: true,
    });
  });

  it('render FlowAnalysisGraph', () => {
    let chartRef = undefined;

    const props = {
      className: 'container',
      onReady: (graph) => {
        chartRef = graph;
        graph.on('marker:click', (evt, ext) => {
          console.log(ext);
        });
      },
    };
    const spyWarn = jest.spyOn(console, 'warn');
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
    const config = {
      data: FlowData,
      height: 600,
      tooltipCfg: {
        customContent: () => {
          return <div>tooltip</div>;
        },
      },
      nodeCfg: {
        asyncData,
      },
      markerCfg: (cfg) => {
        const { edges } = FlowData;
        return {
          position: 'right',
          // show: edges.find((item) => item.source === cfg.id),
          show: true,
          collapsed: !edges.find((item) => item.source === cfg.id),
        };
      },
      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    } as any;
    act(() => {
      render(<FlowAnalysisGraph {...props} {...config} />, container);
    });
    expect(chartRef).not.toBeUndefined();
  });
});
