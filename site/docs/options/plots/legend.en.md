---
title: Legend
order: 3
---

In Ant Design Charts, the **Legend** can be understood as the visualization of the non-spatial channel (color, opacity, size, shape) corresponding to the scale.

The legend can be configured at the mark level:

```js
({
  legend: {
    color: {},
    size: {},
  },
});
```

## Mark Legend

In Ant Design Charts, each mark has its own legend. If the scale corresponding to the mark is synchronized, the legends will be merged.

## View Legend

The legend has transitivity. The legend declared on the view will be passed to the `children` declared mark. If the mark has a corresponding channel legend, it will be merged; otherwise, it will not be affected.

## Hide Legend

Hide the legend of each channel:

```js
({
  legend: { color: false }, // Hide the legend of the color channel
});
```

Hide multiple legends:

```js
({
  legend: false,
});
```

More options about legend, see the document of [legend](/options/plots/legend).
