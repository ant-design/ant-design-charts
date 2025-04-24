---
title: Overview
order: 1
---

In Ant Design Charts, **Interaction** provides the ability to explore data as needed.

Interaction can be set at the view level:

```js
({
  interaction: {
    tooltip: {},
    brushHighlight: {},
  },
});

```

```js
{
  "interaction": {
    "tooltip": {},
    "brushHighlight": {}
  }
}
```

Interaction can also be set at the mark level:

```js
({
  interaction: {
    tooltip: {},
    brushHighlight: {},
  },
});

```

```js
{
  "interaction": {
    "tooltip": {},
    "brushHighlight": {}
  }
}
```

## View Level Interaction

Ant Design Charts's interactions are effective for each view. If you want to turn off the interaction, you can do as follows:


```js
({
  interaction: {
    tooltip: false,
    brushHighlight: false,
  },
});

```

## Mark Level Interaction

Interaction has a bubbling nature. The view interaction will be overridden by the interaction set by its mark, and the coordinate system corresponding to the last mark has the highest priority.


```js
{
  "interaction": {
    "elementHighlight": {
      "link": false,
      "background": false
    }
  }
}
```

This is equivalent to the following situation:

```js
chart.interaction('elementHighlight', { link: false, background: false });
chart.line();
chart.area():
```

## Interaction State

In Ant Design Charts, you can set the interaction state of the mark through `mark.state`, such as setting the select and unselect states as follows. When using elementSelect, these two states will be consumed.


```js
{
  "interaction": {
    "elementSelect": true
  },
  "axis": {
    "y": {
      "labelFormatter": ".0%"
    }
  }
}
```

In addition to selected and unselected, there are the following built-in state types:

- active
- inactive

## Custom Interaction

If the built-in interaction cannot meet your needs, you can also implement some interactions through custom interaction. Here is a custom highlight interaction.


```js
{
  "interaction": {
    "customElementHighlight": true
  },
  "transform": [
    {
      "type": "dodgeX"
    }
  ]
}
```

## Interaction Syntax

> Interaction syntax is still under design...

