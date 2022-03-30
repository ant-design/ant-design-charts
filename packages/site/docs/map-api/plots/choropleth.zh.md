---
title: 行政区域图 - Choropleth
order: 9
---

`Choropleth` 继承基类 [Plot](/zh/docs/map-api/plot-api)。

## 一、配置

创建地图实例：

```ts
```

### container

`string|HTMLDivElement` required

地图渲染的 DOM 容器。

### options

`ChoroplethOptions` required

行政区域分布图的所有配置项，继承自 [Plot options](/zh/docs/map-api/plot-api#options)。

### `options.`geoArea

`string|GeoArea` required

行政地理数据地址，geoArea 配置如下：

| 属性 | 描述     | 类型                    | 默认值       | 是否必填 |
| ---- | -------- | ----------------------- | ------------ | -------- |
| url  | 数据地址 | `string`                |              | required |
| type | 数据类型 | `'geojson'｜'topojson'` | `'topojson'` | required |

行政地理数据地址默认值为 `Choropleth.GeoAreaUrl`, 不定时以更新其中版本号方式更新数据。

```js
{
  geoArea: {
    url: 'https://gw.alipayobjects.com/os/alisis/geo-data-v0.1.2/choropleth-data',
    type: 'topojson',
  },
}
```

### `options.`source

`ChoroplethSourceOptions` required

行政地理数据地址，source 配置如下：

| 属性   | 描述           | 类型     | 默认值 | 是否必填 |
| ------ | -------------- | -------- | ------ | -------- |
| data   | 业务数据       | `Array`  |        | required |
| joinBy | 地理元数据关联 | `JoinBy` |        | required |

地理元数据关联，joinBy 配置如下：

| 属性        | 描述                                       | 类型                | 默认值     | 是否必填 |
| ----------- | ------------------------------------------ | ------------------- | ---------- | -------- |
| sourceField | 业务元数据地理字段                         | `string`            |            | required |
| geoField    | 地理数据字段                               | `'adcode'｜'name'`  | `'adcode'` | optional |
| geoData     | 地理数据，设置则覆盖当前层级的行政地址数据 | `FeatureCollection` |            | optional |

业务数据与地理数据关联主要有以下两种方式。行政名称与编码映射关系详见[行政名称表格](https://www.yuque.com/antv/qbux5m/wrxc8h#yyIb)与[行政名称数据](https://gw.alipayobjects.com/os/alisis/geo-data-v0.1.2/administrative-data/area-list.json)。

1.  根据行政编码匹配渲染

```js
{
  source: {
    data: [{ cityName: '上海市', code: 310000, value: 200 }],
    joinBy: {
      sourceField: 'code',
      geoField: 'adcode',
    },
  },
}
```

2.  根据行政名称匹配渲染

```js
{
  source: {
    data: [{ cityName: '上海市', code: 310000, value: 200 }],
    joinBy: {
      sourceField: 'cityName',
      geoField: 'name',
    },
  },
}
```

### `options.`viewLevel

`ViewLevel` required

行政级别及范围配置，ViewLevel 配置如下：

| 属性        | 描述               | 类型                                                 | 默认值                    | 是否必填 |
| ----------- | ------------------ | ---------------------------------------------------- | ------------------------- | -------- |
| level       | 行政级别           | `'world'｜'country'｜'province'｜'city'｜'district'` |                           | required |
| adcode      | 行政代码/行政名称  | `number｜string`                                     |                           | required |
| granularity | 化行政级别下的粒度 | `'country'｜'province'｜'city'｜'district'`          | 默认取值 level 下一个级别 | optional |

```js
{
  viewLevel: {
    level: 'country',
    adcode: '100000',
    granularity: 'province',
  }
}
```

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
    field: 't',
    value: ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'],
    scale: { type: 'quantile' }
  }
}
```


### `options.`style

`AreaLayerStyle` optional

区域样式，AreaLayerStyle 配置如下：

| 属性            | 描述                                 | 类型               | 默认值      | 是否必填 |
| --------------- | ------------------------------------ | ------------------ | ----------- | -------- |
| opacity         | 填充透明度                           | `number`           | `1`         | optional |
| fillBottomColor | 填充兜底颜色，用于颜色值映值不存在时 | `false｜string`    | `false`     | optional |
| stroke          | 描边颜色                             | `string`           | `'#2f54eb'` | optional |
| lineWidth       | 描边的宽度                           | `number`           | `1.5`       | optional |
| lineOpacity     | 描边透明度                           | `number`           | `0.8`       | optional |
| lineType        | 描边线类型，支持实线与虚线           | `‘solid’｜'dash'`  | `‘solid’`   | optional |
| lineDash        | 描边的虚线间隔                       | `[number, number]` |             | optional |

> lineDash: 虚线间隔，第一个值为虚线每个分段的长度，第二个值为分段间隔的距离。lineDash 设为 `[0,0]` 的效果为没有虚线。

```js
{
  style: {
    opacity: 0.8,
    stroke: 'white',
    lineWidth: 2,
  }
}
```


### `options.`state

`object` optional

区域交互反馈效果。

```js
{
  state: {
    active: {
      stroke: 'yellow',
      lineWidth: 1.5,
      lineOpacity: 0.8,
    },
    select: false,
  }
}
```

#### `state.`active

`boolean｜AreaLayerActiveOptions` optional default: `false`

AreaLayerActiveOptions 配置如下：

| 属性        | 描述       | 类型            | 默认值      | 是否必填 |
| ----------- | ---------- | --------------- | ----------- | -------- |
| fill        | 填充颜色   | `false｜string` | `false`     | optional |
| stroke      | 描边颜色   | `false｜string` | `'#2f54eb'` | optional |
| lineWidth   | 描边的宽度 | `number`        | `1.5`       | optional |
| lineOpacity | 描边透明度 | `number`        | `0.8`       | optional |

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
    active: {
      fill: false,
      stroke: 'yellow',
      lineWidth: 1.5,
      lineOpacity: 0.8,
    }
  }
}
```

#### `state.`select

`boolean｜AreaLayerActiveOptions` optional default: `false`

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
    select: {
      fill: 'red',
      stroke: false,
      lineWidth: 1.5,
      lineOpacity: 0.8,
    }
  }
}
```


### `options.`chinaBorder

`boolean｜ChinaBoundaryStyle` optional default: `ture`

是否显示中国国界线，国界线样式 ChinaBoundaryStyle 配置如下：

| 属性     | 描述 | 类型                     | 默认值                                                      | 是否必填 |
| -------- | ---- | ------------------------ | ----------------------------------------------------------- | -------- |
| national | 国界 | `LinesLayerStyleOptions` | `{ color: 'red', width: 1, opacity: 1 }`                    | optional |
| dispute  | 争议 | `LinesLayerStyleOptions` | `{ color: 'red', width: 1, opacity: 1, dashArray: [1, 6] }` | optional |
| coast    | 海洋 | `LinesLayerStyleOptions` | `{ color: 'blue', width: 1, opacity: 1 }`                   | optional |
| hkm      | 港澳 | `LinesLayerStyleOptions` | `{ color: 'gray', width: 1, opacity: 1 }`                   | optional |

### `options.`drill

`Drill` optional

开启数据钻取功能，Drill 配置如下：

| 属性        | 描述               | 类型                                                                                                                           | 默认值    | 是否必填 |
| ----------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------ | --------- | -------- |
| enabled     | 是否启用钻取功能   | `boolean`                                                                                                                      | `ture`    | optional |
| steps       | 钻取维度顺序       | `DrillStep[]｜DrillStep['level'][]`                                                                                            |           | required |
| triggerUp   | 上卷钻取的触发事件 | `'unclick'｜'undblclick'｜'uncontextmenu'`                                                                                     | `unclick` | optional |
| triggerDown | 下钻钻取的触发事件 | `'click'｜'dblclick'｜'contextmenu'`                                                                                           | `click`   | optional |
| onUp        | 上卷事件回调       | `(from: ViewLevel, to: ViewLevel, callback: (config?: DrillStepConfig) => void) => void`                                       |           | optional |
| onDown      | 上卷事件回调       | `(from: ViewLevel, to: ViewLevel & { properties: Record<string, any> }, callback: (config?: DrillStepConfig) => void) => void` |           | optional |

钻取维度 DrillStep 配置如下：

| 属性        | 描述                             | 类型                                        | 默认值                    | 是否必填 |
| ----------- | -------------------------------- | ------------------------------------------- | ------------------------- | -------- |
| level       | 初始化行政级别                   | `'country'｜'province'｜'city'｜'district'` |                           | required |
| granularity | 化行政级别下的粒度               | `'province'｜'city'｜'district'`            | 默认取值 level 下一个级别 | optional |
| source      | 当前行政级别下的数据             | `ChoroplethSourceOptions`                   | 默认取上一个级别的配置    | optional |
| color       | 当前行政级别下的颜色映射         | `string｜object｜Function`                  | 默认取上一个级别的配置    | optional |
| style       | 当前行政级别下的区域样式         | `object`                                    | 默认取上一个级别的配置    | optional |
| state       | 当前行政级别下的区域交互反馈效果 | `object`                                    | 默认取上一个级别的配置    | optional |
| label       | 当前行政级别下的数据标签         | `'province'｜'city'｜'district'`            | 默认取上一个级别的配置    | optional |
| tooltip     | 当前行政级别下的悬浮提示         | `'province'｜'city'｜'district'`            | 默认取上一个级别的配置    | optional |

DrillStepConfig 配置如下：

| 属性    | 描述                             | 类型                             | 默认值 | 是否必填 |
| ------- | -------------------------------- | -------------------------------- | ------ | -------- |
| source  | 当前行政级别下的数据             | `ChoroplethSourceOptions`        |        | optional |
| color   | 当前行政级别下的颜色映射         | `string｜object｜Function`       |        | optional |
| style   | 当前行政级别下的区域样式         | `object`                         |        | optional |
| state   | 当前行政级别下的区域交互反馈效果 | `object`                         |        | optional |
| label   | 当前行政级别下的数据标签         | `'province'｜'city'｜'district'` |        | optional |
| tooltip | 当前行政级别下的悬浮提示         | `'province'｜'city'｜'district'` |        | optional |

下钻事件回调：

> 适用于异步请求下钻数据

```js
{
  drill: {
    steps: ['province', 'city', 'district'],
    onDown: (from, to, callback) => {
      const { level, adcode, granularity } = to
      callback({ source: { data: [], joinBy: { sourceField: 'code' } } })
    },
    onUp: (from, to, callback) => {
      callback()
    },
  },
}
```

下钻事件回调拦截：

> 适用于下钻数据权限判断

```js
{
  drill: {
    steps: ['province', 'city', 'district'],
    onDown: (from, to, callback) => {
      if (to.adcode !== 330000) {
        callback();
      }
    },
    onUp: (from, to, callback) => {
      callback();
    },
  },
}
```

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

### fillAreaLayer

`AreaLayer`

填充面图层实例。

### labelLayer

`undefined|TextLayer`

数据标签图层实例。

## 三、方法

继承 [Plot 方法](/zh/docs/map-api/plot-api#三、方法)。

### changeView

更新显示区域，未开启[钻取功能](/zh/docs/map-api/plots/choropleth#`options.`drill)时，方法控制地图显示区域。

```js
plot.changeView(view: ViewLevel, config?: DrillStepConfig);
```

### drillDown

向下钻取方法，配合开启[钻取功能](/zh/docs/map-api/plots/choropleth#`options.`drill)时，方法控制地图下钻。

```js
plot.drillDown(view: ViewLevel, config?: DrillStepConfig);
```

### drillUp

向上钻取方法，配合开启[钻取功能](/zh/docs/map-api/plots/choropleth#`options.`drill)时，方法控制地图上钻。上钻行政级别 `level` 可选，默认上钻到当前行政级别的上一层，也可以回到某一行政级别或最高层级别。

```js
plot.drillUp(config?: DrillStepConfig, level?: `'world'｜'country'｜'province'｜'city'`);
```

### getCurrentDrillSteps

获取当前已钻取层级数据，配合开启[钻取功能](/zh/docs/map-api/plots/choropleth#`options.`drill)时使用。

```js
plot.getCurrentDrillSteps(): ViewLevel[];
```

## 四、事件

继承 [Plot 方法](/zh/docs/map-api/plot-api#四、事件)。

### 图层事件

内置图层名称分别为：

*   fillAreaLayer
*   labelLayer

```js
choropleth.on('fillAreaLayer:click', (e: MouseEvent) => void);
```

### 钻取事件

#### 下钻

下钻完成后触发。

```js
choropleth.on('drilldown', (downParams: { from: ViewLevel, to: ViewLevel & { properties: Record<string, any> }) => void);
```

#### 上卷

上卷完成后触发。

```js
choropleth.on('drillup', (upParams: { from: ViewLevel, to: ViewLevel }) => void);
```
