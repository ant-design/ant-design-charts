import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { DecompositionTreeGraph } from '../../src';
import { TreeData } from '../data';

describe('Get children types', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  it('types', () => {
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
    const level = 2;
    const chartProps = {
      data: TreeData,
      level,
      nodeCfg: {
        getChildren,
      },
    };
    act(() => {
      ReactDOM.render(<DecompositionTreeGraph {...props} {...chartProps} />, container);
    });
    expect(chartRef).not.toBeUndefined();
  });
});
