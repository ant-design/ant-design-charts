import React, { useRef } from 'react';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import { FileTreeGraph } from '../../src';
import { FileData } from '../data';

describe('Level', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  it('show', () => {
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
          resolve(
            [1, 2].map(() => ({
              id: 'A2' + Math.random().toString(),
              value: {
                text: '异步节点' + Math.random().toString(),
              },
            })),
          );
        }, 1000);
      });
    };

    const getChildren = async (): Promise<any> => {
      return await fetchData();
    };
    const chartProps = {
      data: FileData,
      nodeCfg: {
        getChildren,
      },
      edgeCfg: {
        style: (cfg) => {
          if (cfg.id === '0') {
            return {
              stroke: 'transparent',
            };
          }
          return {
            stroke: '#ccc',
            radius: 6,
          };
        },
      },
      markerCfg: (cfg) => {
        return {
          position: 'left' as 'left',
          style: {
            fill: '#fff',
            stroke: '#999',
          },
        };
      },
    };
    act(() => {
      render(<FileTreeGraph {...props} {...chartProps} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    expect(
      chartRef
        .findById('0-1')
        .get('group')
        .getChildren()
        .filter((item) => item.cfg.name === 'text-shape').length,
    ).toBe(1);
  });
});
