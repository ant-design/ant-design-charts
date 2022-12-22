import React from 'react';
import ReactDOM from 'react-dom';
import { MindMapGraph } from '@ant-design/graphs';

const MindMapGraphGraph = () => {
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
              text: '占比',
              value: '30%',
            },
          ],
        },
        children: [
          {
            id: 'A11',
            value: {
              title: '广东',
              items: [
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A12',
            value: {
              title: '广西',
              items: [
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
          {
            id: 'A13',
            value: {
              title: '海南',
              items: [
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
        ],
      },
      {
        id: 'A2',
        value: {
          title: '华北',
          items: [
            {
              text: '占比',
              value: '30%',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
            },
          ],
        },
        children: [
          {
            id: 'A2-1',
            value: {
              title: '华北',
              items: [
                {
                  text: '占比',
                  value: '30%',
                },
              ],
            },
          },
        ],
      },
    ],
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
  const config = {
    data: data,
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
      size: nodeSize,
      padding: 4,
      style: {
        stroke: '#5AD8A6',
      },
      items: {
        padding: [4, 0],
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
      },
    },
    markerCfg: (cfg) => {
      const { children = [], id } = cfg;
      if (id === 'A0') {
        return [
          {
            position: 'left',
            show: !!children?.length,
            collapsed: !children?.length,
          },
          {
            position: 'right',
            show: !!children?.length,
            collapsed: !children?.length,
          },
        ];
      }
      return {
        position: 'right',
        show: !!children?.length,
        collapsed: !children?.length,
      };
    },
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
  };

  return (
    <div style={{ width: containerWidth }}>
      <div style={{ display: 'flex', height: '32px', textAlign: 'center' }}>{LevelFC()}</div>
      <MindMapGraph {...config} />
    </div>
  );
};

ReactDOM.render(<MindMapGraphGraph />, document.getElementById('container'));
