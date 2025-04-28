---
title: 概览
order: 1
---

Ant Design Charts 中**坐标系（Coordinate）** 会执行一系列点转换。在 Ant Design Charts 中，标记的位置通道 x 和 y 会经过比例尺的映射到 `[0, 1]` 的范围，这之后会使用坐标系将点转换为画布坐标，从而改变标记的空间展示形式。

坐标系可以设置在 View 层级：

```js
({
  coordinate: { type: 'polar' },
});

```

```js
{
  "coordinate": {
    "type": "polar"
  }
}
```

也可以设置在 Mark 层级：

```js
({
  coordinate: { type: 'polar' },
});

```

```js
{
  "coordinate": {
    "type": "polar"
  }
}
```

## 视图坐标系

每一个视图只能拥有一个坐标系。坐标系除了本身的属性之外，还包含一系列**坐标系变换（Coordinate Transform）**。

```js
({
  innerRadius: 0.6, // 本身的属性
  outerRadius: 0.8,
  transform: [{ type: 'transpose' }], // 坐标系变换
});

```

## 标记坐标系

标记层级的坐标系拥有冒泡性。标记层级的坐标系会和视图的坐标系进行合并，并且第一个标记的坐标系优先级最高。

```js
{
  "coordinate": {
    "type": "radial"
  }
}
```

和下面的情况等价：

```js
chart.coordinate({ type: 'polar' });
chart.line();
chart.area():
```

这个特性有利于封装和坐标系相关的复合标记，比如饼图：


## 常见坐标系

默认的坐标系是笛卡尔坐标系，除此之外，还有一类坐标系是把图表转换到极坐标系下，用于绘制一系列“圆”形的图，这类坐标系被称为**径向坐标系（Radial Coordinate）**。

### Polar

比如可以使用 interval 标记和 polar 坐标系变换绘制玫瑰图。

```js
{
  "axis": {
    "y": false
  },
  "coordinate": {
    "type": "polar"
  }
}
```

### Theta

也可以使用 interval 标记和 theta 坐标系来绘制饼图。

```js
{
  "transform": [
    {
      "type": "stackY"
    }
  ],
  "coordinate": {
    "type": "theta"
  }
}
```

### Radial

还可以使用 interval 标记和 radial 坐标系来绘制玉珏图。

```js
{
  "axis": {
    "x": {},
    "y": false
  },
  "legend": {
    "color": false
  }
}
```

### Parallel

除了前面的比较基础的坐标系变换之外，还有一些稍微复杂一点的坐标系变换，比如平行坐标系 parallel。

```js
null;

```

## 坐标系变换

上面的坐标系都可以和坐标系变换结合使用。

### Transpose

比较常用的一种变换是转置变换 transpose，主要用来改变图表的方向。比如绘制水平的条形图。

```js
{
  "coordinate": {
    "transform": [
      {
        "type": "transpose"
      }
    ]
  }
}
```

### Fisheye

还有一种鱼眼坐标系变换，用于设置图表焦点，下面是使用方式。

```js
{
  "interaction": "fisheye",
  "legend": false,
  "style": {
    "lineWidth": 1,
    "fillOpacity": 0.3
  },
  "axis": {
    "x": {
      "labelFormatter": "~s"
    }
  }
}
```

## 3D 坐标系

目前我们仅支持 `cartesian3D` 坐标系：

```ts
{
  "coordinate": {
    "type": "cartesian3D"
  }
}
```
