---
title: overview
order: 1
---

In Ant Design Charts, the **scale** is a crucial abstraction for visualization: it maps abstract data to visual data, serving as the bridge between abstract data and visual data. If the encode determines which channels of the mark need to be visualized, then the scale determines how these channels should be visualized.

Ant Design Charts internally infers the type, domain, and range of the scale based on the data type and the type of the mark, but you can also specify the corresponding configuration. The scale can be configured at the mark level:

```js
({
  scale: {
    x: { padding: 0.5 },
    y: {
      domain: [10, 100], // specify domain
      range: [0, 1], // specify range
    },
  },
});

```

```js
{
  "scale": {
    "x": {
      "padding": 0.5
    },
    "y": {
      "domain": [
        10,
        100
      ],
      "range": [
        0,
        1
      ]
    }
  }
}
```

The scale can also be configured at the view level:

```js
({
  scale: {
    x: { padding: 0.5 },
    y: {
      domain: [10, 100], // specify domain
      range: [0, 1], // specify range
    },
  },
});

```

```js
{
  "scale": {
    "x": {
      "padding": 0.5
    },
    "y": {
      "domain": [
        10,
        100
      ],
      "range": [
        0,
        1
      ]
    }
  }
}
```

## Mark Scale

Every channel of the mark is bound to a scale. This scale transforms the column data bound to the channel from the data range: **domain** to the visual range: **range**. Different types of scales are suitable for different types of data and use cases.

### Scale Synchronization

The scale of the same channel of the mark in the same view is synchronized by default: it synchronizes the type, domain, and range of the scale, as well as other configurations. This means that all marks in a view will be drawn with the same scale. For example, the LineX mark in the figure below, although it does not have complete data, is still drawn at the accurate position, because the scale is synchronized.


```js
{
  "style": {
    "strokeWidth": 2,
    "stroke": "red"
  }
}
```

### Scales Out of Sync

If you want to unsynchronized (for example, when drawing a dual-axis chart), you need to set `scale.independent` to `true`. The scale that has set this property will not synchronize with any other scale. In the example below, the y-axis of the interval and line will use two different scales, thus generating two different coordinate axes.


```js
{
  "children": [
    {
      "type": "interval",
      "encode": {
        "x": "time",
        "y": "waiting"
      },
      "axis": {
        "y": {
          "title": "Waiting",
          "titleFill": "#5B8FF9"
        }
      }
    },
    {
      "type": "line",
      "encode": {
        "x": "time",
        "y": "people",
        "shape": "smooth"
      },
      "scale": {
        "y": {
          "independent": true
        }
      },
      "style": {
        "stroke": "#fdae6b",
        "lineWidth": 2
      },
      "axis": {
        "y": {
          "position": "right",
          "grid": null,
          "title": "People",
          "titleFill": "#fdae6b"
        }
      }
    }
  ]
}
```

If you want to synchronize scales in groups, you can declare `scale.key`. Scales with the same key will synchronize. For example, the y-axis of Line and Point Mark in the example below will synchronize because the key of both is 'line'.


```js
{
  "children": [
    {
      "type": "interval",
      "encode": {
        "x": "time",
        "y": "waiting"
      },
      "axis": {
        "y": {
          "title": "Waiting",
          "titleFill": "#5B8FF9"
        }
      }
    },
    {
      "type": "line",
      "encode": {
        "x": "time",
        "y": "people",
        "shape": "smooth"
      },
      "scale": {
        "y": {
          "key": "line"
        }
      },
      "style": {
        "stroke": "#fdae6b",
        "lineWidth": 2
      },
      "axis": {
        "y": {
          "position": "right",
          "grid": null,
          "title": "People",
          "titleFill": "#fdae6b"
        }
      }
    },
    {
      "type": "point",
      "encode": {
        "x": "time",
        "y": "people"
      },
      "scale": {
        "y": {
          "key": "line"
        }
      },
      "style": {
        "stroke": "#fdae6b",
        "lineWidth": 2
      }
    }
  ]
}
```

## View Scale

The scale can be configured in the view hierarchy and passed to the `children` specified by the mark. If the channel corresponding to the mark does not set the scale, it is set; otherwise, it has no effect. When not drawing multi-axis charts, the scale can be set at the view hierarchy.


```js
{
  "scale": {
    "y": {
      "nice": true
    }
  }
}
```

## Common Scales

Common scales are divided into three major categories:

- Continuous scale
- Discrete scale
- Discretizing scale

### Continuous Scale

The first type of scale is the continuous scale, mainly used for continuous data. Common continuous scales include Linear, Time, Log, etc. For example, the x and y channels in the scatter plot below use the linear scale.


### Ordinal Scale

The second type of scale is the ordinal scale, mainly used for discrete data. Common ordinal scales include ordinal, point, etc. For example, the color channel in the bar chart below uses the ordinal scale.

```js
{
  "scale": {
    "color": {
      "range": [
        "#1f77b4",
        "#ff7f0e",
        "#2ca02c",
        "#d62728",
        "#c564be"
      ]
    }
  }
}
```

### Discretizing Scale

The third type of scale is the discretizing scale, mainly used for continuous data, which will be discretized and then mapped, such as threshold, quantize, etc. The color channel below uses the quantile scale.

```js
{
  "style": {
    "inset": 2,
    "stroke": "#000"
  },
  "scale": {
    "color": {
      "range": [
        "#eee",
        "pink",
        "red"
      ]
    }
  }
}
```
