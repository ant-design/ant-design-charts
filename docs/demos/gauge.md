---
title: 仪表盘
order: 13
---

### 仪表盘

```tsx
import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const DemoGauge: React.FC = () => {
  var config = {
    percent: 0.75,
    range: { color: '#30BF78' },
    indicator: {
      pointer: { style: { stroke: '#D0D0D0' } },
      pin: { style: { stroke: '#D0D0D0' } },
    },
    axis: {
      label: {
        formatter: function formatter(v) {
          return Number(v) * 100;
        },
      },
      subTickLine: { count: 3 },
    },
    statistic: {
      content: {
        formatter: function formatter(_ref) {
          var percent = _ref.percent;
          return 'Rate: '.concat((percent * 100).toFixed(0), '%');
        },
        style: {
          color: 'rgba(0,0,0,0.65)',
          fontSize: 48,
        },
      },
    },
  };
  return <Gauge {...config} />;
};

export default DemoGauge;
```

### 仪表盘(渐变色)

```tsx
import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const DemoGauge: React.FC = () => {
  var [percent, setPercent] = useState(0);
  var ref;
  var ticks = [0, 1 / 3, 2 / 3, 1];
  var color = ['#F4664A', '#FAAD14', '#30BF78'];
  var config = {
    percent,
    range: {
      ticks: [0, 1],
      color: ['l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78'],
    },
    indicator: {
      pointer: { style: { stroke: '#D0D0D0' } },
      pin: { style: { stroke: '#D0D0D0' } },
    },
    statistic: {
      title: {
        formatter: function formatter(_ref) {
          var percent = _ref.percent;
          if (percent < ticks[1]) {
            return '差';
          }
          if (percent < ticks[2]) {
            return '中';
          }
          return '优';
        },
        style: function style(_ref2) {
          var percent = _ref2.percent;
          return {
            fontSize: '36px',
            lineHeight: 1,
            color: percent < ticks[1] ? color[0] : percent < ticks[2] ? color[1] : color[2],
          };
        },
      },
      content: {
        offsetY: 36,
        style: {
          fontSize: '24px',
          color: '#4B535E',
        },
        formatter: function formatter() {
          return '系统表现';
        },
      },
    },
  };
  useEffect(() => {
    var data = percent;
    var interval = setInterval(function () {
      if (data >= 1.5) {
        clearInterval(interval);
      }
      data += 0.005;
      setPercent(data);
    }, 1000);
  }, []);
  return <Gauge {...config} chartRef={(chartRef) => (ref = chartRef)} />;
};

export default DemoGauge;
```

### 仪表盘(多色)

```tsx
import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const DemoGauge: React.FC = () => {
  var config = {
    percent: 0.75,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ['#F4664A', '#FAAD14', '#30BF78'],
    },
    indicator: {
      pointer: { style: { stroke: '#D0D0D0' } },
      pin: { style: { stroke: '#D0D0D0' } },
    },
    statistic: {
      content: {
        style: {
          fontSize: '36px',
          lineHeight: '36px',
        },
      },
    },
  };
  return <Gauge {...config} />;
};

export default DemoGauge;
```

### 米轨仪表盘(自定义步数和大小)

```tsx
import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const DemoGauge: React.FC = () => {
  var [percent, setPercent] = useState(0);
  var ref;
  var ticks = [0, 1 / 3, 2 / 3, 1];
  var color = ['#F4664A', '#FAAD14', '#30BF78'];
  var config = {
    percent,
    innerRadius: 0.75,
    type: 'meter',
    meter: {
      steps: 50,
      stepRatio: 0.6,
    },
    range: {
      ticks: [0, 1],
      color: ['l(0) 0:#F4664A 0.5:#FAAD14 1:#30BF78'],
    },
    indicator: {
      pointer: { style: { stroke: '#D0D0D0' } },
      pin: { style: { stroke: '#D0D0D0' } },
    },
    statistic: {
      title: {
        formatter: function formatter(_ref) {
          var percent = _ref.percent;
          if (percent < ticks[1]) {
            return '差';
          }
          if (percent < ticks[2]) {
            return '中';
          }
          return '优';
        },
        style: function style(_ref2) {
          var percent = _ref2.percent;
          return {
            fontSize: '36px',
            lineHeight: 1,
            color: percent < ticks[1] ? color[0] : percent < ticks[2] ? color[1] : color[2],
          };
        },
      },
      content: {
        offsetY: 36,
        style: {
          fontSize: '24px',
          color: '#4B535E',
        },
        formatter: function formatter() {
          return '系统表现';
        },
      },
    },
  };

  useEffect(() => {
    var data = percent;
    var interval = setInterval(function () {
      if (data >= 1.5) {
        clearInterval(interval);
      }
      data += 0.005;
      setPercent(data);
    }, 1000);
  }, []);

  return <Gauge {...config} chartRef={(chartRef) => (ref = chartRef)} />;
};

export default DemoGauge;
```

### 米轨仪表盘

```tsx
import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const DemoGauge: React.FC = () => {
  var config = {
    percent: 0.75,
    type: 'meter',
    innerRadius: 0.75,
    range: {
      ticks: [0, 1 / 3, 2 / 3, 1],
      color: ['#F4664A', '#FAAD14', '#30BF78'],
    },
    indicator: {
      pointer: { style: { stroke: '#D0D0D0' } },
      pin: { style: { stroke: '#D0D0D0' } },
    },
    statistic: {
      content: {
        style: {
          fontSize: '36px',
          lineHeight: '36px',
        },
      },
    },
  };
  return <Gauge {...config} />;
};

export default DemoGauge;
```

### 设置仪表盘的辅助圆弧宽度

```tsx
import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const DemoGauge: React.FC = () => {
  var config = {
    percent: 0.75,
    radius: 0.75,
    range: {
      color: '#30BF78',
      width: 12,
    },
    indicator: {
      pointer: { style: { stroke: '#D0D0D0' } },
      pin: { style: { stroke: '#D0D0D0' } },
    },
    statistic: {
      content: {
        formatter: function formatter(_ref) {
          var percent = _ref.percent;
          return 'Rate: '.concat((percent * 100).toFixed(0), '%');
        },
      },
      style: { fontSize: 60 },
    },
    gaugeStyle: { lineCap: 'round' },
  };
  return <Gauge {...config} />;
};

export default DemoGauge;
```

### 仪表盘(单色渐变)

```tsx
import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const DemoGauge: React.FC = () => {
  var config = {
    percent: 0.75,
    range: { color: 'l(0) 0:#B8E1FF 1:#3D76DD' },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        offsetY: -36,
        style: {
          fontSize: '36px',
          color: '#4B535E',
        },
        formatter: function formatter() {
          return '70%';
        },
      },
      content: {
        style: {
          fontSize: '24px',
          lineHeight: '44px',
          color: '#4B535E',
        },
        formatter: function formatter() {
          return '加载进度';
        },
      },
    },
  };
  return <Gauge {...config} />;
};

export default DemoGauge;
```
