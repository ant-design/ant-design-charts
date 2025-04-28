---
title: overview
order: 1
---

In Ant Design Charts, **View Composition** provides the ability to draw multiple charts in a single visualization. Ant Design Charts defines a **view graph** to describe a **multi-view plot**.

```js
({
  children: [{ type: 'view' }, { type: 'view' }],
});

```

```js
const layer = chart.spaceLayer();

layer.view();

layer.view();

```

## Space

The most basic way of view composition is **Space Composition**, which is simply a division of space.

A more common way of composition is `composition.spaceLayer`: overlaying multiple charts together, using scenarios where these views have different coordinate systems, such as the bar and pie charts below.

```js
{
  "legend": {
    "color": false
  },
  "transform": [
    {
      "type": "stackY"
    }
  ],
  "coordinate": {
    "type": "theta"
  },
  "attr": {
    "paddingBottom": 250,
    "paddingLeft": 300
  }
}
```

You can also use `composition.spaceFlex` to arrange views horizontally or vertically.

```js
{
  "legend": {
    "color": false
  },
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

Also, these composition methods can be nested, so it's easy to implement a report through a separate statement.

## Facet

**Facet Composition** differs from Space Composition in that it also partitions the data, with each view presenting a subset of the original data.

```js
{
  "style": {
    "stroke": "#000"
  },
  "attr": {
    "inset": 10,
    "padding": "auto"
  }
}
```

## Repeat

**Repeat Composition** differs from facet in that each view shows the full amount of data, but with repeated encoding to create multiple views.

```js
{
  "attr": {
    "padding": "auto"
  }
}
```

## Time

**Time Composition** manages views in space and is used for animation.

```js
{
  "attr": {
    "duration": 1000,
    "direction": "alternate",
    "iterationCount": 2
  },
  "call": {
    "0": "-",
    "1": "F",
    "2": "N",
    "3": "-",
    "4": "e",
    "5": "-",
    "6": "F",
    "7": "N",
    "8": "-",
    "undefined": "finallyLoc"
  }
}
```

