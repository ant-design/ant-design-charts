// @ts-nocheck
import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { FlowAnalysisGraph } from '../../src';
import { FlowData } from '../data';

describe('Type NodeData', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  const dataRef = { current: {} };
  it('Render data', () => {
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

    const chartProps = {
      data: FlowData,
      fitCenter: false,
      nodeCfg: {
        asyncData,
        size: [140, 25],
      },
      markerCfg: (cfg) => {
        const { id } = cfg;
        const { edges } = FlowData;
        if (id === '0') {
          return [
            {
              position: 'left',
              show: true,
              collapsed: !edges.find((item) => item.source === cfg.id),
            },
            {
              position: 'right',
              show: true,
              collapsed: !edges.find((item) => item.source === cfg.id),
            },
          ];
        }
        // const { edges } = cfg.graphData;
        return {
          position: 'right',
          show: true,
          collapsed: !edges.find((item) => item.source === cfg.id),
        };
      },
      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    };
    act(() => {
      ReactDOM.render(<FlowAnalysisGraph {...props} {...chartProps} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    const { _graphId } = chartRef.findById('-3')?.getModel();
    expect(_graphId).toBeDefined();
    expect(
      chartRef
        .findById('0')
        .get('group')
        .getChildren()
        .filter((item) => item.cfg.name.startsWith('collapse-icon')).length,
    ).toBe(2);
  });
});
