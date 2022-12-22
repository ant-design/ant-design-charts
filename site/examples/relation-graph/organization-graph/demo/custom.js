import React from 'react';
import ReactDOM from 'react-dom';
import { OrganizationGraph } from '@ant-design/graphs';

const DemoOrganizationGraph = () => {
  const data = {
    id: 'root',
    value: {
      name: '赵某某',
    },
    children: [
      {
        id: 'jug',
        value: {
          name: '审判长',
          level: 2,
        },
        children: [
          {
            id: 'joel',
            value: {
              name: '一审',
              level: 1,
            },
            children: [
              {
                id: 'c1',
                value: {
                  name: '原告',
                  level: 2,
                },
                children: [
                  {
                    id: 'c1-1',
                    value: {
                      name: '中纺原料xx有限公司',
                    },
                    children: [
                      {
                        id: 'c1-1-1',
                        value: {
                          name: '法定代表人',
                        },
                        children: [
                          {
                            id: 'c1-1-1-1',
                            value: {
                              name: '刘某某',
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: 'c1-2',
                    value: {
                      name: '委托诉讼代理人',
                    },
                    children: [
                      {
                        id: 'c1-2-1',
                        value: {
                          name: '北京xx律师事务所',
                        },
                      },
                      {
                        id: 'c1-2-2',
                        value: {
                          name: '赵某某',
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: 'c2',
                value: {
                  name: '被告1',
                  level: 2,
                },
                children: [
                  {
                    id: 'c2-1',
                    value: {
                      name: '北京西郊xxxx农副产品批发市场有限公司',
                    },
                    children: [
                      {
                        id: 'c2-1-1',
                        value: {
                          name: '法定代表人',
                        },
                        children: [
                          {
                            id: 'c2-1-1-1',
                            value: {
                              name: '李某某',
                            },
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: 'c2-2',
                    value: {
                      name: '委托诉讼代理人',
                    },
                    children: [
                      {
                        id: 'c2-2-1',
                        value: {
                          name: '北京xx律师事务所',
                        },
                      },
                      {
                        id: 'c2-2-2',
                        value: {
                          name: '张某某',
                        },
                      },
                    ],
                  },
                ],
              },
              {
                id: 'c3',
                value: {
                  name: '被告2',
                  level: 2,
                },
                children: [
                  {
                    id: 'c3-1',
                    value: {
                      name: '徐某某',
                    },
                  },
                  {
                    id: 'c3-2',
                    value: {
                      name: '委托诉讼代理人',
                    },
                    children: [
                      {
                        id: 'c3-2-1',
                        value: {
                          name: '北京xx律师事务所',
                        },
                      },
                      {
                        id: 'c3-2-2',
                        value: {
                          name: '张某某',
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };
  const getTextStyle = (level) => {
    switch (level) {
      case 1:
        return 18;
      case 2:
        return 12;
      default:
        return 12;
    }
  };

  const getRootTextAttrs = () => {
    return {
      fontSize: getTextStyle(1),
      fontWeight: 'bold',
      fill: '#fff',
    };
  };

  const getSecondTextStyle = () => {
    return {
      fontSize: getTextStyle(2),
      color: '#000',
    };
  };

  const getRootNodeStyle = () => {
    return {
      fill: '#1E88E5',
      stroke: '#1E88E5',
      radius: 5,
    };
  };

  const getSecondNodeStyle = () => {
    return {
      fill: '#e8e8e8',
      stroke: '#e8e8e8',
      radius: 5,
    };
  };

  const calcStrLen = function calcStrLen(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) > 0 && str.charCodeAt(i) < 128) {
        len++;
      } else {
        len += 2;
      }
    }
    return len;
  };

  const config = {
    nodeCfg: {
      size: [40, 40],
      autoWidth: true,
      padding: 10,
      style: (item) => {
        const { level } = item.value;
        return {
          fill: 'transparent',
          stroke: 'transparent',
          radius: 4,
          cursor: 'pointer',
          ...(level === 1 ? getRootNodeStyle() : {}),
          ...(level === 2 ? getSecondNodeStyle() : {}),
        };
      },
      nodeStateStyles: {
        hover: {
          lineWidth: 2,
          stroke: '#96DEFF',
        },
      },
      label: {
        style: (cfg, group, type) => {
          const { level, href } = cfg.value;

          if (type !== 'name') {
            return {};
          }
          return {
            fontSize: getTextStyle(),
            cursor: 'pointer',
            fill: href ? '#1890ff' : '#000',
            ...(level === 1 ? getRootTextAttrs() : {}),
            ...(level === 2 ? getSecondTextStyle() : {}),
          };
        },
      },
      anchorPoints: [
        [0, 0.5],
        [1, 0.5],
      ],
    },
    edgeCfg: {
      type: 'polyline',
      style: {
        stroke: '#000',
        endArrow: false,
      },
    },
    markerCfg: (cfg) => {
      const { level, direction } = cfg.value;
      const show = level !== 1 && cfg.children && cfg.children.length > 0;
      return {
        position: direction,
        show,
      };
    },
    layout: {
      type: 'mindmap',
      direction: 'H',
      getWidth: (cfg) => {
        const { name, level } = cfg.value;
        const fontSize = getTextStyle(level);
        const width = (fontSize * calcStrLen(name)) / 2;
        return width;
      },
      getHeight: () => {
        return 25;
      },
      getVGap: () => {
        return 20;
      },
      getHGap: () => {
        return 40;
      },
      getSide: (d) => {
        return d.data.value.direction === 'left' ? 'left' : 'right';
      },
    },
    autoFit: true,
    fitCenter: true,
    animate: false,
    behaviors: ['drag-canvas', 'zoom-canvas'],
    onReady: (graph) => {
      graph.on('node:click', (evt) => {
        const { item, target } = evt;
        const { value } = item.get('model');
        if (value.href) {
          window.open(value.href);
        }
      });
    },
  };
  return <OrganizationGraph {...config} data={data} />;
};

ReactDOM.render(<DemoOrganizationGraph />, document.getElementById('container'));
