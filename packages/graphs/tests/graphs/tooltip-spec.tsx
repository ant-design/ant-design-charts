import React, { useRef } from 'react';
import { renderHook } from '@testing-library/react-hooks';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { DecompositionTreeGraph } from '../../src';

const refs = renderHook(() => useRef()) as any;

describe('DecompositionTreeGraph tooltip', () => {
  let container;
  const data = {
    id: 'A0',
    value: {
      title: '订单金额',
      items: [
        {
          text: '3031万',
        },
      ],
    },
    children: [
      {
        id: 'A1',
        value: {
          title: '华南',
          items: [
            {
              text: '1152万',
            },
            {
              text: '占比',
              value: '30%',
            },
          ],
        },
      },
    ],
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

  it('tooltip', () => {
    const config = {
      data,
      nodeConfig: {
        type: 'rect',
      },
      markerCfg: (cfg) => {
        const { children } = cfg;
        return {
          show: children?.length,
        };
      },
      tooltipCfg: {
        container: document.getElementsByTagName('body')[0],
        shouldBegin: (e) => {
          return true;
        },
        customContent: (e) => {
          return 'custom content';
        },
      },
      onReady: (graph) => {
        refs.current = graph;
      },
    } as any;
    act(() => {
      ReactDOM.render(<DecompositionTreeGraph {...config} />, container);
    });
    const tooltipContainer = document.querySelector('.g6-component-tooltip');
    expect(tooltipContainer).not.toBeUndefined();
    const node = refs.current.getNodes()[0];
    refs.current.emit('node:mouseenter', { item: node });
    const tooltipContent = document.querySelector('.g6-tooltip');
    expect(tooltipContent.innerHTML).toBe('custom content');
  });
});
