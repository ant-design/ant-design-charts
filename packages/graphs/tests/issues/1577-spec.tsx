import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { FlowAnalysisGraph } from '../../src';
import { FlowData } from '../data';

describe('Image node', () => {
  let container;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it('Render', () => {
    let chartRef = undefined;
    const props = {
      className: 'container',
      onReady: (ref) => {
        chartRef = ref;
      },
    };

    const config = {
      data: FlowData,
      level: 2,
      nodeCfg: {
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
      markerCfg: (cfg) => {
        const { edges } = FlowData;
        return {
          position: 'right',
          show: edges.find((item) => item.source === cfg.id),
          collapsed: !edges.find((item) => item.source === cfg.id),
        };
      },
      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    } as any;
    act(() => {
      ReactDOM.render(<FlowAnalysisGraph {...props} {...config} />, container);
    });
    expect(chartRef).not.toBeUndefined();
  });
});
