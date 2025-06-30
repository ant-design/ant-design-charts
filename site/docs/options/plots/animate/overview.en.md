---
title: overview
order: 1
---

Animate in Ant Design Charts is an important part of visualization and can improve the expressiveness of visualization. Animate can be declared at the level of mark:

```js
({
  type: 'interval',
  animate: {
    enter: {
      type: 'scaleInX',
      duration: 100,
      delay: 10,
    },
    update: {
      type: 'morphing',
    },
  },
});
```

```js
{
  "type": "interval",
  "animate": {
    "enter": {
      "type": "scaleInX",
      "duration": 100,
      "delay": 10
    },
    "update": {
      "type": "morphing"
    }
  }
}
```

## Animate Properties

Mark specifies animation properties through `mark.animate`, there are three parts of animation that can be specified:

- **enter**- New graphics
- **update**- Updated graphics
- **exit**- deleted graphics

Each part of the animation has the following properties:

- **type**
- **duration**
- **delay**
- **easing**

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
    "animate": {
      "enter": {
        "type": "scaleInY",
        "duration": 1000
      }
    },
    "colorField": "genre",
    "yField": "sold",
    "xField": "genre",
    "data": [     { genre: 'Sports', sold: 275 },     { genre: 'Strategy', sold: 115 },     { genre: 'Action', sold: 120 },     { genre: 'Shooter', sold: 350 },     { genre: 'Other', sold: 150 },   ]
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

## Animation coding

Animation properties can be used as a channel in Ant Design Charts, and can also encode data. For example, in the gantt chart below, the appearance and duration of each bar are linearly related to the data.

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
    "enterDelayField": "startTime",
    "enterDurationField": (d) => d.endTime - d.startTime,
    "colorField": "name",
    "yField": ['endTime', 'startTime'],
    "xField": "name",
    "data": [     { name: 'event planning', startTime: 1, endTime: 4 },     { name: 'layout logistics', startTime: 3, endTime: 13 },     { name: 'select vendors', startTime: 5, endTime: 8 },     { name: 'hire venue', startTime: 9, endTime: 13 },     { name: 'hire caterer', startTime: 10, endTime: 14 },     { name: 'hire event decorators', startTime: 12, endTime: 17 },     { name: 'rehearsal', startTime: 14, endTime: 16 },     { name: 'event celebration', startTime: 17, endTime: 18 },   ],
    "coordinate": {
      "transform": [{ type: 'transpose' }]
    }
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

## Group animation

Ant Design Charts also provides the StackEnter mark transform to implement group animation. This mark transform will first group graphics, and then stack their appearance time and duration in space to achieve the effect of appearing sequentially.

```js | ob { autoMount: true }
import { Column } from '@ant-design/plots';
import React from 'react';
import { createRoot } from 'react-dom';

const Demo = () => {

  const config ={
    "enterDurationField": 1000,
    "seriesField": "type",
    "colorField": "type",
    "yField": "value",
    "xField": "year",
    "transform": [
      {
        "type": "stackEnter",
        "groupBy": "color"
      }
    ],
    "data": [     { type: 'Apple', year: '2001', value: 260 },     { type: 'Orange', year: '2001', value: 100 },     { type: 'Banana', year: '2001', value: 90 },     { type: 'Apple', year: '2002', value: 210 },     { type: 'Orange', year: '2002', value: 150 },     { type: 'Banana', year: '2002', value: 30 },   ]
  };

  return <Column {...config} />;
};

createRoot(document.getElementById('container')).render(<Demo />);
```

## Keyframe Animation

The animations above are all excessive animations and do not involve data updates. Ant Design Charts also provides the ability to create keyframe animations. use `chart.timingKeyframe` to create a time container that holds a series of views and applies smooth transitions to related graphical elements within those views. The corresponding relationship is specified by two channels, **key** and **groupKey**.

## Time Series Animation

**TimingSequence** is still under development, please stay tuned.
