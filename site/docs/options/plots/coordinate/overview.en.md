---
title: overview
order: 1
---

**The Coordinate System** in Ant Design Charts will perform a series of point transform. In Ant Design Charts, the mark's position channels x and y will be mapped to the range [0,1] through a scale mapping, after that, the coordinate system is used to transform points into canvas coordinates, thereby changing the spatial display of the mark.

The coordinate system be configured at the level of view:

```js
({
  type: 'view',
  coordinate: { type: 'polar' },
});
```

```js
{
  "coordinate": {
    "type": "polar"
  }
}
```

It can also be configured at the level of mark:

```js
({
  type: 'interval',
  coordinate: { type: 'polar' },
});
```

```js
{
  "type": "interval",
  "coordinate": {
    "type": "polar"
  }
}
```

## View Coordinate System

Each view can only have one coordinate system. In addition to its own attributes, the coordinate system also contains a series of **Coordinate Transform**。

```js
({
  type: 'polar', // type
  innerRadius: 0.6, // its own properties
  outerRadius: 0.8,
  transform: [{ type: 'transpose' }], // Coordinate transform
});
```

## Mark Coordinate System

The coordinate system of the level of mark has bubbling properties. The coordinate system of the level of mark will be merged with the coordinate system of the view, and the coordinate system of the first mark has the highest priority.

```js
{
  "type": "line",
  "coordinate": {
    "type": "polar"
  }
}
```

Equivalent to the following situation:

```js
```js
chart.coordinate({ type: 'polar' });
chart.line();
chart.area():
```
```

This feature is conducive to encapsulation and coordinate-related composite mark, such as pie charts:

```js | ob { autoMount: true }
{
    // Use this compound mark
    type: Pie,
    data: [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ],
    valueField: 'sold',
    colorField: 'genre'
}
```

## Common Coordinate Systems

The default coordinate system is the Cartesian coordinate system. In addition, there is also a kind of coordinate system that transforms charts to polar coordinate systems and is used to draw a series of "circle" charts. This type of coordinate system is called **Radial Coordinate**。

### Polar

For example, you can use interval mark and polar coordinate transform to draw rose charts.

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
    "axis": {
      "y": false
    },
    "colorField": "genre",
    "yField": "sold",
    "xField": "genre",
    "data": [     { genre: 'Sports', sold: 275 },     { genre: 'Strategy', sold: 115 },     { genre: 'Action', sold: 120 },     { genre: 'Shooter', sold: 350 },     { genre: 'Other', sold: 150 },   ],
    "coordinate": {
      "type": "polar"
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

### Theta

You can also use interval mark and theta coordinate system to draw pie charts.

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
    "colorField": "genre",
    "yField": "sold",
    "data": [     { genre: 'Sports', sold: 275 },     { genre: 'Strategy', sold: 115 },     { genre: 'Action', sold: 120 },     { genre: 'Shooter', sold: 350 },     { genre: 'Other', sold: 150 },   ],
    "transform": [
      {
        "type": "stackY"
      }
    ],
    "coordinate": {
      "type": "theta"
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

### Radial

You can also use interval mark and radial coordinate systems to draw radial charts.

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
    "axis": {
      "x": {},
      "y": false
    },
    "legend": {
      "color": false
    },
    "colorField": "genre",
    "yField": "sold",
    "xField": "genre",
    "data": [     { genre: 'Strategy', sold: 115 },     { genre: 'Action', sold: 120 },     { genre: 'Other', sold: 150 },     { genre: 'Sports', sold: 275 },     { genre: 'Shooter', sold: 350 },   ],
    "coordinate": {
      "type": "radial"
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

### Parallel

In addition to the previous relatively basic coordinate transform, there are also some slightly more complex coordinate transform, such as parallel coordinate system.

```js | ob { autoMount: true }
import { Line } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {
  const axis = {
    zIndex: 1,
    titlePosition: 'right',
    line: true,
    labelStroke: '#fff',
    labelStrokeWidth: 5,
    labelFontSize: 10,
    labelStrokeLineJoin: 'round',
    titleStroke: '#fff',
    titleFontSize: 10,
    titleStrokeWidth: 5,
    titleStrokeLineJoin: 'round',
    titleTransform: 'translate(-50%, 0) rotate(-90)',
    lineStroke: 'black',
    tickStroke: 'black',
    lineStrokeWidth: 1,
  };

  const config ={
    "interaction": {
      "tooltip": {
        "series": false
      }
    },
    "axis": {
      "position7": axis,
      "position6": axis,
      "position5": axis,
      "position4": axis,
      "position3": axis,
      "position2": axis,
      "position1": axis,
      "position": axis
    },
    "legend": {
      "color": {
        "length": 400
      }
    },
    "scale": {
      "color": {
        "type": "sequential",
        "palette": "brBG",
        "offset": (t) => 1 - t
      }
    },
    "style": {
      "strokeOpacity": 0.4,
      "strokeWidth": 1.5
    },
    "colorField": "weight (lb)",
    "positionField": [     'economy (mpg)',     'cylinders',     'displacement (cc)',     'power (hp)',     'weight (lb)',     '0-60 mph (s)',     'year',   ],
    "coordinate": {
      "type": "parallel"
    },
    "data": {
      "type": "fetch",
      "value": "https://assets.antv.antgroup.com/g2/cars3.json"
    }
  };

  return <Line {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

## Coordinate Transform

The above coordinate system can be used in combination with the coordinate transform.

### Transpose

One of the more commonly used transform is transpose, which is mainly used to change the direction of the chart. For example, draw horizontal bar charts.

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
    "yField": "sold",
    "xField": "genre",
    "data": [     { genre: 'Sports', sold: 275 },     { genre: 'Strategy', sold: 115 },     { genre: 'Action', sold: 120 },     { genre: 'Shooter', sold: 350 },     { genre: 'Other', sold: 150 },   ],
    "coordinate": {
      "transform": [{ type: 'transpose' }]
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

### Fisheye

There is also a fisheye coordinate transform, which is used to set the focus of the chart. Here is how to use it.

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
    "interaction": {
      "fisheye": true
    },
    "legend": false,
    "style": {
      "lineWidth": 1,
      "fillOpacity": 0.3
    },
    "axis": {
      "x": {
        "labelFormatter": "~s"
      }
    },
    "scale": {
      "size": {
        "type": "log",
        "range": [4, 20]
      }
    },
    "shapeField": "point",
    "colorField": "continent",
    "sizeField": "Population",
    "yField": "LifeExpectancy",
    "xField": "GDP",
    "data": {
      "type": "fetch",
      "value": "https://gw.alipayobjects.com/os/antvdemo/assets/data/bubble.json"
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

## 3D Coordinate System

At present, we only support `cartesian3D` coordinate system:

```js
{
  "coordinate": {
    "type": "cartesian3D"
  }
}
```
