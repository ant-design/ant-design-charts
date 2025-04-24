---
title: overview
order: 1
---

In Ant Design Charts, **Data** is primarily used to specify the data to be visualized and data transformation (pre-processing).  Data can be specified at the view level:

```js
({
  data: [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ],
});

```


It can also be specified at the mark level:

```js
({
  data: [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ],
});

```


## Connectors and Transforms

A complete data declaration consists of two parts: **Connector** and **Data Transform**. Connector is the way to get data, specified by `data.type`, and data transform is the pre-processing function, specified by `data.transform`.

```js
({
  data: {
    // Specify connector value
    value: 'https://gw.alipayobjects.com/os/basement_prod/6b4aa721-b039-49b9-99d8-540b3f87d339.json',
    transform: [
      // specify transforms, multiple can be specified
    ],
  },
});

```

If the data satisfies the following three conditions:


- Inline data
- Is an array
- No pre-processing function

It can be directly specified as `data`:

```js
({
  data: [
    { genre: 'Sports', sold: 275 },
    { genre: 'Strategy', sold: 115 },
    { genre: 'Action', sold: 120 },
    { genre: 'Shooter', sold: 350 },
    { genre: 'Other', sold: 150 },
  ],
});

```

## Data in Mark

Each mark has its data, which means we can visualize multiple datasets in one view, such as the following interval chart:


```js
{
  "tooltip": false,
  "style": {
    "fillOpacity": 0.75
  },
  "scale": {
    "color": {
      "independent": true,
      "range": [
        "#FAAD14",
        "#30BF78"
      ]
    }
  }
}
```

## Data in View

The view can also be data-bound. The data bound to a view is transitive: it will be passed to the marks in `view.children`. If the mark does not have data, its data will be set; otherwise, there is no effect. This means that for marks that share data, you can bind the data to the view.


## Data Updates

Since the data is bound to the mark, updating the data can be a bit complicated. Take the following case as an example:


There are several ways to update the data of the interval in the above example:

- First method: The most basic way.


- Second method: Syntactic sugar for the above method.

```js
interval.changeData(newData);

```

- Third method: Get the interval object through the query API, then update the data.

```js
chart.getNodesByType('rect')[0].changeData(data);

```

## FAQ

- How to use third-party libraries to draw statistical regression lines?

With the ability to customize data conversion, we can use external data processing-related libraries. In the example below, we use the third-party library [d3-regression](https://github.com/HarryStevens/d3-regression) to generate a linear statistical regression line:


More examples of statistical regression lines can be found in [Data Analysis-regression](/examples#analysis-regression).
