---
title: Graph 通用配置
order: 3
nav:
  title: 使用文档
  order: 1
---

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
