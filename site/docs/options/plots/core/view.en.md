---
title: View
order: 3
---

In Ant Design Charts, a **View** is used to draw multiple marks. A view possesses a coordinate system and serves as the smallest unit for applying interactions.

```js
({
  children: [{ type: 'interval' }],
});

```

The top-level Chart is, by default, a view:


When composite nodes are added to the top-level Chart, views can be declared using `chart.view`:


## Core Concepts

- [**data**](/options/plots/core/data/overview) - Data for visualization
- [**encode**](/options/plots/core/encode) - Encoding information
- [**scale**](/options/plots/core/scale/overview) - Mapping rules
- [**transform**](/options/plots/core/transform/overview) - Transform channel values
- [**coordinate**](/options/plots/core/coordinate/overview) - Coordinate transformation
- [**style**](/options/plots/core/style) - Visual style
- [**labelTransform**](/options/plots/component/label) - Data label transformation
- [**title**](/options/plots/component/title) - Chart title
- [**axis**](/options/plots/component/axis) - Axes
- [**legend**](/options/plots/component/legend) - Legend
- [**scrollbar**](/options/plots/component/scrollbar) - Scrollbar
- [**slider**](/options/plots/component/slider) - Drag axis
- [**interaction**](/options/plots/core/interaction/overview) - Interaction
- [**theme**](/options/plots/core/theme/overview) - Theme

```js
({
  data: [],
  encode: {},
  scale: {},
  transform: [],
  coordinate: {},
  style: {},
  labelTransform: {},
  title: {},
  axis: {},
  legend: {},
  tooltip: {},
  scrollbar: {},
  slider: {},
  interaction: {},
  theme: {},
});

```
