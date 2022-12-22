---
title: 辐射树图
---

### 基础配置

#### width

<description>**optional** _number_ _default:_ `500`</description>

设置图表宽度。

#### height

<description>**optional** _number_ _default:_ `500`</description>

设置图表高度。

#### data

数据，详见示例代码。

```ts
// 具体参考示例代码
interface Data {
  id: string;
  value: {
    id: string;
    value: string;
  };
  children: Data[];
}
```

#### nodeCfg

节点配置

##### type

<description>**optional** _`string`_</description>

节点类型，默认 `circle`, 支持 icon-node，内置节点包括 icon-node ,card，circle，rect，ellipse，diamond，triangle，star，image，modelRect，donut，这些内置节点的默认样式分别如下图所示。<br /> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*FY3RTbDCz_8AAAAAAAAAAABkARQnAQ' width='750' height='100' alt='img'/> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*NRJ7RpkMPNsAAAAAAAAAAAAAARQnAQ' width='50' alt='img'/>

##### size

<description>**optional** _Number[] | false | [100, 44]_</description>

节点的（最小）大小，部分图表可能会根据节点内容自适应大小。

##### style

<description>**optional** _object | Function_</description>

节点样式, 支持回调。

```ts
{
  style: {
    stroke: 'red';
  }
}
```

##### labelCfg

<description>**optional** _object_</description>

节点文本样式, style 支持回调。

```ts
{
  labelCfg: {
    style: {
      fill: 'red';
    }
  }
}
```

##### nodeStateStyles

<description>**optional** _object_</description>

节点在不同状态下的样式配置项。

```ts
{
  hover: {
    stroke: '#1890ff',
    lineWidth: 2,
  },
}
```

#### edgeCfg

边配置

##### type

边类型，默认 'polyline'

- line：直线，不支持控制点；
- polyline：折线，支持多个控制点；
- arc：圆弧线；
- quadratic：二阶贝塞尔曲线；
- cubic：三阶贝塞尔曲线；
- cubic-vertical：垂直方向的三阶贝塞尔曲线，不考虑用户从外部传入的控制点；
- cubic-horizontal：水平方向的三阶贝塞尔曲线，不考虑用户从外部传入的控制点；
- loop：自环。

这些内置边的默认样式分别如下图所示。<br /> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*H6Y5SrPstw4AAAAAAAAAAABkARQnAQ' width='750' height='120' alt='img'/>

##### label

<description>**optional** _object_</description>

边文本样式, style 支持回调。

```ts
{
  label: {
    content: string | ((edge: EdgeCfg) => string);
    style: {
      fill: 'red';
    }
  }
}
```

##### startArrow

<description>**optional** _object_</description>

边开始箭头。

```ts
interface ArrowConfig {
  /** 箭头类型 */
  type?: 'vee' | 'triangle';
  /** 偏移量 */
  d?: number;
  /** 绘制路径 */
  path?: string;
  /** 描边 */
  stroke?: string;
  /** 填充 */
  fill?: string;
}
// eg
{
  startArrow: {
    fill: 'red';
  },
}
```

##### endArrow

<description>**optional** _object_</description>

边结束箭头。

```ts
{
  endArrow: {
    fill: 'red';
  },
}
```

##### edgeStateStyles

<description>**optional** _object_</description>

边在不同状态下的样式配置项。

```ts
{
  hover: {
    stroke: '#1890ff',
    lineWidth: 2,
  },
}
```

#### behaviors

<description>**optional** _Number[]_</description>

交互模式， 默认值 `['drag-canvas', 'zoom-canvas']`。

- drag-canvas: 拖拽画布
- scroll-canvas: 滚轮滚动画布
- zoom-canvas: 缩放画布
- drag-node: 拖拽节点


#### animate

<description>**optional** _Boolean_</description>

是否开启动画，默认值 `true`。

#### autoFit

<description>**optional** _Boolean_</description>

是否缩放节点大小自适应容器，默认为 true。

#### minimapCfg

<description>**optional** _objecr_</description>

迷你 map 配置。

```ts
interface MiniMapConfig {
  show?: boolean;
  viewportClassName?: string;
  type?: 'default' | 'keyShape' | 'delegate';
  size?: number[];
  delegateStyle?: ShapeStyle;
  refresh?: boolean;
  padding?: number;
}
```

#### layout

<description>**optional** _object_</description>

布局。

```ts
{
  // 方向
  direction: 'LR',
  nodeSep: 20,
  rankSep: 100,
}
```

### 方法

[详见](/zh/docs/api/common-graph/common-graph#方法)

### 事件

[详见](/zh/docs/api/common-graph/common-graph#事件)
