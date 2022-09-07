---
title: 文本图层 - TextLayer
order: 3
---

<tag color="blue" text="Core Layer">Core Layer</tag>

`TextLayer` 是基于 [L7-PointLayer](https://l7.antv.vision/zh/docs/map-api/point_layer/pointlayer) 封装的配置式文本图层 API。

```ts
```

## 一、配置

### `options.`name

`string` optional

图层名。

### `options.`id

`string` optional

图层 ID。

### `options.`zIndex

`number` optional default: `0`

图层层叠顺序，数值越大，图层层叠最高。

### `options.`visible

`boolean` optional default: `true`

图层是否可见。

### `options.`minZoom

`number` optional

图层可见最小缩放层级。

### `options.`maxZoom

`number` optional

图层可见最大缩放层级。

### `options.`autoFit

`boolean` optional default: `false`

图层加载成功后是否自动定位到图层数据可见范围，注意 <tag color="red" text="开启"></tag>后图层数据发生更新时，地图也会自动缩放到图层的数据边界范围。

### `options.`pickingBuffer

`number` optional default: `0`

图层可拾取范围。

### `options.`blend

`string` optional default: `normal`

图层的元素混合效果，支持以下效果：

*   normal：正常效果，默认效果
*   additive：叠加模式
*   subtractive：相减模式
*   max：最大值


### `options.`source

`SourceOptions` required

数据配置，详见 [Source](/zh/docs/map-api/source)。

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, c: 'red', t: 20, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' }
  },
}
```


### `options.`field

`string` required

映射的标签数据字段。

### `options.`style

`TextLayerStyleOptions` optional

字体样式，TextLayerStyleOptions 配置如下：

| 属性             | 描述                                                                      | 类型        | 默认值     | 是否必填 |
| ---------------- | ------------------------------------------------------------------------- | ----------- | ---------- | -------- |
| fill             | 字体颜色                                                                  | `ColorAttr` | `'#fff'`   | optional |
| fontSize         | 字体大小                                                                  | `SizeAttr`  | `12`       | optional |
| opacity          | 文字透明度                                                                | `number`    | `1`        | optional |
| stroke           | 文字描边颜色                                                              | `string`    | `'#fff'`   | optional |
| strokeWidth      | 文字描边宽度                                                              | `number`    | `0`        | optional |
| strokeOpacity    | 文字描边透明度                                                            | `number`    | `1`        | optional |
| fontFamily       | 文字字体                                                                  | `string`    |            | optional |
| fontWeight       | 字体粗细程度                                                              | `string`    |            | optional |
| textAllowOverlap | 是否允许文本覆盖                                                          | `boolean`   | `false`    | optional |
| textAnchor       | 文本相对锚点的位置                                                        | `string`    | `'center'` | optional |
| textOffset       | 文本相对锚点的偏移量                                                      | `number[]`  | `[0, 0]`   | optional |
| spacing          | 字符间距                                                                  | `number`    | `0`        | optional |
| padding          | 文本包围盒 padding （水平，垂直），影响碰撞检测结果，避免相邻文本靠的太近 | `number[]`  | `[0, 0]`   | optional |

textAnchor 文本相对锚点的位置，支持以下相对锚点的位置：

*   'right'
*   'top-right'
*   'left'
*   'bottom-right'
*   'left'
*   'top-left'
*   'bottom-left'
*   'bottom'
*   'bottom-right'
*   'bottom-left'
*   'top'
*   'top-right'
*   'top-left'
*   'center'


### `options.`state

`StateAttribute` optional

元素交互反馈效果。

#### `state.`active

`boolean｜ActiveOption` optional default: `false`

标签 mousehover 高亮效果，开启 mousehover 元素高亮效果：

```js
{
  state: { active: true, }
}
```

开启 mousehover 元素高亮效果并自定义设置高亮颜色：

```js
{
  state: {
    active: { color: 'red', }
  }
}
```

#### `state.`select

`boolean｜ActiveOption` optional default: `false`

元素 mouseclick 选中高亮效果，开启 mouseclick 元素高亮效果：

```js
{
  state: { select: true, }
}
```

开启 mousehover 元素高亮效果并自定义设置高亮颜色：

```js
{
  state: {
    select: { color: 'red', }
  }
}
```


## 二、属性

### name

`string`

当前图层名。

### id

`string`

当前图层 ID。

### type

`string`

当前图层所属类型。

### options

`LayerOptions`

当前图层的所有配置项。


## 三、方法

### addTo

添加到场景。

```js
layer.addTo(scene: Scene);
```

### remove

从场景移除。

```js
layer.remove();
```

### update

更新配置且重新渲染。

```js
layer.update(options: Partial<LayerOptions>);
```

### changeData

更新数据。

```js
layer.changeData(source: SourceOptions);
```

### setIndex

设置图层层叠值。

```js
layer.setIndex();
```

### setBlend

设置图层的元素混合配置。

```js
layer.setBlend();
```

### setMinZoom

设置图层可见最小缩放层级。

```js
layer.setMinZoom();
```

### setMaxZoom

设置图层可见最大缩放层级。

```js
layer.setMaxZoom();
```

### show

显示图层。

```js
layer.show();
```

### hide

隐藏图层。

```js
layer.hide();
```

### toggleVisible

切换图层显隐状态。

```js
layer.toggleVisible();
```

### isVisible

图层是否可见。

```js
layer.isVisible() : boolean;
```

### fitBounds

图层缩放到范围。

```js
layer.fitBounds(fitBoundsOptions?: Bounds);
```

### boxSelect

图层框选数据。

```js
layer.boxSelect(bounds: [number, number, number, number], callback: (...args: any[]) => void);
```

### getLegendItems

获取图例数据。

```js
layer.getLegendItems(type: string): Record<string, any>[];
```

### destroy

摧毁。

```js
layer.destroy();
```


## 四、事件

### 事件监听

#### 绑定事件

```js
layer.on(eventName: string, callback: (...args) => void);
```

#### 绑定一次事件

```js
layer.once(eventName: string, callback: (...args) => void);
```

#### 解绑事件

```js
layer.off(eventName: string, callback: (...args) => void);
```

### 事件类别

#### 生命周期事件

| 事件名     | 类型         | 描述                      |
| ---------- | ------------ | ------------------------- |
| inited     | 生命周期事件 | 图层初始化完成事件        |
| add        | 生命周期事件 | 图层添加到场景 scene 事件 |
| remove     | 生命周期事件 | 图层移除时事件            |
| dataUpdate | 生命周期事件 | 图层数据源更新事件        |

#### 点击事件

| 事件名        | 类型     | 描述                     |
| ------------- | -------- | ------------------------ |
| click         | 左键事件 | 左键点击图层事件         |
| unclick       | 左键事件 | 图层外左键点击事件       |
| contextmenu   | 右键事件 | 图层要素点击右键菜单事件 |
| uncontextmenu | 右键事件 | 图层外点击右键事件       |

#### 鼠标事件

| 事件名      | 类型     | 描述                       |
| ----------- | -------- | -------------------------- |
| mouseenter  | 滑动事件 | 鼠标进入图层要素事件       |
| mousemove   | 滑动事件 | 鼠标在图层上移动时触发事件 |
| unmousemove | 滑动事件 | 图层外鼠标移动事件         |
| mouseout    | 滑动事件 | 鼠标移出图层要素事件       |
| mouseup     | 滑动事件 | 鼠标在图层上单击抬起事件   |
| unmouseup   | 滑动事件 | 图层外鼠标抬起             |
| mousedown   | 滑动事件 | 鼠标在图层上单击按下事件   |
| unmousedown | 滑动事件 | 图层外单击按下事件         |
| unpick      | 鼠标事件 | 图层外的操作的所有事件     |
