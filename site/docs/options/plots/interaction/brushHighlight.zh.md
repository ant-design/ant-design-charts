---
title: brushHighlight
---

框选高亮元素。

## 开始使用

<img alt="example" src="https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*wICbS6qdoJMAAAAAAAAAAAAADmJ7AQ/original" width="640">

```ts
{
  interaction: { brushHighlight: true },
}
```

## 选项

| 属性                | 描述           | 类型              | 默认值 |
| ------------------- | -------------- | ----------------- | ------ |
| reverse             | brush 是否反转 | `boolean`         | false  |
| series              | 是否是系列元素 | `boolean`         | false  |
| facet               | 是否跨分面     | `boolean`         | false  |
| `mask${StyleAttrs}` | brush 的样式   | `number\| string` | -      |

# Brush

支持八个方向的 resize 和自定义对应的 handle。

## 案例

### 设置样式

八个方向的 handle 的名字分别如下（按照东南西北命名），按照 `mask[handleName][styleAttribute]` 格式设置对应的属性，也可以通过 `maskHandleSize` 设置宽度。

<img src="https://github.com/antvis/G2/assets/49330279/eb2d3951-7990-423c-97f3-e3a38b2baf68" width=640 alt="custom-style"/>

```js
{
  state: {
    inactive: { stroke: 'gray', opacity: 0.5 },
  },
  interaction: {
    brushHighlight: {
      maskHandleNFill: 'blue',
      maskHandleEFill: 'red',
      maskHandleSFill: 'green',
      maskHandleWFill: 'yellow',
      maskHandleNWFill: 'black',
      maskHandleNEFill: 'steelblue',
      maskHandleSEFill: 'pink',
      maskHandleSWFill: 'orange',
    },
  },
}
```

### 自定义 Handle

可以通过 `mask[handleName]Render` 指定 handle 的渲染函数，用于渲染自定义的 handle。其中该函数签名如下。

```js
function render(
  g, // 挂载容器
  options, // 样式属性，通过 mask[handleName][styleAttribute] 设置
  document, // 画布 document，用于创建自图形
) {
  // 需要返回创建的图形
}
```

下面是一个创建 path handle 的例子：

```js
function renderPath(group, options, document) {
  // 创建逻辑
  // 如果是第一次渲染，就创建并且挂在图形
  if (!group.handle) {
    // 通过 document.createElement 去新建图形
    const path = document.createElement('path');
    group.handle = path;
    group.appendChild(group.handle);
  }

  // 更新逻辑
  const { handle } = group;
  const { width, height, ...rest } = options;
  if (width === undefined || height === undefined) return handle;
  handle.attr(rest);

  // 返回对应的 shape
  return handle;
}
```

<img src="https://github.com/antvis/G2/assets/49330279/d586fabe-4c34-4dfb-bffa-ef1a354b1333" width=640 alt="custom-brush"/>

```js
function createPathRender(path) {
  return (group, options, document) => {
    if (!group.handle) {
      const path = document.createElement('path');
      group.handle = path;
      group.appendChild(group.handle);
    }
    const { handle } = group;
    const { width, height, ...rest } = options;
    if (width === undefined || height === undefined) return handle;
    handle.style.d = path(width, height);
    handle.attr(rest);
    return handle;
  };
}

// conifg
{
  state: {
    inactive: { stroke: 'gray', opacity: 0.5 },
  },
  interaction: {
    brushHighlight: {
      maskHandleSize: 30,
      maskHandleNRender: createPathRender(
        (width, height) =>
          `M0,${height / 2}L${width / 2},${-height / 2}L${width},${
            height / 2
          },Z`,
      ),
      maskHandleERender: createPathRender(
        (width, height) =>
          `M${width / 2},0L${(width * 3) / 2},${height / 2}L${
            width / 2
          },${height},Z`,
      ),
      maskHandleSRender: createPathRender(
        (width, height) =>
          `M0,${height / 2}L${width / 2},${(height / 2) * 3}L${width},${
            height / 2
          },Z`,
      ),
      maskHandleWRender: createPathRender(
        (width, height) =>
          `M${width / 2},0L${-width},${height / 2}L${width / 2},${height},Z`,
      ),
      maskHandleNWRender: createPathRender(
        (width, height) =>
          `M0,0L${width},${height / 2}L${width / 2},${height},Z`,
      ),
      maskHandleNERender: createPathRender(
        (width, height) =>
          `M0,${height / 2}L${width},0L${width / 2},${height},Z`,
      ),
      maskHandleSERender: createPathRender(
        (width, height) =>
          `M${width / 2},0L${width},${height}L0,${height / 2},Z`,
      ),
      maskHandleSWRender: createPathRender(
        (width, height) =>
          `M${width / 2},0L${width},${height / 2}L0,${height},Z`,
      ),
      maskHandleNFill: 'blue',
      maskHandleEFill: 'red',
      maskHandleSFill: 'green',
      maskHandleWFill: 'yellow',
      maskHandleNWFill: 'black',
      maskHandleNEFill: 'steelblue',
      maskHandleSEFill: 'pink',
      maskHandleSWFill: 'orange',
    },
  }
}
```

### 监听事件

支持以下的事件：

- `brush:start` - 开始创建 brush 的时候触发
- `brush:end` - brush 更新大小和位置完成时候触发
- `brush:remove` - brush 移除的时候触发
- `brush:highlight` - brush 改变大小和位置时触发

```js
let chart;
const config = {
  onReady: (c) => chart = c
}
chart.on('brush:highlight', (e) => {
  console.log(e.data.selection);
  console.log(e.nativeEvent);
});
```

### 触发交互

支持以下的事件：

- `brush:highlight` - 高亮数据
- `brush:remove` - 移除 brush

```js
chart.emit('brush:remove');
```
