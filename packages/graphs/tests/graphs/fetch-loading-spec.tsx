import React, { useRef } from 'react';
import { renderHook } from '@testing-library/react-hooks/server';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { RadialGraph } from '../../src';
import { RadialData } from '../data';
const refs = renderHook(() => useRef()) as any;

describe('RadialGraph contentmenu', () => {
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

  it('explore', () => {
    const fetchData = (node): Promise<any> => {
      return new Promise((resolve, reject) => {
        const data = new Array(Math.ceil(Math.random() * 10) + 2).fill('').map((_, i) => i + 1);
        setTimeout(() => {
          resolve({
            nodes: [
              {
                ...node,
              },
            ].concat(
              data.map((i) => {
                return {
                  id: `${node.id}-${i}`,
                  label: `e${i}`,
                };
              }),
            ),
            edges: data.map((i) => {
              return {
                source: node.id,
                target: `${node.id}-${i}`,
              };
            }),
          });
        }, 1000);
      });
    };

    const asyncData = async (node) => {
      return await fetchData(node);
    };

    const config = {
      data: RadialData,
      autoFit: false,
      layout: {
        unitRadius: 80,
        /** 节点直径 */
        nodeSize: 20,
        /** 节点间距 */
        nodeSpacing: 10,
      },
      nodeCfg: {
        asyncData,
        size: 20,
        style: {
          fill: '#fff',
          stroke: 'yellow',
        },
        labelCfg: {
          style: {
            fontSize: 5,
            fill: 'red',
          },
        },
      },
      menuCfg: {
        customContent: (e) => {
          return (
            <div>
              <button
                onClick={() => {
                  // eslint-disable-next-line no-console
                  console.log(e.item, refs.current.emit('node:dblclick', e));
                }}
              >
                拓展
              </button>
            </div>
          );
        },
      },
      edgeCfg: {
        style: {
          lineWidth: 1,
        },
        endArrow: {
          d: 10,
          size: 2,
        },
      },
      fetchLoading: <div>custom loading</div>,
      onReady: (graph) => {
        refs.current = graph;
      },
    };
    act(() => {
      ReactDOM.render(<RadialGraph {...config} />, container);
    });
    const menuContainer = document.querySelector('.g6-component-meu');
    expect(menuContainer).not.toBeUndefined();
  });
});
