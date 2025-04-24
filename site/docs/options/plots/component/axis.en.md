---
title: Axis
order: 7.1
---

In Ant Design Charts, the **Axis** can be understood as the visualization of the scale corresponding to the spatial channels (x, y, and position).

The axis can be configured at the mark level:

```js
({
  axis: {
    x: { labelFormatter: '%0' },
    y: { tickCount: 5 },
  },
});

```

```js
{
  "axis": {
    "x": {
      "labelFormatter": "%0"
    },
    "y": {
      "tickCount": 5
    }
  }
}
```

The axis can also be configured at the view level:

```js
({
  axis: {
    x: { labelFormatter: '%0' },
    y: { tickCount: 5 },
  },
});

```

```js
{
  "axis": {
    "x": {
      "labelFormatter": "%0"
    },
    "y": {
      "tickCount": 5
    }
  }
}
```

## Labeling Axis

In Ant Design Charts, each mark has its own axis. If the scale corresponding to the mark is synchronized, the axes will be merged.

## View Axis

The axis has transitivity. The axis declared on the view will be passed to the marks declared by `children`. If the mark has an axis for the corresponding channel, it will be merged; otherwise, it will not be affected.

## Hiding Axis

Hide the axis of each channel:

```js
({
  axis: { y: false }, // Hide the y-axis
});

```

Hide multiple axes:

```js
({
  axis: false,
});

```