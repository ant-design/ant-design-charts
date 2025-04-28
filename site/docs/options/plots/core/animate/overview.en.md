---
title: overview
order: 1
---

Animate in Ant Design Charts is an important part of visualization and can improve the expressiveness of visualization. Animate can be declared at the level of mark:

```js
({
  animate: {
    enter: {
      duration: 100,
      delay: 10,
    },
    update: {},
  },
});

```

```js
{
  "animate": {
    "enter": {
      "duration": 100,
      "delay": 10
    },
    "update": {}
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

```js
{
  "animate": {
    "enter": {
      "duration": 1000
    }
  }
}
```

## Animation coding

Animation properties can be used as a channel in Ant Design Charts, and can also encode data. For example, in the gantt chart below, the appearance and duration of each bar are linearly related to the data.

```js
{
  "coordinate": {
    "transform": [
      {
        "type": "transpose"
      }
    ]
  }
}
```

## Group animation

Ant Design Charts also provides the StackEnter mark transform to implement group animation. This mark transform will first group graphics, and then stack their appearance time and duration in space to achieve the effect of appearing sequentially.


## Keyframe Animation

The animations above are all excessive animations and do not involve data updates. Ant Design Charts also provides the ability to create keyframe animations. use `chart.timingKeyframe` to create a time container that holds a series of views and applies smooth transitions to related graphical elements within those views. The corresponding relationship is specified by two channels, **key** and **groupKey**.

```js
{
  "attr": {
    "duration": 1000,
    "direction": "alternate",
    "iterationCount": 2
  },
  "call": {
    "0": "-",
    "1": "F",
    "2": "N",
    "3": "-",
    "4": "e",
    "5": "-",
    "6": "F",
    "7": "N",
    "8": "-",
    "undefined": "finallyLoc"
  }
}
```

## Time Series Animation

**TimingSequence** is still under development, please stay tuned.
