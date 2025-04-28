---
title: Label
order: 7.6
---

**Label** in Ant Design Charts is one of the means to annotate charts. Multiple labels can be added to a mark:

```js
({
  labels: [
    {
      text: 'genre', // Specify the bound field
      dy: -15, // Specify style
    },
    {
      text: 'sold', // Specify the bound field
      fill: '#fff', // Specify style
      dy: 5,
    },
  ],
});

```

```js
null;

```

At the level of View, you can declare label transform through `labelTransform`:

```js
({
  labelTransform: [{ type: 'overlapHide' }, { type: 'contrastReverse' }],
});

```

```js
chart.labelTransform({ type: 'overlapHide' }).labelTransform({ type: 'contrastReverse' });

chart.labelTransform([{ type: 'overlapHide' }, { type: 'contrastReverse' }]);

```

## Mark Label

Each mark can have multiple labels. The configuration of a label is roughly as follows:

```js
({
  labels: [
    {
      text: 'name', // Bound field or a constant string
      dy: -2, // @antv/g supported styles
      fill: 'red', // @antv/g supported styles
      selector: 'last', // Selector
      transform: [], // Label transform
    },
  ],
});

```

Here's a simple example:

```js
{
  "labels": [
    {
      "text": "sold",
      "style": {
        "fill": "#fff",
        "dy": 5
      }
    },
    {
      "text": "genre",
      "style": {}
    }
  ]
}
```

## Selector

For the mark of a graph corresponding to multiple data items, we can select the mark that needs to be retained through `selector`. Currently supported values ​​are as follows:

- **first** - the first one
- **last** - the last one
- **function** - custom selector

```js
{
  "labels": [
    {
      "text": "Symbol",
      "selector": "last",
      "style": {
        "fontSize": 10
      }
    }
  ],
  "axis": {
    "y": {
      "title": "↑ Change in price (%)"
    }
  }
}
```

## Label Transform

When the display of labels does not meet expectations, such as overlapping or unclear colors, we can use **Label Transform** to optimize label display.

It can be found that in the example below, the labels corresponding to times such as 2004 have overlapped.

```js
{
  "tooltip": {
    "items": [
      {
        "channel": "y",
        "valueFormatter": ".1f"
      }
    ]
  },
  "labels": [
    {
      "text": "price",
      "fontSize": 10
    }
  ]
}
```

At this time, we can set the label transform for the corresponding label: overlapDodgeY, which is used to prevent the labels from overlapping in the y direction.

```js
{
  "tooltip": {
    "items": [
      {
        "channel": "y",
        "valueFormatter": ".1f"
      }
    ]
  },
  "labels": [
    {
      "text": "price",
      "transform": [
        {
          "type": "overlapDodgeY"
        }
      ],
      "fontSize": 10
    }
  ]
}
```

## View Level Label Transform

Label transform can also be declared at the level of view to process labels for the entire view.

```js
({
  labelTransform: [],
});

```
