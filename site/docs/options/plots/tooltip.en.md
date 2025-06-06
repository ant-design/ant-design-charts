---
title: Tooltip
order: 6
---

In Ant Design Charts, the **Tooltip** can provide additional information about data points, helping users better understand and interpret visualization. In visualization, Tooltip usually has the following roles:

- **Display detailed information**: Tooltip can display detailed information about data points, such as specific values, percentages, or other related attributes. This helps users understand the data more deeply.
- **Improve readability**: In complex visualizations, Tooltip can help users more easily identify and understand data points. For example, in a scatter plot, when data points are dense, Tooltip can display detailed information of a specific point without having to hover the mouse over each point.
- **Enhance interactivity**: Tooltip can enhance the interactivity of visualization. Users can view more information by hovering over or clicking on data points, making the visualization more dynamic and interesting.
- **Highlight key information**: Tooltip can be used to highlight key information. For example, in a time series chart, you can use Tooltip to display important events or mutations at specific time points.

In Ant Design Charts, you can specify the tooltip information that this mark needs to display through `mark.tooltip`.

```js
({
  tooltip: {
    title: 'name', // title
    items: ['genre'], // data items
  },
});
```

When there is only one mark in this view, you can also configure the rendering and additional configuration of tooltip information through `mark.interaction.tooltip`.

```js
({
  interaction: {
    tooltip: { series: true },
  },
});
```

More options about tooltip, see the document of [tooltip](/options/plots/tooltip).
