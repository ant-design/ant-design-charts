---
title: 散点图 - Dot
order: 0
---

`Dot` 继承基类 [Plot](/zh/docs/map-api/plot-api)。

## 一、配置

创建地图实例：

```ts
```

### container

`string|HTMLDivElement` required

地图渲染的 DOM 容器。

### options

`DotOptions` required

点地图的所有配置项，继承自 [Plot options](/zh/docs/map-api/plot-api#options)。

### `options.`shape

`string|Function|object` optional default: `'circle'`

元素形状，内置以下形状：

*   2D
    *   circle: 圆形
    *   square: 正方形
    *   hexagon: 六边形
    *   triangle: 三角形
    *   pentagon: 五角星
    *   octogon: 八边形
    *   hexagram: 六边形
    *   rhombus: 菱形
    *   vesica: 椭圆形
    *   dot: 圆点
*   3D
    *   cylinder: 圆柱
    *   triangleColumn: 三角形柱
    *   hexagonColumn: 六角形柱
    *   squareColumn: 方柱

```js
{
  shape: 'circle';
}
```

除内置图标外，可自定义图标

注册图标

```js
const images = [
  { id: '01', image: 'https://gw.alipayobjects.com/zos/basement_prod/604b5e7f-309e-40db-b95b-4fac746c5153.svg' },
  { id: '02', image: 'https://gw.alipayobjects.com/zos/basement_prod/30580bc9-506f-4438-8c1a-744e082054ec.svg' },
  { id: '03', image: 'https://gw.alipayobjects.com/zos/basement_prod/7aa1f460-9f9f-499f-afdf-13424aa26bbf.svg' },
];
registerImages(images);
```

使用注册图标

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, s: '01', n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' }
  },
  shape: 's'
}
```

#### `shape.`field

`string` optional

元素形状值映射关联字段。

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, s: 'circle', t: 24.6, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' }
  },
  shape: {
    fied: 's'
  }
}
```

#### `shape.`value

`string|string[]|Function` optional

元素形状值映射值。

```js
{
  shape: {
    fied: 't',
    value: ({ t }) => {
      return t > 20 ? 'triangle': 'circle'
    }
  }
}
```

#### `shape.`scale

`ScaleConfig` optional default: `{type: 'linear'}`

关联字段的映射 scale 类型，有以下 scale 类型：

*   linear：线性
*   power：指数
*   log：对数
*   quantile：等分位
*   quantize：等间距
*   cat：枚举


```js
{
  shape: {
    fied: 't',
    value: ['circle', 'triangle'],
    scale: {type: 'quantile'}
  }
}
```

### `options.`color

`string|object|Function` optional default: `'#5FD3A6'`

元素颜色。

```js
{
  color: 'red',
}
```

#### `color.`field

`string` optional

元素颜色值映射关联字段。

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, c: 'red', t: 20, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' }
  },
  color: { fied: 'c' }
}
```

#### `color.`value

`string|string[]|Function` optional

元素颜色值映射值。

```js
{
  color: {
    fied: 't',
    value: ({ t }) => {
      return t > 20 ? 'red': 'blue'
    }
  }
}
```

#### `color.`scale

`ScaleConfig` optional default: `{type: 'linear'}`

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
    fied: 't',
    value: ['blue', 'red'],
    scale: {type: 'quantile'}
  }
}
```


### `options.`size

`number|object|Function` optional default: `12`

元素大小。

```js
{
  size: 12,
}
```

#### `size.`field

`string` optional

元素大小值映射关联字段。

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, s: 12, t: 20, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' }
  },
  size: { fied: 's' }
}
```

#### `size.`value

`number|number[]|Function` optional

元素大小值映射值。

```js
{
  size: {
    fied: 't',
    value: ({ t }) => {
      return t > 20 ? 15 : 12
    }
  }
}
```

#### `size.`scale

`ScaleConfig` optional default: `{type: 'linear'}`

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
    fied: 't',
    value: [12, 15],
    scale: {type: 'quantile'}
  }
}
```


### `options.`style

`object` optional

全局样式。

```js
{
  style: {
    opacity: 0.8,
    stroke: 'white',
    strokeWidth: 2
  }
}
```

#### `style.`opacity

`number` optional

元素透明度。

#### `style.`stroke

`string` optional

元素边线填充颜色。

#### `style.`strokeWidth

`number` optional

元素线的宽度。


### `options.`label

`false｜LabelOptions` optional default: `false`

地图数据标签配置，详见 [Label](/zh/docs/map-api/components/label)。

### `options.`tooltip

`false｜TooltipOptions` optional default: `false`

数据悬浮提示组件配置，详见 [Tooltip](/zh/docs/map-api/components/tooltip)。

### `options.`legend

`false｜LegendOptions` optional default: `false`

地图图例组件配置，详见 [Legend](/zh/docs/map-api/components/legend)。

### `options.`zoom

`false｜ZoomControlOptions` optional default: `false`

地图放大缩小控件，详见 [Zoom](/zh/docs/map-api/components/zoom)。

### `options.`scale

`false｜ScaleControlOptions` optional default: `false`

地图比例尺控件，详见 [Scale](/zh/docs/map-api/components/scale)。

### `options.`layerMenu

`false｜LayerMenuControlOptions` optional default: `false`

地图图层列表控件，详见 [LayerMenu](/zh/docs/map-api/components/layerMenu)。


## 二、属性

继承 [Plot 属性](/zh/docs/map-api/plot-api#二、属性)。

### dotLayer

`PlotLayer`

点图层实例。

### labelLayer

`undefined|PlotLayer`

数据标签图层实例。

## 三、方法

继承 [Plot 方法](/zh/docs/map-api/plot-api#三、方法)。

## 四、事件

继承 [Plot 方法](/zh/docs/map-api/plot-api#四、事件)。

内置图层名称分别为：

*   dotLayer
*   labelLayer

```js
dotMap.on('dotLayer:click', (e: MouseEvent) => void);
```
