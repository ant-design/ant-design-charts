---
title: 样式（Style）
order: 9
---

Style in Ant Design Charts is mainly used to control the visual style of mark and view. Supported styles refer to @antv/g supported styles.

Mark can set its own style or the style of the view:

```js
({
  style: {
    // own style
    stroke: 'black',
    strokeWidth: 2,
  },
  viewStyle: {
    // View style
    viewFill: 'red',
    contentFill: 'yellow',
  },
});

```

```js
{
  "style": {
    "stroke": "black",
    "strokeWidth": 2
  }
}
```

View can set its own style:

```js
({
  style: {
    viewFill: 'red',
    contentFill: 'yellow',
  },
});

```

```js
{
  "style": {
    "viewFill": "red",
    "contentFill": "yellow"
  }
}
```

## Mark Style

In addition to `mark.encode`, the visual properties of the mark can also be set through `mark.style`. There are two main differences between the two:

- The channel set by `mark.encode` will be a bit special, either unique to the mark, such as the src channel of image; or it has some special logic, such as the x channel that affects the generation of the x-direction coordinate axis.
- `mark.encode` is more inclined to set up channels related to data, but `mark.style` prefers to set up channels that have nothing to do with data. Although `mark.style` also supports callbacks to set up data-driven channels.

```js
{
  "axis": {
    "y": {
      "labelFormatter": ".0%"
    }
  },
  "style": {
    "fill": "steelblue"
  }
}
```

## View Style

The styles of each area can be set in the form of `${name}${Style}`, among them, Style is all styles supported by the rectangle of G, such as `fill`，`stroke`,etc. Please note that the first letter should be capitalized to form camel case.

- **view${Style}**- Set the style of the view area
- **plot${Style}**- Set the style of the drawing area
- **main${Style}**- Set the style of the main area
- **content${Style}**- Set styles of the content areas

For example, color each area in the picture below:

```js
{
  "inset": 10,
  "marginTop": 30,
  "marginLeft": 40,
  "marginBottom": 10,
  "marginRight": 20,
  "style": {
    "viewFill": "#4e79a7",
    "plotFill": "#f28e2c",
    "mainFill": "#e15759",
    "contentFill": "#76b7b2"
  },
  "children": [
    {
      "type": "point",
      "data": {
        "type": "fetch",
        "value": "https://assets.antv.antgroup.com/g2/commits.json"
      },
      "encode": {
        "size": "count",
        "shape": "point"
      },
      "transform": [
        {
          "type": "group",
          "size": "sum"
        },
        {
          "type": "sortY"
        }
      ],
      "scale": {
        "y": {
          "type": "point"
        }
      },
      "style": {
        "shape": "point",
        "fill": "#59a14f"
      },
      "axis": {
        "x": {
          "title": "time (hours)",
          "tickCount": 24
        },
        "y": {
          "title": "time (day)",
          "grid": true
        }
      },
      "legend": false
    }
  ]
}
```
