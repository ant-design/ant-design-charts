---
title: Tooltip
order: 7.5
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

```js
{
  "tooltip": {
    "items": [
      {
        "title": "name",
        "items": [
          "genre"
        ]
      }
    ]
  }
}
```

And combine `view.interaction.tooltip` to configure the rendering and additional configuration of tooltip information.

```js
({
  interaction: {
    tooltip: { series: true },
  },
});

```

```js
{
  "interaction": {
    "tooltip": {
      "series": true
    }
  }
}
```

When there is only one mark in this view, you can also configure the rendering and additional configuration of tooltip information through `mark.interaction.tooltip`.

```js
({
  interaction: {
    tooltip: { series: true },
  },
});

```

```js
{
  "interaction": {
    "tooltip": {
      "series": true
    }
  }
}
```

## Setting Tooltip Content

Different marks have different default tooltip information, you can override the default content through `mark.tooltip(tooltipData)`. The complete structure of tooltipData is as follows:

```js
({
  data: [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ],
  tooltip: {
    title: (d) => (d.sold > 150 ? 'high' : 'low'), // set title
    items: [
      'genre', // First item
      'sold', // Second item
    ],
  },
});

```

When you don't need to set the title, you can directly declare it as an array:

```js
({
  tooltip: ['genre', 'sold'],
});

```

```js
{
  "tooltip": {
    "items": [
      [
        "genre",
        "sold"
      ]
    ]
  }
}
```

The complete structure of title and item is as follows:

```ts
type Item = {
  color?: string, // color of the marker
  name?: string, // name of the item
  value?: string, // value of the item
};

```

They can be set in the following ways.

### Field

Their values can come from the original data, specified by a string or `item.field`.

```js
({
  tooltip: {
    title: 'sold',
    items: ['genre'],
  },
});

```

```js
({
  tooltip: {
    title: 'sold',
    items: [{ field: 'genre' }],
  },
});

```

### Channel

Their values can come from channel values, specified by `item.channel`, often used for charts that generate new channels using `mark.transform`.

```js
({
  tooltip: {
    title: { channel: 'x' },
    items: [{ channel: 'y' }],
  },
});

```

### Formatting

You can specify the display of the title or item value through `item.valueFormatter`, which can be a function or a string supported by d3-format.

```js
({
  tooltip: {
    items: [{ channel: 'y', valueFormatter: '.0%' }],
  },
});

```

### Customization

Of course, for title and item, callbacks are also provided to achieve the greatest customization ability.

```js
({
  tooltip: {
    items: [
      (d, index, data, column) => ({
        color: d.sold > 150 ? 'red' : 'blue', // specify the color of the item
        name: index === 0 ? d.genre : `${d.genre} ${data[i].genre}`, // specify the name of the item
        value: column.y.value[i], // use the value of the y channel
      }),
    ],
  },
});

```

## Built-in Tooltip

Ant Design Charts opens Tooltip interaction by default. If you need to configure Tooltip properties, you can do so through `chart.interaction.tooltip`.

```js
{
  "interaction": {
    "tooltip": {
      "crosshairsStroke": "red",
      "crosshairsStrokeWidth": 4
    }
  }
}
```

## Disabling Tooltip

If you don't want to display the tooltip information for this Mark, you can do so through `mark.tooltip`.

```js
({
  tooltip: false,
});

```

```js
{
  "tooltip": false
}
```

If you don't want the chart to have tooltip interaction, you can do so through `chart.interaction`.

```js
({
  interaction: { tooltip: false },
});

```

```js
{
  "interaction": {
    "tooltip": false
  }
}
```

## Setting Tooltip Style

```js
{
  "transform": [
    {
      "type": "dodgeX"
    }
  ],
  "legend": false,
  "interaction": {
    "tooltip": {
      "shared": true,
      "mount": "body",
      "css": {
        ".g2-tooltip": {
          "background": "#eee",
          "border-radius": " 0.25em !important"
        },
        ".g2-tooltip-title": {
          "font-size": "20px",
          "font-weight": "bold",
          "padding-bottom": "0.25em"
        },
        ".g2-tooltip-list-item": {
          "background": "#ccc",
          "padding": "0.25em",
          "margin": "0.25em",
          "border-radius": "0.25em"
        },
        ".g2-tooltip-list-item-name-label": {
          "font-weight": "bold",
          "font-size": "16px"
        },
        "g2-tooltip-list-item-marker": {
          "border-radius": "0.25em",
          "width": "15px",
          "height": "15px"
        },
        ".g2-tooltip-list-item-value": {
          "font-weight": "bold",
          "font-size": "16px"
        }
      }
    }
  }
}
```
