# @ant-design/graphs

<div align="center">

A React relation graphs component library, based on [G6](https://github.com/antvis/G6).

![npm](https://img.shields.io/npm/v/@ant-design/graphs)
![npm](https://img.shields.io/npm/dm/@ant-design/graphs)
[![GitHub stars](https://img.shields.io/github/stars/ant-design/ant-design-charts)](https://github.com/ant-design/ant-design-charts/stargazers)
[![npm License](https://img.shields.io/npm/l/@ant-design/charts.svg)](https://www.npmjs.com/package/@ant-design/charts)

<p align="center">
  <a href="https://charts.ant.design/">Website</a> •
  <a href="https://charts.ant.design/en/docs/manual/getting-started">Quick Start</a> •
  <a href="https://charts.ant.design/en/examples/gallery">Gallery</a> •
  <a href="https://charts.ant.design/en/docs/manual/faq">FAQ</a> •
  <a href="https://www.yuque.com/antv/g2plot">Blog</a>
</p>

</div>

## Case

<img src="https://gw.alipayobjects.com/zos/antfincdn/IJhgY4ZtHf/4ca28c72-d60c-42ca-b562-1cec9489f409.png" width=375 />
<img src="https://gw.alipayobjects.com/zos/antfincdn/SM9hvYbqYB/1caef0d3-78cf-4f7d-aaca-59a361cae2ec.png" width=375 />
<img src="https://gw.alipayobjects.com/zos/antfincdn/p7h4IUyVXM/680af564-b119-4e38-9626-bb9917424ec7.png" width=375 />
<img src="https://gw.alipayobjects.com/zos/antfincdn/JailFwu5B3/042ce37a-9b73-4218-ae2c-dcdb5994379a.png" width=375 />
<img src="https://gw.alipayobjects.com/zos/antfincdn/9Q5ftNEgkR/f9f6ae73-9a2c-4c8d-8ce2-919b16acdad0.png" width=375 />
<img src="https://gw.alipayobjects.com/zos/antfincdn/tCykDJncjJ/2200d0c0-40bd-46a8-a885-30393fb165b1.png" width=375 />


## ✨ Features

- Easy to use
- TypeScript


## 📦 Installation

```bash | pure
$ npm install @ant-design/graphs
```


## 🔨 Usage

```tsx | pure
import React from 'react';
import { DecompositionTreeGraph } from '@ant-design/graphs';

const DemoDecompositionTreeGraph = () => {
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
        children: [
          {
            id: 'A11',
            value: {
              title: '广东',
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
          {
            id: 'A12',
            value: {
              title: '广西',
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
          {
            id: 'A13',
            value: {
              title: '海南',
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
      },
      {
        id: 'A2',
        value: {
          title: '华北',
          items: [
            {
              text: '595万',
            },
            {
              text: '占比',
              value: '30%',
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
            },
          ],
        },
      },
    ],
  };

  const config = {
    data,
    behaviors: ['drag-canvas', 'zoom-canvas', 'drag-node'],
    nodeCfg: {
      title: {
        style: (cfg) => {
          return {
            fill: cfg?.value?.title === '青年' ? 'yellow' : '#fff',
          };
        },
      },
      items: {
        containerStyle: {
          fill: '#fff',
        },
        style: (cfg, group, type) => {
          const styles = {
            value: {
              fill: '#52c41a',
            },
            text: {
              fill: '#aaa',
            },
            icon: {
              width: 10,
              height: 10,
            },
          };
          return styles[type];
        },
      },
      nodeStateStyles: {
        hover: {
          stroke: '#1890ff',
          lineWidth: 2,
        },
      },
      style: {
        radius: [2, 2, 2, 2],
      },
    },
    markerCfg: (cfg) => {
      const { children } = cfg;
      return {
        show: children?.length,
      };
    },
  };

  return <DecompositionTreeGraph {...config} />;
};

export default DemoDecompositionTreeGraph;
```



## 📜 Document & API

See chart API for details. Common props:

```ts

// Graph 通用配置
export interface CommonConfig extends GraphContainerConfig {
  data: Datum;
  /** 是否缩放节点大小自适应容器 */
  autoFit?: boolean;
  
  /** 是否将图平移到中心位置 */
  fitCenter?: boolean;
  
  width?: number;
  height?: number;
  pixelRatio?: number;
  
  /** 不同组件 layout 有差别，参考对应组件文档 */
  layout?: any;
  
  /** 边配置 */
  edgeCfg?: EdgeCfg;
  
  /** 节点配置 */
  nodeCfg?: NodeCfg;
  
  /** marker 配置 */
  markerCfg?: IMarkerCfg;
  
  /** 迷你地 */
  minimapCfg?: MiniMapConfig;
  
  /** 交互组件 */
  toolbarCfg?: ToolbarCfg;
  
  /** 提示 */
  tooltipCfg?: TooltipCfg;
  
  /** 交互行为 */
  behaviors?: string[];
  
  /** 是否开启动画 */
  animate?: boolean;
  
  /**
   * @title 是否自定义布局
   * @description 开启后，layout 失效，使用 data 里面的 x/y 进行数据布局
   * @example
   * ```ts
   *  {
   *   id: '-3',
   *   x: 100,
   *   y: 100,
   *   value: {
   *     title: '来源页面A',
   *     items: [
   *       {
   *         text: '曝光PV',
   *         value: '10.30万',
   *         icon: 'https://gw.alipayobjects.com/zos/antfincdn/iFh9X011qd/7797962c-04b6-4d67-9143-e9d05f9778bf.png',
   *       },
   *     ],
   *   },
   *  },
   * ```
   * @default false
   */
  customLayout?: boolean;
  
  /** 图表渲染完成回调 */
  onReady?: (graph: IGraph) => void;
}
```


## 🤝 How to Contribute

Your contributions are always welcome! Please Do have a look at the [issues](https://github.com/ant-design/ant-design-charts/issues) first.


## 📧 Contact us

DingTalk group number: `44788198 `.

<img src="https://gw.alipayobjects.com/zos/antfincdn/bi1LxWeIEj/32f85bbf-a06e-4046-96e5-417126bffeaf.png" width="200" height="266" />


## License

MIT
