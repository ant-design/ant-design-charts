import React, { useRef } from 'react';
import { renderHook } from '@testing-library/react-hooks/server';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import { RadialTreeGraph } from '../../src';

const refs = renderHook(() => useRef()) as any;

describe('RadialTreeGraph contentmenu', () => {
  let container;
  const data = {
    id: 'Modeling Methods',
    children: [
      {
        id: 'Classification',
        children: [
          { id: 'Logistic regression', value: 'Logistic regression' },
          { id: 'Linear discriminant analysis', value: 'Linear discriminant analysis' },
          { id: 'Rules', value: 'Rules' },
          { id: 'Decision trees', value: 'Decision trees' },
          { id: 'Naive Bayes', value: 'Naive Bayes' },
          { id: 'K nearest neighbor', value: 'K nearest neighbor' },
          { id: 'Probabilistic neural network', value: 'Probabilistic neural network' },
          { id: 'Support vector machine', value: 'Support vector machine' },
        ],
        value: 'Classification',
      },
    ],
    value: 'Modeling Methods',
  };

  beforeEach(() => {
    container = document.createElement('div');
    container.className = 'container';
    container.style.height = '600px';
    document.body.appendChild(container);
  });
  afterAll(() => {
    const containers = document.getElementsByClassName('container');
    Array.from(containers).forEach((el) => {
      document.body.removeChild(el);
    });
    container = null;
  });

  it('menu', () => {
    const config = {
      data,
      nodeConfig: {
        type: 'image',
        img: 'https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*w5uESbSe430AAAAAAAAAAABkARQnAQ',
      },
      menuCfg: {
        customContent: (e) => {
          return (
            <div>
              <button
                onClick={() => {
                  console.log(e.item);
                }}
              >
                点我
              </button>
            </div>
          );
        },
      },
      onReady: (graph) => {
        refs.current = graph;
      },
    } as any;
    act(() => {
      render(<RadialTreeGraph {...config} />, container);
    });
    const menuContainer = document.querySelector('.g6-component-meu');
    expect(menuContainer).not.toBeUndefined();
  });
});
