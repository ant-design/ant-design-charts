---
title: 缩进树图
---

#### width

<description>**optional** _number_ _default:_ `500`</description>

设置图表宽度。

#### height

<description>**optional** _number_ _default:_ `500`</description>

设置图表高度。

#### data

数据，详见示例代码，`title`、`body`、`footer` 仅对 nodeType: `card-node` 生效， 其它 nodeType 类型使用 label。

```ts
// value、valueStyle 仅对 footer 生效
interface Items {
  content: string | number;
  value?: string | number;
  style?: CSSStyleDeclaration;
  valueStyle?: CSSStyleDeclaration;
}

type NodeConfig = string | number | Items;

// 具体参考示例代码
interface Data {
  id: string;
  title?: NodeConfig;
  body?: NodeConfig;
  footer?: NodeConfig;
  children?: Data[];
  [key: string]?: unknow
}
```

#### edgeType

边类型，默认 'cubic-horizontal'

- line：直线，不支持控制点；
- polyline：折线，支持多个控制点；
- arc：圆弧线；
- quadratic：二阶贝塞尔曲线；
- cubic：三阶贝塞尔曲线；
- cubic-vertical：垂直方向的三阶贝塞尔曲线，不考虑用户从外部传入的控制点；
- cubic-horizontal：水平方向的三阶贝塞尔曲线，不考虑用户从外部传入的控制点；
- loop：自环。

这些内置边的默认样式分别如下图所示。<br /> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*H6Y5SrPstw4AAAAAAAAAAABkARQnAQ' width='750' height='120' alt='img'/>

#### nodeType

<description>**optional** _`card-node`_</description>

节点类型，默认 `card-node`, 内置节点包括 card-node，circle，rect，ellipse，diamond，triangle，star，image，modelRect，donut，这些内置节点的默认样式分别如下图所示。<br /> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*FY3RTbDCz_8AAAAAAAAAAABkARQnAQ' width='750' height='100' alt='img'/> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*NRJ7RpkMPNsAAAAAAAAAAAAAARQnAQ' width='50' alt='img'/>

#### nodeSize

<description>**optional** _Number[] | false | [120, 40]_</description>

节点的（最小）大小，部分图表可能会根据节点内容自适应大小。

#### nodeStyle

<description>**optional** _object | Function_</description>

节点样式。

```ts
{
  nodeStyle: {
    stroke: '#40a9ff',
  }
}
// 回调模式
{
  nodeStyle: (node, graph)=>{
    return {
      stroke: '#40a9ff',
    }
  }
}
```

#### nodeStateStyles

<description>**optional** _object_</description>

节点在不同状态下的样式配置项。

```ts
{
  hover: {
    stroke: '#1890ff',
    lineWidth: 2,
  },
  selected: {
    stroke: '#f00',
    lineWidth: 3,
  }
}
```

#### edgeStyle

<description>**optional** _object | Function_</description>

节点样式。

```ts
{
  edgeStyle: {
    stroke: '#40a9ff',
  }
}
// 回调模式
{
  edgeStyle: (node, graph)=>{
    /**
     * graph.findById(item.target).getModel()
     * item.source: 获取 source 数据
     * item.target: 获取 target 数据
     */
    // console.log(graph.findById(item.target).getModel());
    return {
      stroke: '#40a9ff',
      lineWidth: Math.random() * 10,
    }
  }
}
```

#### edgeStateStyles

<description>**optional** _object_</description>

边在不同状态下的样式配置项。

```ts
{
  hover: {
    stroke: '#1890ff',
    lineWidth: 2,
  },
  selected: {
    stroke: '#f00',
    lineWidth: 3,
  },
}
```

#### titleStyle

<description>**optional** _object_</description>

全局 title 样式配置，优先级低于 data 内 style.

```ts
{
  titleStyle: {
    fill: '#000';
  }
}
```

#### bodyStyle

<description>**optional** _object_</description>

全局 body 样式配置，优先级低于 data 内 style.

```ts
{
  bodyStyle: {
    fill: '#000';
  }
}
```

#### footerStyle

<description>**optional** _object_</description>

全局 footer 样式配置，优先级低于 data 内 style.

```ts
{
  footerStyle: {
    fill: '#000';
  }
}
```

#### nodeAnchorPoints

<description>**optional** _Number[]_</description>

节点的连接点 anchorPoint 指的是边连入节点的相对位置，即节点与其相关边的交点位置，默认值 `[[0.5, 0], [0.5, 1]]`。anchorPoints 是一个二维数组，每一项表示一个连接点的位置，在一个[图形 Shape](/zh/docs/manual/middle/elements/shape/shape-keyshape) 中，连接点的位置如下图所示，x 和 y 方向上范围都是 [0, 1]：<br /> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*EJTyR4j9VN4AAAAAAAAAAABkARQnAQ' width='600' height='300' alt='img'/>

#### behaviors

<description>**optional** _Number[]_</description>

交互模式， 默认值 `['drag-canvas', 'zoom-canvas']`，[详见](https://g6.antv.vision/zh/docs/manual/middle/states/defaultBehavior)。

#### collapseExpand

<description>**optional** _Boolean_</description>

是否可折叠，默认值 `true`。

#### showArrow

<description>**optional** _Boolean_</description>

是否展示尾部箭头，默认值 `true`。

#### layout

<description>**optional** _object_</description>

布局。

```ts
{
  getHeight: () => {
    // 每个节点的高度
    return 60;
  },
  getWidth: () => {
    // 每个节点的宽度
    return 16;
  },
  getVGap: () => {
    // 每个节点的垂直间隙
    return 16;
  },
  getHGap: () => {
    // 每个节点的水平间隙
    return 100;
  },
}
```
