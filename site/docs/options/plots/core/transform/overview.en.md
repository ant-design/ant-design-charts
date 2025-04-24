---
title: overview
order: 1
---

**The Mark Transform** in Ant Design Charts offers a convenient method for transforming data and mark options, mainly used for analyzing data. The core of mark transform, which **filters, modifies, aggregates and generates** new channel values.

Transform is an array, executed in the order when they are declared. It can be configured at the level of mark:

```js
({
  transform: [{ type: 'stackY' }, { type: 'sortX' }],
});

```

```js
{
  "transform": [
    [
      {
        "type": "stackY"
      },
      {
        "type": "sortX"
      }
    ]
  ]
}
```

Transform can also configure the level of view:

```js
({
  transform: [{ type: 'stackY' }, { type: 'sortX' }],
});

```

```js
{
  "transform": [
    [
      {
        "type": "stackY"
      },
      {
        "type": "sortX"
      }
    ]
  ]
}
```

## Mark Transform

Mark transform will modify the data bound to each channel, thereby changing the display form of the chart. For example, StackY transform stacks the column data bound to bar graph y and y1 channels:

```js
{
  "transform": [
    {
      "type": "stackY"
    }
  ]
}
```

## View Transform

Transform declared on the view will be passed on to the mark declared in `children`. Set if it is not transformed, otherwise, it has no effect. For example, the following stacked area chart with transform:

```js
{
  "transform": [
    {
      "type": "stackY"
    }
  ],
  "style": {
    "fillOpacity": 0.5,
    "strokeWidth": 2
  },
  "tooltip": false
}
```

## Common Transform

There are generally two common transform functions:

- Prevent overlap
- Data aggregation

### Prevent overlap

One function of transform is to prevent overlap. For example, the bars in the following data bar chart overlap.


At this time, you can declare a DodgeX to draw a grouped bar chart:

```js
{
  "transform": [
    {
      "type": "dodgeX"
    }
  ]
}
```

This is actually one of the functions of mark transform: **Prevent overlap**. In addition to DodgeX, there are also transform such as StackY and JitterX that can be used to prevent overlap.

### Data aggregation

In addition to preventing overlap, there is also a type of mark transform mainly used for data aggregation: such as Bin and Group. Different from traditional data aggregation, mark aggregation occurs in drawing, not before drawing. This eliminates the need for us to manipulate abstract raw data, but directly manipulate channel values. This greatly improves our efficiency in exploring data.

First, let's draw a scatterplot as follows, showing the correlation between penguin culmen_depth_mm and culmen_length_mm.


At this time, if you want to see the distribution of penguin culmen_depth_mm, you can use bin to binning the data.

```js
{
  "style": {
    "insetLeft": 1
  },
  "transform": [
    {
      "y": "count"
    }
  ]
}
```

Bin is mainly used to aggregate numerical data, and Group is mainly used for discrete data.

## Multiple Transform

We can also declare multiple transform at the same time. For example, in the penguin example above, if we consider one more data dimension: the gender of the penguin, we can declare Bin and StackY transform continuously.

```js
{
  "style": {
    "insetLeft": 1
  }
}
```
