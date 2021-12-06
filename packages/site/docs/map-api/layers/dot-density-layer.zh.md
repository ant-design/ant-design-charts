---
title: 点密度图层 - DotDensityLayer
order: 2
---

`DotDensityLayer` 继承 [DotLayer](/zh/docs/map-api/layers/dot-layer)。

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


### `options.`size

`number` optional default: `1`

圆点大小。

### `options.`color

`string|object|Function` optional default: `'#5FD3A6'`

元素颜色。

```js
{ color: 'red', }
```

#### `color.`field

`string` optional

元素颜色值映射关联字段。

```js
{
  color: { fied: 'c', }
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

`ScaleConfig` optional default: `{type: ''}`

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
    value: ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'],
    scale: { type: 'quantile' }
  }
}
```


### `options.`style

`PointLayerStyleOptions` optional

元素样式, PointLayerStyleOptions 配置如下：

| 属性        | 描述         | 类型     | 默认值 | 是否必填 |
| ----------- | ------------ | -------- | ------ | -------- |
| opacity     | 透明度       | `number` | `1`    | optional |
| stroke      | 边线填充颜色 | `string` |        | optional |
| strokeWidth | 描边的宽度   | `number` |        | optional |

```js
{
  style: {
    opacity: 0.8,
    stroke: 'white',
    strokeWidth: 2,
  }
}
```


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

继承 [DotLayer 属性](/zh/docs/map-api/layers/dot-layer#二、属性)。

## 三、方法

继承 [DotLayer 方法](/zh/docs/map-api/layers/dot-layer#三、方法)。

## 四、事件

继承 [DotLayer 方法](/zh/docs/map-api/layers/dot-layer#四、事件)。
