---
title: Scrollbar
order: 4
---

In Ant Design Charts, the **Scrollbar** can be used to filter data, and it can be bound with the x or y channel. By default, the scrollbar is turned off.

The scrollbar can be configured at the mark level:

```js
({
  scrollbar: {
    x: {},
    y: {},
  },
});
```

## Mark Scrollbar

In Ant Design Charts, each mark has its own scrollbar. If the scale corresponding to the mark is synchronized, the scrollbars will also merge.

## View Scrollbar

The scrollbar has transitivity. The scrollbar declared on the view will be passed to the `children` declared mark. If this mark has a corresponding channel scrollbar, it will merge; otherwise, it will not effect.

More options about scrollbar, see the document of [scrollbar](/options/plots/scrollbar).
