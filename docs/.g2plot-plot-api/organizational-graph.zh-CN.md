---
title: 组织架构图
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
  label;: string;
  labelStyle?: LabelStyle | (node, cfg)=> LabelStyle
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

<description>**optional** _`string`_</description>

节点类型，默认 `rect`, 支持 icon-node，内置节点包括 icon-node ,card，circle，rect，ellipse，diamond，triangle，star，image，modelRect，donut，这些内置节点的默认样式分别如下图所示。<br /> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*FY3RTbDCz_8AAAAAAAAAAABkARQnAQ' width='750' height='100' alt='img'/> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*NRJ7RpkMPNsAAAAAAAAAAAAAARQnAQ' width='50' alt='img'/>

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

#### nodeLabelCfg

<description>**optional** _object_</description>

节点文本样式。

```ts
{
  nodeLabelCfg: {
    style: {
      fill: 'red';
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
   // console.log(graph.findById(item.source).getModel());
    return {
      stroke: '#40a9ff',
      lineWidth: Math.random() * 10,
    }
  }
}
```

#### edgeLabelCfg

<description>**optional** _object_</description>

边文本样式。

```ts
{
  edgeLabelCfg: {
    style: {
      fill: 'red';
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

#### nodeAnchorPoints

<description>**optional** _Number[]_</description>

节点的连接点 anchorPoint 指的是边连入节点的相对位置，即节点与其相关边的交点位置，默认值 `[[0.5, 0], [0.5, 1]]`。anchorPoints 是一个二维数组，每一项表示一个连接点的位置，在一个图形 Shape 中，连接点的位置如下图所示，x 和 y 方向上范围都是 [0, 1]：<br /> <img src='https://gw.alipayobjects.com/mdn/rms_f8c6a0/afts/img/A*EJTyR4j9VN4AAAAAAAAAAABkARQnAQ' width='600' height='300' alt='img'/>

#### behaviors

<description>**optional** _Number[]_</description>

交互模式， 默认值 `['drag-canvas', 'zoom-canvas']`。

- drag-canvas: 拖拽画布
- scroll-canvas: 滚轮滚动画布
- zoom-canvas: 缩放画布
- drag-node: 拖拽节点

#### showMarker

<description>**optional** _Boolean_</description>

是否展示底部 Marker，默认值 `false`。

#### markerStyle

<description>**optional** _object | Function_</description>

底部 marker 样式。

```ts
{
  markerStyle: {
    stroke: '#40a9ff',
  }
}
// 回调模式
{
  markerStyle: (node, cfg)=>{
    return {
      stroke: '#40a9ff',
    }
  }
}
```

#### animate

<description>**optional** _Boolean_</description>

是否开启动画，默认值 `true`。

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

### 方法

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

### 事件

事件通过 `on` 统一绑定到 graph 上，通过 `off` 移除，onReady 会返回 graph 实例。

```ts
graph.on(eventName, (evt) => {});
graph.off(eventName, (evt) => {});
```

```ts
{
  onReady: (graph) => {
    graph.on('node:mouseenter', (evt) => {
      const item = evt.item;
      graph.setItemState(item, 'hover', true);
    });
    graph.on('node:mouseleave', (evt) => {
      const item = evt.item;
      graph.setItemState(item, 'hover', false);
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

##### Canvas 交互事件

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
