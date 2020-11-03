---
title: 水波图
order: 18
---

# 水波图

## Liquid

### 水波图

```tsx
import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/charts';

const DemoLiquid: React.FC = () => {
  var config = {
    percent: 0.25,
    statistic: {
      content: {
        style: {
          fontSize: 60,
          fill: 'black',
        },
      },
    },
  };
  return <Liquid {...config} />;
};

export default DemoLiquid;
```

### 样式自定义的水波图

```tsx
import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/charts';

const DemoLiquid: React.FC = () => {
  var config = {
    percent: 0.76,
    statistic: {
      content: {
        formatter: function formatter(_ref) {
          var percent = _ref.percent;
          return '占比 '.concat(percent * 100, '%');
        },
        style: {
          fontSize: 60,
          fill: 'white',
        },
      },
    },
    liquidStyle: function liquidStyle(_ref2) {
      var percent = _ref2.percent;
      return { fill: percent > 0.75 ? '#5B8FF9' : '#FAAD14' };
    },
    color: function color() {
      return '#5B8FF9';
    },
  };
  return <Liquid {...config} />;
};

export default DemoLiquid;
```
