---
title: Slider
order: 7.4
---

In Ant Design Charts, the **Slider** can be used to filter data, and it can be bound with the x or y channel. By default, the slider is turned off.

The slider can be configured at the mark level:


```js
({
  slider: {
    x: {},
    y: {},
  },
});

```


The slider can also be configured at the view level:

```js
({
  slider: {
    x: {},
    y: {},
  },
});

```

## Mark Slider

In Ant Design Charts, each mark has its own slider. If the scale corresponding to the mark is synchronized, the sliders will also merge.

## View Slider

The slider has transitivity. The slider declared on the view will be passed to the mark declared by `children`. If this mark has a slider for the corresponding channel, they will merge; otherwise, it will not be affected.