---
title: 通用配置
order: 3
---

## 基础配置

#### width

<description>**optional** _number_ _default:_ `500`</description>

设置图表宽度。

#### height

<description>**optional** _number_ _default:_ `500`</description>

设置图表高度。

#### nodeCfg

节点配置

##### type

<description>**optional** _`string`_</description>

节点类型， 内置节点包括 icon-node ,card，circle，rect，ellipse，diamond，triangle，star，image，modelRect，donut，这些内置节点的默认样式分别如下图所示。<br /> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*FY3RTbDCz_8AAAAAAAAAAABkARQnAQ' width='750' height='100' alt='img'/> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*NRJ7RpkMPNsAAAAAAAAAAAAAARQnAQ' width='50' alt='img'/>

##### size

<description>**optional** _Number[]_</description>

节点的（最小）大小，部分图表可能会根据节点内容自适应大小， 默认值 [120, 40]。

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

##### padding

<description>**optional** _number | number[]_</description>

文本 padding。

```ts
{
  padding: 8,
}
```

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

边类型。

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

### customLayout

<description>**optional** _Boolean_</description>

开启后，layout 失效，使用 data 里面的 x、y 进行数据布局。

#### autoFit

<description>**optional** _Boolean_</description>

是否缩放节点大小自适应容器，默认为 true。

#### fitCenter

<description>**optional** _Boolean_</description>

开启后，图将会被平移，图的中心将对齐到画布中心，但不缩放。优先级低于 fitView，默认为 true。

#### minimapCfg

<description>**optional** _object_</description>

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

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| container | Object | 放置 Minimap 的 DOM 容器。若不指定则自动生成 |
| className | String | 生成的 DOM 元素的 className |
| viewportClassName | String | Minimap 上视窗 DOM 元素的 className |
| type | String | 选项：`'default'`：渲染图上所有图形；`'keyShape'`：只渲染图上元素的 keyShape，以减少渲染成本；`'delegate'`：只渲染图上元素的大致图形，以降低渲染成本。渲染成本 `'default'` > `'keyShape'` > `'delegate'`。默认为 `'default'` |
| size | Array | Minimap 的大小 |
| delegateStyle | Object | 在 `type` 为 `'delegate'` 时生效，代表元素大致图形的样式 |

其中，delegateStyle 可以设置如下属性：

| 名称        | 类型   | 描述       |
| ----------- | ------ | ---------- |
| fill        | String | 填充颜色   |
| stroke      | String | 描边颜色   |
| lineWidth   | Number | 描边宽度   |
| opacity     | Number | 透明度     |
| fillOpacity | Number | 填充透明度 |

#### toolbarCfg

<description>**optional** _object_</description>

Toolbar 配置。

```ts
interface ToolbarCfg {
  /** toolbar css 类名 */
  className?: string;
  /** toolbar 容器样式 */
  style?: React.CSSProperties;
  /** 是否展示 */
  show?: boolean;
  /** 缩放因子 */
  zoomFactor?: number;
  /** 自定义 icon */
 customContent?: ({
    zoomIn,
    zoomOut,
    toggleFullscreen,
    fullscreen,
  }: {
    zoomIn: () => void;
    zoomOut: () => void;
    toggleFullscreen: () => void;
    fullscreen: boolean;
  }) => React.ReactElement;
}
```

#### tooltipCfg

<description>**optional** _object_</description>

Tooltip 配置。

```ts
interface TooltipCfg {
  show?: boolean;
  offsetX?: number;
  offsetY?: number;
  /** 是否展示 */
  shouldBegin?: (evt?: IG6GraphEvent) => boolean;
  /** item 类型 ['node','edge'] */
  itemTypes?: string[];
  /** 触发方式 */
  trigger?: 'mouseenter' | 'click';
  /** 固定位置 */
  fixToNode?: [number, number] | undefined;
    /** tooltip css 类名 */
  className?: string;
  /** tooltip 容器样式 */
  style?: React.CSSProperties;
  /** tooltip 容器，默认和 canvas 使用同一父容器 */
  container?: HTMLDivElement | string | null;
  /** 自定义模板 */
  customContent?: (item: T) => React.ReactElement;
}
```

#### menuCgf 

<description>**optional** _object_</description>

MenuCfg 配置。

```ts
interface MenuCfg {
  container?: HTMLDivElement | string | null;
  className?: string;
  handleMenuClick?: (target: HTMLElement, item: Item) => void;
  customContent?: (evt?: IG6GraphEvent) => React.ReactNode;
  // offsetX 与 offsetY 需要加上父容器的 padding
  offsetX?: number;
  offsetY?: number;
  shouldBegin?: (evt?: IG6GraphEvent) => boolean;
  // 允许出现 tooltip 的 item 类型
  itemTypes?: string[];
  trigger?: 'click' | 'contextmenu';
}
```

## 方法

#### graph.downloadFullImage(name, type, imageConfig)

将画布上的元素导出为图片。

**参数**

| 名称 | 类型 | 是否必选 | 描述 |
| --- | --- | --- | --- |
| name | String | false | 图片的名称，不指定则为 'graph' |
| type | `'image/png'` / `'image/jpeg'` / `'image/webp'` / `'image/bmp'` | false | 图片的类型。图的 `renderer` 为默认的 `'canvas'` 时生效，图的 `renderer` 为 `'svg'` 时将导出 svg 文件 |
| imageConfig | Object | false | 图片的配置项，可选，具体字段见下方 |

其中，imageConfig 为导出图片的配置参数：

| 名称 | 类型 | 是否必选 | 描述 |
| --- | --- | --- | --- |
| backgroundColor | String | false | 图片的背景色，可选，不传值时将导出透明背景的图片 |
| padding | Number / Number[] | false | 导出图片的上左下右 padding 值。当 `padding` 为 number 类型时，四周 `padding` 相等 |

**用法**

```ts
{
  onReady: (graph) => {
    graph.downloadFullImage('tree-graph', {
      backgroundColor: '#ddd',
      padding: [30, 15, 15, 15],
    });
  };
}
```

#### graph.toFullDataURL(callback, type, imageConfig)

将画布上元素生成为图片的 URL。

**参数**

| 名称 | 类型 | 是否必选 | 描述 |
| --- | --- | --- | --- |
| callback | Function | true | 异步生成 dataUrl 完成后的回调函数，在这里处理生成的 dataUrl 字符串 |
| type | `'image/png'` / `'image/jpeg'` / `'image/webp'` / `'image/bmp'` | false | 图片的类型。图的 `renderer` 为默认的 `'canvas'` 时生效，图的 `renderer` 为 `'svg'` 时将导出 svg 文件 |
| imageConfig | Object | false | 图片的配置项，可选，具体字段见下方 |

其中，imageConfig 为导出图片的配置参数：

| 名称 | 类型 | 是否必选 | 描述 |
| --- | --- | --- | --- |
| backgroundColor | String | false | 图片的背景色，可选，不传值时将导出透明背景的图片 |
| padding | Number / Number[] | false | 导出图片的上左下右 padding 值。当 `padding` 为 number 类型时，四周 `padding` 相等 |

无返回值，生成的结果请在 callback 中处理。如下示例：

**用法**

```ts
{
  onReady: (graph) => {
   graph.toFullDataUrl(
      // 第一个参数为 callback，必须
      (res) => {
        // ... something
        console.log(res); // 打印出结果
      },
      // 后两个参数不是必须
      'image/jpeg',
      (imageConfig: {
        backgroundColor: '#fff',
        padding: 10,
      }),
    );
  };
}
```

#### graph.zoom(ratio, center)

图表缩放。

**用法**

```ts
{
  onReady: (graph) => {
    // 缩小 0.5
    graph.zoom(0.5);
    // 以[100, 100]为中心缩小 0.5
    graph.zoom(0.5, { x: 100, y: 100 });
  };
}
```

## 事件

事件通过 `on` 统一绑定到 graph 上，通过 `off` 移除，onReady 会返回 graph 实例。

```ts
graph.on(eventName, (evt) => {});
graph.off(eventName, (evt) => {});
```

```ts
{
  onReady: (graph) => {
    graph.on('node:click', (evt) => {
      console.log(evt);
    });
  };
}
```

其中，事件对象 `evt` 的属性值有：

- `type`: 事件类型
- `name`: 事件名称
- `x`: 画布上的 x 坐标
- `y`: 画布上的 y 坐标
- `clientX`: 浏览器窗口上的 x 坐标
- `clientY`: 浏览器窗口上的 y 坐标
- `canvasX`: 画布父容器视口上的 x 坐标
- `canvasY`: 画布父容器视口上的 y 坐标
- `item`: 事件的触发元素（节点/边/ Combo）
- `target`: 事件的触发图形 Shape 或画布对象
- `bubbles`: 是否允许冒泡
- `defaultPrevented`: 是否阻止了原生事件
- `originalEvent`: 原始浏览器事件对象，其中的 `button` 可以用于区分 `click` 事件的左/中/右键
- `timeStamp`: 触发事件的时间
- `propagationStopped`: 是否阻止传播（向上冒泡）
- `propagationPath`: 触发事件的路径

`eventName` 见下方内容。

#### 通用交互事件

| 事件名称 | 描述 |
| --- | --- |
| click | 单击鼠标**左键**或者按下回车键时触发 |
| dblclick | 双击鼠标**左键**时触发，同时会触发两次 click |
| mouseenter | 鼠标移入元素范围内触发，**该事件不冒泡**，即鼠标移到其后代元素上时不会触发 |
| mousemove | 鼠标在元素内部移到时不断触发，不能通过键盘触发 |
| mouseout | 鼠标移出目标元素后触发 |
| mouseover | 鼠标移入目标元素上方，鼠标移到其后代元素上时会触发 |
| mouseleave | 鼠标移出元素范围时触发，**该事件不冒泡**，即鼠标移到其后代元素时不会触发 |
| mousedown | 鼠标按钮被按下（左键或者右键）时触发，不能通过键盘触发 |
| mouseup | 鼠标按钮被释放弹起时触发，不能通过键盘触发 |
| contextmenu | 用户右击鼠标时触发并打开上下文菜单 |
| dragstart | 当拖拽元素开始被拖拽的时候触发的事件，此事件作用在被拖曳元素上 |
| drag | 当拖拽元素在拖动过程中时触发的事件，此事件作用于被拖拽元素上 |
| dragend | 当拖拽完成后触发的事件，此事件作用在被拖曳元素上 |
| dragenter | 当拖曳元素进入目标元素的时候触发的事件，此事件作用在目标元素上 |
| dragleave | 当拖曳元素离开目标元素的时候触发的事件，此事件作用在目标元素上 |
| drop | 被拖拽的元素在目标元素上同时鼠标放开触发的事件，此事件作用在目标元素上 |
| keydown | 按下键盘键触发该事件 |
| keyup | 释放键盘键触发该事件 |
| wheel | 鼠标滚轮滚动时触发该事件 |
| touchstart | 当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发 |
| touchmove | 当手指在屏幕上滑动的时候连续地触发。在这个事件发生期间，调用 `preventDefault()` 事件可以阻止滚动。 |
| touchend | 当手指从屏幕上离开的时候触发 |

#### Node 交互事件

| 事件名称         | 描述                                                                   |
| ---------------- | ---------------------------------------------------------------------- |
| node:click       | 鼠标**左键**单击节点时触发                                             |
| node:dblclick    | 鼠标双击**左键**节点时触发，同时会触发两次 node:click                  |
| node:mouseenter  | 鼠标移入节点时触发                                                     |
| node:mousemove   | 鼠标在节点内部移到时不断触发，不能通过键盘触发                         |
| node:mouseout    | 鼠标移出节点后触发                                                     |
| node:mouseover   | 鼠标移入节点上方时触发                                                 |
| node:mouseleave  | 鼠标移出节点时触发                                                     |
| node:mousedown   | 鼠标按钮在节点上按下（左键或者右键）时触发，不能通过键盘触发           |
| node:mouseup     | 节点上按下的鼠标按钮被释放弹起时触发，不能通过键盘触发                 |
| node:dragstart   | 当节点开始被拖拽的时候触发的事件，此事件作用在被拖曳节点上             |
| node:drag        | 当节点在拖动过程中时触发的事件，此事件作用于被拖拽节点上               |
| node:dragend     | 当拖拽完成后触发的事件，此事件作用在被拖曳节点上                       |
| node:dragenter   | 当拖曳节点进入目标元素的时候触发的事件，此事件作用在目标元素上         |
| node:dragleave   | 当拖曳节点离开目标元素的时候触发的事件，此事件作用在目标元素上         |
| node:dragover    | 当拖曳节点在另一目标元素上移动时触发此事件，此事件作用在目标元素上     |
| node:drop        | 被拖拽的节点在目标元素上同时鼠标放开触发的事件，此事件作用在目标元素上 |
| node:touchstart  | 在触控屏上，当节点开始被触碰的时候触发的事件                           |
| node:touchmove   | 在触控屏上，当节点开始被触碰过程中触发的事件                           |
| node:touchend    | 在触控屏上，当节点开始被触碰结束的时候触发的事件                       |
| node:contextmenu | 用户在节点上右击鼠标时触发并打开右键菜单                               |

#### Edge 交互事件

| 事件名称         | 描述                                                                       |
| ---------------- | -------------------------------------------------------------------------- |
| edge:click       | 鼠标**左键**单击边时触发                                                   |
| edge:dblclick    | 鼠标双击**左键**边时触发，同时会触发两次 edge:click                        |
| edge:mouseenter  | 鼠标移入边时触发                                                           |
| edge:mousemove   | 鼠标在边上移到时不断触发，不能通过键盘触发                                 |
| edge:mouseout    | 鼠标移出边后触发                                                           |
| edge:mouseover   | 鼠标移入边上方时触发                                                       |
| edge:mouseleave  | 鼠标移出边时触发                                                           |
| edge:mousedown   | 鼠标按钮在边上按下（左键或者右键）时触发，不能通过键盘触发                 |
| edge:mouseup     | 边上按下的鼠标按钮被释放弹起时触发，不能通过键盘触发                       |
| edge:dragenter   | 当拖曳元素进入目标边元素的时候触发的事件，此事件作用在目标边元素上         |
| edge:dragleave   | 当拖曳元素离开目标边元素的时候触发的事件，此事件作用在目标边元素上         |
| edge:dragover    | 当拖曳元素在另一目标边上移动时触发此事件，此事件作用在目标边元素上         |
| edge:drop        | 被拖拽的元素在目标边元素上同时鼠标放开触发的事件，此事件作用在目标边元素上 |
| edge:contextmenu | 用户在边上右击鼠标时触发并打开右键菜单                                     |

#### Canvas 交互事件

| 事件名称           | 描述                                                                   |
| ------------------ | ---------------------------------------------------------------------- |
| canvas:click       | 鼠标**左键**单击画布时触发                                             |
| canvas:dblclick    | 鼠标双击**左键**画布时触发                                             |
| canvas:mouseenter  | 鼠标移入画布时触发                                                     |
| canvas:mousemove   | 鼠标在画布内部移到时不断触发，不能通过键盘触发                         |
| canvas:mouseout    | 鼠标移出画布后触发                                                     |
| canvas:mouseover   | 鼠标移入画布上方时触发                                                 |
| canvas:mouseleave  | 鼠标移出画布时触发                                                     |
| canvas:mousedown   | 鼠标按钮在画布上按下（左键或者右键）时触发，不能通过键盘触发           |
| canvas:mouseup     | 画布上按下的鼠标按钮被释放弹起时触发，不能通过键盘触发                 |
| canvas:contextmenu | 用户在画布上右击鼠标时触发并打开右键菜单                               |
| canvas:dragstart   | 当画布开始被拖拽的时候触发的事件，此事件作用在被拖曳画布上             |
| canvas:drag        | 当画布在拖动过程中时触发的事件，此事件作用于被拖拽画布上               |
| canvas:dragend     | 当拖拽完成后触发的事件，此事件作用在被拖曳画布上                       |
| canvas:dragenter   | 当拖曳画布进入目标元素的时候触发的事件，此事件作用在目标画布上         |
| canvas:dragleave   | 当拖曳画布离开目标元素的时候触发的事件，此事件作用在目标画布上         |
| canvas:drop        | 被拖拽的元素在空白画布上同时鼠标放开触发的事件，此事件作用在目标画布上 |
| canvas:touchstart  | 在触控屏上，当画布开始被触碰的时候触发的事件                           |
| canvas:touchmove   | 在触控屏上，当画布开始被触碰过程中触发的事件                           |
| canvas:touchend    | 在触控屏上，当画布开始被触碰结束的时候触发的事件                       |
