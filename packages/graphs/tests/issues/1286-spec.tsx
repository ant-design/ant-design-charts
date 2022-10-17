import React from 'react';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import { OrganizationGraph } from '../../src';

describe('Type NodeData', () => {
  let container;
  const data = {
    id: 'root',
    value: {
      name: 'Joel Alan',
      title: 'CEO',
      // 建议使用 bae64 数据
      icon: 'https://avatars.githubusercontent.com/u/31396322?v=4',
    },
    children: [
      {
        id: 'joel',
        value: {
          name: 'Joel Alan',
        },
        children: [
          {
            id: 'c1',
            value: {
              name: 'c1',
            },
            children: [
              {
                id: 'c1-1',
                value: {
                  name: 'c1-1',
                },
              },
              {
                id: 'c1-2',
                value: {
                  name: 'c1-2',
                },
                children: [
                  {
                    id: 'c1-2-1',
                    value: {
                      name: 'c1-2-1',
                    },
                  },
                  {
                    id: 'c1-2-2',
                    value: {
                      name: 'c1-2-2',
                    },
                  },
                ],
              },
            ],
          },
          {
            id: 'c2',
            value: {
              name: 'c2',
            },
          },
          {
            id: 'c3',
            value: {
              name: 'c3',
            },
            children: [
              {
                id: 'c3-1',
                value: {
                  name: 'c3-1',
                },
              },
              {
                id: 'c3-2',
                value: {
                  name: 'c3-2',
                },
                children: [
                  {
                    id: 'c3-2-1',
                    value: {
                      name: 'c3-2-1',
                    },
                  },
                  {
                    id: 'c3-2-2',
                    value: {
                      name: 'c3-2-2',
                    },
                  },
                  {
                    id: 'c3-2-3',
                    value: {
                      name: 'c3-2-3',
                    },
                  },
                ],
              },
              {
                id: 'c3-3',
                value: {
                  name: 'c3-3',
                },
              },
            ],
          },
        ],
      },
    ],
  };
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    // document.body.removeChild(container);
    // container = null;
  });

  it('Render data', () => {
    let chartRef = undefined;
    const props = {
      className: 'container',
      onReady: (ref) => {
        chartRef = ref;
      },
    };
    const chartProps = {
      data,
      behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    };
    act(() => {
      render(<OrganizationGraph {...props} {...chartProps} />, container);
    });
    expect(chartRef).not.toBeUndefined();
    // const node = chartRef.findById('2');
    // const { x, y } = node.getModel();
    expect(1).toBe(1);
  });
});
