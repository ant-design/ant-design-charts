import React, { useRef } from 'react';
import { render } from '../../src/utils';
import { act } from 'react-dom/test-utils';
import { FileTreeGraph } from '../../src';
import { FileData } from '../data';

describe('File Tree', () => {
  let container;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
  it('render', () => {
    let chartRef = undefined;
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
        // customContent: (item, group, cfg) => {
        //   const { startX, startY, width } = cfg;
        //   const { text } = item;
        //   const customGroup = group.addGroup({
        //     name: 'custom-group',
        //   });
        //   customGroup.addShape('text', {
        //     attrs: {
        //       textBaseline: 'middle',
        //       textAlign: 'start',
        //       x: text === 'Modeling Methods' ? startX - width / 2 : startX,
        //       y: startY,
        //       text,
        //       fill: 'red',
        //     },
        //     // group 内唯一字段
        //     name: `text-shape`,
        //   });
        //   return customGroup;
        // },
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
          position: 'right' as 'right',
          // show: false,
          style: {
            fill: '#fff',
            stroke: '#999',
          },
        };
      },

      onReady: (graph) => {
        chartRef = graph;
        graph.on('add:children', async (e) => {
          // const data = graph.findDataById(e.item.getID());
          // if (!data.children) data.children = [];
          // const { id, value } = e.item.getModel();
          // const appendChildren = await getChildren();
          // data.children.push(...appendChildren);
          // graph.updateChildren(data.children, data.id);
        });
      },
    };
    act(() => {
      render(<FileTreeGraph {...chartProps} />, container);
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
