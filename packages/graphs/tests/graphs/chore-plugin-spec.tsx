import React from 'react';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import { RadialTreeGraph } from '../../src';
import { RadialTreeData } from '../data';

describe('Chore plugin', () => {
  let container;

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

  it('plugin', () => {
    const config = {
      data: RadialTreeData,
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
      tooltipCfg: {
        show: true,
        customContent: (e) => {
          return 'custom content';
        },
      },
      minimapCfg: {
        show: true,
      },
      toolbarCfg: {
        show: true,
      },
    } as any;
    act(() => {
      render(<RadialTreeGraph {...config} />, container);
    });
    expect(document.querySelector('.g6-component-meu')).not.toBeUndefined();
    expect(document.querySelector('.charts-toolbar')).not.toBeUndefined();
    expect(document.querySelector('.g6-minimap-viewport')).not.toBeUndefined();
  });
});
