### 图表容器

#### width

`number` optional default: `null`

设置地图容器宽度。

#### height

`number` optional default: `null`

设置地图容器高度。

#### antialias

`boolean` optional default: `true`

是否开启抗锯齿。

#### preserveDrawingBuffer

`boolean` optional default: `false`

是否保留缓冲区数据。

#### logo

`bool` optional default: `true`

是否显示 logo。

#### autoFit

`bool` optional default: `false`

图层完成初始化之后，地图是否自动缩放到图层的数据边界范围。

#### theme

`string|object` optional default: `'light'`

图表主题，详见 [Theme](https://l7plot.antv.vision/zh/docs/api/theme)。

### 地图配置

#### `map.`type

`string` optional default: `'amap'`

地图类型，支持以下两种类型：

- amap: 高德地图
- mapbox: Mapbox 地图

#### `map.`token

`string` required

地图服务 token，需服务平台申请。

#### `map.`center

`number[]` optional default: `[0, 0]`

初始中心经纬度。

#### `map.`pitch

`number` optional default: `0`

初始倾角。

#### `map.`rotation

`number` optional default: `0`

初始旋转角度。

#### `map.`zoom

`number` optional default: `0`

初始缩放层级，底图可缩放层级分布为：

- Mapbox （0-24）
- 高德 （2-19）

#### `map.`minZoom

`number` optional default: `0`

地图最小缩放等级。

#### `map.`maxZoom

`number` optional default: `20`

地图最大缩放等级，AMap 最大缩放等级 18，Mapbox 最大缩放等级 20。

#### `map.`style

`string` optional default: `dark`

内置样式:

- dark: 黑暗
- light: 明亮
- normal: 普通
- blank: 无底图

自定义样式:

```js
{
  style: 'amap://styles/2a09079c3daac9420ee53b67307a8006?isPublic=true';
}
```

### 数据映射

#### source

`ISource` required

数据配置，详见 [Source](https://l7plot.antv.vision/zh/docs/api/source)。

### 图形样式

#### color

`string|object|Function` optional default: `'#5FD3A6'`

元素颜色。

```js
{
  color: 'red';
}
```

#### `color.`field

`string` optional

元素颜色值映射关联字段。

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, c: 'red', n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' }
  },
  color: {
    fied: 'c'
  }
}
```

#### `color.`value

`string|string[]|Function` optional

元素颜色值映射值。

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, t: 24.6, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' }
  },
  color: {
    fied: 't',
    value: ({ t }) => {
      return t > 20 ? 'red': 'blue'
    }
  }
}
```

#### `color.`type

`string` optional default: `'linear'`

关联字段的映射 scale 类型，详见 [scale](https://l7plot.surge.sh/zh/docs/api/point-maps/bubble-map#code-classlanguage-textcolorcodetype)。

#### size

`number|object|Function` optional default: `12`

元素大小。

```js
{
  size: 12;
}
```

#### `size.`field

`string` optional

元素大小值映射关联字段。

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, s: 12, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' }
  },
  size: {
    fied: 's'
  }
}
```

#### `size.`value

`number|number[]|Function` optional

元素大小值映射值。

```js
{
  source: {
    data: [{ lng: 104.101, lat: 30.649, t: 24.6, n: 'chengdu' }],
    parser: { type: 'json', x: 'lng', y: 'lat' }
  },
  size: {
    fied: 't',
    value: ({ t }) => {
      return t > 20 ? 15 : 12
    }
  }
}
```

#### `size.`type

`string` optional default: `'linear'`

关联字段的映射 scale 类型，详见 [scale](https://l7plot.surge.sh/zh/docs/api/point-maps/bubble-map#code-classlanguage-textsizecodetype)。

#### animate

`boolean｜object` optional default: `false`

气泡水波动画效果配置。

```js
{
  animate: true;
}
```

#### `animate.`speed

`number` optional default: `1`

水波速度。

#### `animate.`rings

`number` optional default: `3`

水波环数。

#### style

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

#### state

`IStateAttribute` optional

元素交互反馈效果。

#### `state.`active

`boolean｜IActiveOption` optional default: `false`

标签 mousehover 高亮效果，开启 mousehover 元素高亮效果：

```js
{
  state: {
    active: true;
  }
}
```

开启 mousehover 元素高亮效果并自定义设置高亮颜色：

```js
{
  state: {
    active: {
      color: 'red';
    }
  }
}
```

#### `state.`select

`boolean｜IActiveOption` optional default: `false`

元素 mouseclick 选中高亮效果，开启 mouseclick 元素高亮效果：

```js
{
  state: {
    select: true;
  }
}
```

开启 mousehover 元素高亮效果并自定义设置高亮颜色：

```js
{
  state: {
    select: {
      color: 'red';
    }
  }
}
```

### 图表组件

#### label

`false｜ILabelOptions` optional default: `false`

地图数据标签配置，详见 [Label](https://l7plot.antv.vision/zh/docs/api/components/label)。

#### tooltip

`false｜ITooltipOptions` optional default: `false`

数据悬浮提示组件配置，详见 [Tooltip](https://l7plot.antv.vision/zh/docs/api/components/tooltip)。

#### legend

`false｜ILegendOptions` optional default: `false`

地图图例组件配置，详见 [Legend](https://l7plot.antv.vision/zh/docs/api/components/legend)。

#### zoom

`false｜IZoomControlOptions` optional default: `false`

地图放大缩小控件，详见 [Zoom](https://l7plot.antv.vision/zh/docs/api/components/zoom)。

#### scale

`false｜IScaleControlOptions` optional default: `false`

地图比例尺控件，详见 [Scale](https://l7plot.antv.vision/zh/docs/api/components/scale)。

#### layerMenu

`false｜ILayerMenuControlOptions` optional default: `false`

地图图层列表控件，详见 [LayerMenu](https://l7plot.antv.vision/zh/docs/api/components/layerMenu)。
