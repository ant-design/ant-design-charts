---
title: 来源去向图
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
  nodes: Array<{
    id: string;
    value: {
      title: string;
      items: Array<{
        text: string;
        value: string;
        icon: string;
      }>;
    };
  }>;
  edges: Array<{
    source: string;
    target: string;
    value: string;
  }>;
}
```

#### nodeCfg

节点配置

##### type

<description>**optional** _`string`_</description>

节点类型，默认 `indicator-card`, 修改后配置可能不生效。

##### size

<description>**optional** _Number[] | false | [120, 40]_</description>

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

##### label

<description>**optional** _object_</description>

节点文本样式, style 支持回调。

```ts
{
  label: {
    style: {
      fill: 'red';
    }
  }
}
```

##### anchorPoints

<description>**optional** _Number[]_</description>

节点的连接点 anchorPoint 指的是边连入节点的相对位置，即节点与其相关边的交点位置，默认值 `[[0.5, 0], [0.5, 1]]`。anchorPoints 是一个二维数组，每一项表示一个连接点的位置，在一个图形 Shape 中，连接点的位置如下图所示，x 和 y 方向上范围都是 [0, 1]：<br /> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*EJTyR4j9VN4AAAAAAAAAAABkARQnAQ' width='600' height='300' alt='img'/>

##### title

<description>**optional** _object_</description>

节点 title 配置。

```ts
{
  title: {
   /** title 容器样式 */
    containerStyle?: IShapeStyle;
    /** title 样式 */
    style?: ILabelStyle;
    /** 超出自动隐藏 */
    autoEllipsis?: boolean;
  },
}
```

##### items

<description>**optional** _object_</description>

节点内容配置。

```ts
{
  items?: {
    /** items 容器样式 */
    containerStyle?: IShapeStyle;
    /** item 样式 */
    style?: ILabelStyle;
    /**
     * item 布局方式<default: bundled>
     * - flex: text、value、icon 均分容器宽度
     * - bundled: text、(value、icon) 均分容器宽度(sort: true 时无效)
     * - follow: 从左到右依次排列
     */
    layout?: 'bundled' | 'flex' | 'follow';
    /**
     * 内容横向间距
     * layout: 'follow' 时生效
     */
    itemSpacing?: number;
    /** 是否根据 item 顺序绘制 */
    sort?: boolean;
    /** item 容器填充 */
    padding?: number | number[];
  };
}
```

##### padding

<description>**optional** _number | number[]_</description>

文本 padding 。

```ts
{
  padding: 8,
}
```

##### badge

<description>**optional** _Object_</description>

节点状态配置，style 支持回调。

```ts
  /** 节点标记配置 */
  badge?: {
    /** 标记位置 */
    position?: 'left' | 'top' | 'right' | 'bottom';
     /** 标记大小 */
    size?: number | number[];
    /** 标记样式 */
    style?: IShapeStyle;
  };
```

##### autoWidth

<description>**optional** _Boolean_</description>

是否动态调整节点宽度，设置为 true 时，title autoEllipsis 配置无效。

##### customContent

<description>**optional** _Function_</description>

自定义 items，需要返回自定义元素的最大高度。

```ts
{
  customContent: (item, group, cfg) => {
    const { startX, startY, width } = cfg;
    const { text, value, icon } = item;
    let textShape, valueShape, iconShape;
    textShape =
      text &&
      group!.addShape('text', {
        attrs: {
          textBaseline: 'top',
          x: startX,
          y: startY,
          text,
          fill: '#aaa',
        },
        // group 内唯一字段
        name: `text-${Math.random()}`,
      });
    valueShape =
      value &&
      group!.addShape('text', {
        attrs: {
          textBaseline: 'top',
          x: startX + width / 2,
          y: startY,
          text: value,
          fill: '#f00',
        },
        name: `value-${Math.random()}`,
      });
    iconShape =
      icon &&
      group!.addShape('image', {
        attrs: {
          x: startX,
          y: startY,
          width: 72,
          height: 72,
          img: icon,
        },
        name: `image-${Math.random()}`,
      });
    return Math.max(
      textShape?.getBBox().height ?? 0,
      valueShape?.getBBox().height ?? 0,
      iconShape?.getBBox().height ?? 0,
    );
  },
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

##### label

<description>**optional** _object_</description>

边文本样式, style 支持回调。

```ts
{
  label: {
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

#### markerCfg

<description>**optional** _Boolean | MarkerCfg_</description>

Marker 配置， 支持回调。

```ts
interface MarkerCfg {
  /** 是否展示 */
  show?: boolean;
  /** 是否折叠态 */
  collapsed?: boolean;
  /** 位置 */
  position?: 'left' | 'right' | 'top' | 'bottom';
  /** 样式 */
  style?: ShapeStyle;
}
```

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
  /** Direction for rank nodes. Can be TB, BT, LR, or RL, where T = top, B = bottom, L = left, and R = right. */
  rankdir: 'LR',
  /** Layout center. */
  center: [0, 0],
  /** Number of pixels that separate nodes vertically in the layout. */
  nodesepFunc: () => 1,
  /** Number of pixels that separate nodes horizontally in the layout. */
  ranksepFunc: () => 1,
}
```

### 方法

[详见](/zh/docs/api/common-graph/common-graph#方法)

### 事件

[详见](/zh/docs/api/common-graph/common-graph#事件)
