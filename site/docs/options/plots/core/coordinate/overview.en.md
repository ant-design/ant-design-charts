---
title: overview
order: 1
---

**The Coordinate System** in Ant Design Charts will perform a series of point transform. In Ant Design Charts, the mark's position channels x and y will be mapped to the range [0,1] through a scale mapping, after that, the coordinate system is used to transform points into canvas coordinates, thereby changing the spatial display of the mark.

The coordinate system be configured at the level of view:

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

It can also be configured at the level of mark:

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

## View Coordinate System

Each view can only have one coordinate system. In addition to its own attributes, the coordinate system also contains a series of **Coordinate Transform**。

```js
({
  innerRadius: 0.6, // its own properties
  outerRadius: 0.8,
  transform: [{ type: 'transpose' }], // Coordinate transform
});

```

## Mark Coordinate System

The coordinate system of the level of mark has bubbling properties. The coordinate system of the level of mark will be merged with the coordinate system of the view, and the coordinate system of the first mark has the highest priority.

```js
{
  "coordinate": {
    "type": "radial"
  }
}
```

Equivalent to the following situation:

```js
chart.coordinate({ type: 'polar' });
chart.line();
chart.area():
```

This feature is conducive to encapsulation and coordinate-related composite mark, such as pie charts:


## Common Coordinate Systems

The default coordinate system is the Cartesian coordinate system. In addition, there is also a kind of coordinate system that transforms charts to polar coordinate systems and is used to draw a series of "circle" charts. This type of coordinate system is called **Radial Coordinate**。

### Polar

For example, you can use interval mark and polar coordinate transform to draw rose charts.

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

You can also use interval mark and theta coordinate system to draw pie charts.

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

You can also use interval mark and radial coordinate systems to draw radial charts.

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

In addition to the previous relatively basic coordinate transform, there are also some slightly more complex coordinate transform, such as parallel coordinate system.

```js
null;

```

## Coordinate Transform

The above coordinate system can be used in combination with the coordinate transform.

### Transpose

One of the more commonly used transform is transpose, which is mainly used to change the direction of the chart. For example, draw horizontal bar charts.

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

There is also a fisheye coordinate transform, which is used to set the focus of the chart. Here is how to use it.

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

## 3D Coordinate System

At present, we only support `cartesian3D` coordinate system:

```ts
{
  "coordinate": {
    "type": "cartesian3D"
  }
}
```
