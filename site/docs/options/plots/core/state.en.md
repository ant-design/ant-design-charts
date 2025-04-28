---
title: 状态（State）
order: 11
---

State in Ant Design Charts is mainly used to control the state style of mark. These states will be interactively triggered and the attributes are style attributes supported by @antv/g.

```js
({
  state: {
    active: { fill: 'red', stroke: 'blue', strokeWidth: 2 },
    inactive: { fill: '#aaa' },
  },
});

```


## Built-in States

There are currently 4 built-in states:

- active - the style when highlighted
- inactive - style when not highlighted
- selected - style when selected
- unselected - style when not selected

## Highlighted States

```js
{
  "interaction": "elementHighlight",
  "axis": {
    "y": {
      "labelFormatter": ".0%"
    }
  }
}
```

## Selected States

```js
{
  "interaction": "elementSelect",
  "axis": {
    "y": {
      "labelFormatter": ".0%"
    }
  }
}
```
