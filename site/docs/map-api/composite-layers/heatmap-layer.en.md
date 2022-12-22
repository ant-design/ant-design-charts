---
title: HeatmapLayer
order: 4
---

---
title: 热力图层 - HeatmapLayer
order: 4
---

<tag color="blue" text="Core Layer">Core Layer</tag>

`HeatmapLayer` 是基于 [L7-HeatmapLayer](https://l7.antv.vision/zh/docs/map-api/heatmap_layer/heatmap) 封装的配置式 API。

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


### `options.`shape

`string` optional default: `'heatmap'`

支持三种热力类型，普通热力模式支持 2D 与 3D 热力：

*   heatmap
*   heatmap3D

蜂窝热力支持：

*   hexagon: 蜂窝
*   hexagonColumn: 蜂窝柱

网格热力支持：

*   2D
    *   circle: 圆形
    *   square: 正方形
    *   hexagon: 六边形
    *   triangle: 三角形
*   3D
    *   cylinder: 圆柱
    *   triangleColumn: 三角形柱
    *   hexagonColumn: 六角形柱
    *   squareColumn: 方柱

```js
{ shape: 'heatmap', }
```


### `options.`color

`string|ColorStyleAttribute|Function` optional default: `'#5FD3A6'`

元素颜色。

```js
{ color: 'red', }
```

#### `color.`field

`string` optional

元素颜色值映射关联字段。

```js
{
  source: {
    data: [{ c: 'red', t: 20, n: 'chengdu' }],
    // ...
  },
  color: { field: 'c', }
}
```

#### `color.`value

`string|string[]|Function` optional

元素颜色值映射值。

```js
{
  color: {
    field: 't',
    value: ({ t }) => {
      return t > 20 ? 'red': 'blue'
    }
  }
}
```

#### `color.`scale

`ScaleConfig` optional default: `{}`

关联字段的映射 scale 类型，有以下 scale 类型：

*   linear：线性
*   power：指数
*   log：对数
*   quantile：等分位
*   quantize：等间距
*   cat：枚举


```js
{
  color: {
    field: 't',
    value: ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'],
    scale: { type: 'quantile' }
  }
}
```


### `options.`size

`number|SizeStyleAttribute|Function` optional

元素大小。

```js
{ size: 12, }
```

#### `size.`field

`string` optional

元素大小值映射关联字段。

```js
{
  source: {
    data: [{ s: 12, t: 20, n: 'chengdu' }],
    // ...
  },
  size: { field: 's' },
}
```

#### `size.`value

`number|number[]|Function` optional

元素大小值映射值。

```js
{
  size: {
    field: 't',
    value: ({ t }) => {
      return t > 20 ? 15 : 12
    }
  }
}
```

#### `size.`scale

`ScaleConfig` optional default: `{}`

关联字段的映射 scale 类型，有以下 scale 类型：

*   linear：线性
*   power：指数
*   log：对数
*   quantile：等分位
*   quantize：等间距
*   cat：枚举


```js
{
  size: {
    field: 't',
    value: [12, 15],
    scale: { type: 'quantile' },
  }
}
```


### `options.`style

`HeatmapLayerStyleOptions|GridHeatmapLayerStyleOptions` optional

普通热力样式，HeatmapLayerStyleOptions 配置如下：

| 属性       | 描述               | 类型         | 默认值 | 是否必填 |
| ---------- | ------------------ | ------------ | ------ | -------- |
| intensity  | 全局热力权重       | `number`     | `3`    | optional |
| radius     | 热力半径，单位像素 | `number`     | `20`   | optional |
| opacity    | 透明度             | `number`     | `1`    | optional |
| rampColors | 热力色带           | `RampColors` |        | optional |

热力色带，RampColors 配置如下：

| 属性      | 描述       | 类型       | 默认值 | 是否必填 |
| --------- | ---------- | ---------- | ------ | -------- |
| colors    | 颜色       | `string[]` |        | required |
| positions | 热力映射值 | `number[]` |        | required |

```js
{
  style: {
    intensity: 3,
    radius: 20,
    opacity: 1,
    rampColors: {
      colors: ['#FF4818', '#F7B74A', '#FFF598', '#F27DEB', '#8C1EB2', '#421EB2'],
      positions: [0, 0.2, 0.4, 0.6, 0.8, 1.0],
    },
  }
}
```

网格/蜂窝热力样式，GridHeatmapLayerStyleOptions 配置如下：

| 属性     | 描述                    | 类型     | 默认值 | 是否必填 |
| -------- | ----------------------- | -------- | ------ | -------- |
| opacity  | 透明度                  | `number` | `1`    | optional |
| coverage | 覆盖度，范围 0 到 1     | `string` | `0.9`  | optional |
| angle    | 旋转角度，范围 0 到 360 | `number` | `0`    | optional |

```js
{
  style: {
    coverage: 0.9,
    angle: 0,
    opacity: 1.0,
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
