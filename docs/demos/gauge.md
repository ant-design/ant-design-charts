---
title: Gauge
order: 15
---

# Gauge

## Gauge

### Gauge

```tsx
import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const DemoGauge: React.FC = () => {
  var [percent, setPercent] = useState(0.2);
  var [rangeColor, setRangeColor] = useState('#F4664A');
  var color = ['#F4664A', '#FAAD14', '#30BF78'];
  var ref;

  var getColor = function getColor(percent) {
    return percent < 0.4 ? color[0] : percent < 0.6 ? color[1] : color[2];
  };
  var config = {
    percent,
    range: { color: rangeColor },
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
      },
      style: { fontSize: 60 },
    },
    animation: false,
  };
  useEffect(() => {
    var data = percent;
    var interval = setInterval(function () {
      if (data >= 0.85) {
        clearInterval(interval);
      } else {
        data += 0.095;
        setPercent(data);
        setRangeColor(getColor(data));
      }
    }, 500);
  }, []);

  return <Gauge {...config} chartRef={(chartRef) => (ref = chartRef)} />;
};

export default DemoGauge;
```

### 自定义配置的仪表盘

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
      if (data >= 1) {
        clearInterval(interval);
      }
      data += 0.1;
      setPercent(data);
    }, 1000);
  }, []);

  return <Gauge {...config} chartRef={(chartRef) => (ref = chartRef)} />;
};

export default DemoGauge;
```

### Gauge(多色)

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

### Gauge(单色渐变)

```tsx
import React, { useState, useEffect } from 'react';
import { Gauge } from '@ant-design/charts';

const DemoGauge: React.FC = () => {
  var config = {
    percent: 0.75,
    range: { color: 'l(0) 0:#bde8ff 1:#9ec9ff' },
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
