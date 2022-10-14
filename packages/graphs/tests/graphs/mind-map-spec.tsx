import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import { MindMapGraph } from '../../src';
import { NoTitleTreeData } from '../data';

describe('Mind Map', () => {
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
                items: [
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
      const asyncData = await fetchData();
      return asyncData;
    };
    const level = [-2, -1, 0, 1, 2];
    const levelTexts = level.map((l) => {
      if (l < 0) return `${Math.abs(l)}层上游`;
      if (l > 0) return `${Math.abs(l)}层下游`;
      return `主节点`;
    });
    const containerWidth = 800;
    const width = 120;
    const LevelFC = () => (
      <React.Fragment>
        {levelTexts.map((l) => (
          <div
            key={l}
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                width,
                display: 'block',
                height: '32px',
                lineHeight: '32px',
                backgroundColor: '#f0f0f0',
                borderRadius: '2px',
                color: 'rgba(0, 0, 0, 0.65)',
              }}
            >
              {l}
            </span>
          </div>
        ))}
      </React.Fragment>
    );

    const nodeSize = [width, 40];
    const chartProps = {
      data: NoTitleTreeData,
      autoFit: false,
      width: containerWidth,
      // level: 5,
      layout: {
        getHeight: () => {
          return 40;
        },
        getWidth: () => {
          return nodeSize[0];
        },
        getVGap: () => {
          return 16;
        },
        getHGap: () => {
          return (containerWidth / level.length - width) / 2;
        },
      },
      // level,
      nodeCfg: {
        getChildren,
        size: nodeSize,
        padding: 4,
        style: {
          stroke: '#5AD8A6',
        },
        items: {
          padding: 0,
        },
        customContent: (item, group, cfg) => {
          const { startX, startY, width } = cfg;
          const { text, value, icon, trend } = item;
          const tagWidth = 28;
          const tagHeight = 16;
          group?.addShape('rect', {
            attrs: {
              x: 0,
              y: 0,
              width: nodeSize[0],
              height: nodeSize[1] + 8,
              fill: '#5AD8A6',
              fillOpacity: 0.1,
            },
            // group 内唯一字段
            name: `container-${Math.random()}`,
          });
          group?.addShape('rect', {
            attrs: {
              x: startX,
              y: startY,
              width: tagWidth,
              height: tagHeight,
              fill: '#47c796',
            },
            // group 内唯一字段
            name: `tag-${Math.random()}`,
          });
          group?.addShape('text', {
            attrs: {
              textBaseline: 'middle',
              textAlign: 'center',
              x: startX + tagWidth / 2,
              y: startY + tagHeight / 2,
              text: '人群',
              fill: '#fff',
              fontSize: 10,
            },
            // group 内唯一字段
            name: `text-${Math.random()}`,
          });
          group?.addShape('text', {
            attrs: {
              textBaseline: 'middle',
              textAlign: 'start',
              x: startX + tagWidth + 4,
              y: startY + tagHeight / 2,
              text: '人群服务名称',
              fill: 'rgba(0,0,0,.65)',
              fontSize: 10,
            },
            // group 内唯一字段
            name: `text-${Math.random()}`,
          });
          const textMargin = 10;
          const sense = group?.addShape('text', {
            attrs: {
              textBaseline: 'top',
              textAlign: 'start',
              x: startX,
              y: startY + tagHeight + textMargin,
              text: '所属场景：',
              fill: 'rgba(0,0,0,.45)',
              fontSize: 10,
            },
            // group 内唯一字段
            name: `text-${Math.random()}`,
          });
          group?.addShape('text', {
            attrs: {
              textBaseline: 'top',
              textAlign: 'start',
              x: sense.getBBox().maxX,
              y: startY + tagHeight + textMargin,
              text: '这是场景名称',
              fill: 'rgba(0,0,0,.45)',
              fontSize: 10,
            },
            // group 内唯一字段
            name: `text-${Math.random()}`,
          });
          // 行高
          return 14;
        },
      },
      markerCfg: (cfg) => {
        const { children = [], id } = cfg;
        if (id === 'A0') {
          return [
            {
              position: 'left' as const,
              show: !!children?.length,
              collapsed: !children?.length,
            },
            {
              position: 'right' as const,
              show: !!children?.length,
              collapsed: !children?.length,
            },
          ];
        }
        return {
          position: 'right' as const,
          show: !!children?.length,
          collapsed: !children?.length,
        };
      },
    };

    act(() => {
      ReactDOM.render(
        <div style={{ width: containerWidth }}>
          <div style={{ display: 'flex', height: '32px', textAlign: 'center' }}>{LevelFC()}</div>
          <MindMapGraph {...props} {...chartProps} />
        </div>,
        container,
      );
    });
    expect(chartRef).not.toBeUndefined();
    expect(
      chartRef
        .findById('A0')
        .get('group')
        .getChildren()
        .filter((item) => item.cfg.name.startsWith('collapse-icon')).length,
    ).toBe(2);
  });
});
