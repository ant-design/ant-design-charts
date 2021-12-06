---
title: HeatmapLayer
order: 3
---

---
title: 点热力图层 - HeatmapLayer
order: 3
---

`HeatmapLayer` 继承 [PlotLayer](/zh/docs/map-api/layers/plot-layer)。

## 一、配置

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

热力模式支持 2D 与 3D 热力：

*   heatmap
*   heatmap3D

```js
{ shape: 'heatmap', }
```


### `options.`size

`SizeAttr` required

热力大小配置，SizeAttr 配置如下：

| 属性  | 描述                 | 类型                 | 默认值   | 是否必填 |
| ----- | -------------------- | -------------------- | -------- | -------- |
| field | 热力大小映射字段     | `string`             |          | required |
| value | 热力大小数据映射区间 | `number[]｜Function` | `[0, 1]` | optional |

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, t: 24.6, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' }
  },
  size: {
    field: 't',
    value: [0, 1],
  },
}
```


### `options.`style

`HeatmapLayerStyleOptions` optional

热力样式，HeatmapLayerStyleOptions 配置如下：

| 属性       | 描述               | 类型        | 默认值 | 是否必填 |
| ---------- | ------------------ | ----------- | ------ | -------- |
| intensity  | 全局热力权重       | `number`    | `3`    | optional |
| radius     | 热力半径，单位像素 | `number`    | `20`   | optional |
| opacity    | 透明度             | `number`    | `1`    | optional |
| colorsRamp | 热力色带           | `ColorRamp` |        | optional |

热力色带，ColorRamp 配置如下：

| 属性     | 描述       | 类型     | 默认值 | 是否必填 |
| -------- | ---------- | -------- | ------ | -------- |
| color    | 颜色       | `string` |        | required |
| position | 热力映射值 | `number` |        | required |

```js
{
  style: {
    intensity: 3,
    radius: 20,
    opacity: 1,
    colorsRamp: [
      { color: 'rgba(33,102,172,0.0)', position: 0 },
      { color: 'rgb(103,169,207)', position: 0.2 },
      { color: 'rgb(209,229,240)', position: 0.4 },
      { color: 'rgb(253,219,199)', position: 0.6 },
      { color: 'rgb(239,138,98)', position: 0.8 },
      { color: 'rgb(178,24,43,1.0)', position: 1 },
    ],
  }
}
```


## 二、属性

继承 [PlotLayer 属性](/zh/docs/map-api/layers/plot-layer#二、属性)。

## 三、方法

继承 [PlotLayer 方法](/zh/docs/map-api/layers/plot-layer#三、方法)。

## 四、事件

继承 [PlotLayer 方法](/zh/docs/map-api/layers/plot-layer#四、事件)。
