---
title: 水滴图
order: 16
---

### 水波图

```tsx
import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/charts';

const DemoLiquid: React.FC = () => {
  var config = {
    percent: 0.25,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: { length: 128 },
  };
  return <Liquid {...config} />;
};

export default DemoLiquid;
```

### 形状自定义的水波图

```tsx
import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/charts';

const DemoLiquid: React.FC = () => {
  var config = {
    percent: 0.25,
    shape: function shape(x, y, width, height) {
      var r = width / 4;
      var dx = x - width / 2;
      var dy = y - height / 2;
      return [
        ['M', dx, dy + r * 2],
        ['A', r, r, 0, 0, 1, x, dy + r],
        ['A', r, r, 0, 0, 1, dx + width, dy + r * 2],
        ['L', x, dy + height],
        ['L', dx, dy + r * 2],
        ['Z'],
      ];
    },
    outline: {
      border: 4,
      distance: 8,
    },
    wave: { length: 128 },
  };
  return <Liquid {...config} />;
};

export default DemoLiquid;
```

### 钻石水波图

```tsx
import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/charts';

const DemoLiquid: React.FC = () => {
  var config = {
    percent: 0.25,
    shape: 'diamond',
    outline: {
      border: 4,
      distance: 8,
    },
    wave: { length: 128 },
  };
  return <Liquid {...config} />;
};

export default DemoLiquid;
```

### 自定义 outline 外框样式

```tsx
import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/charts';

const DemoLiquid: React.FC = () => {
  var config = {
    percent: 0.25,
    shape: function shape(x, y, width, height) {
      var path = [];
      var w = Math.min(width, height);
      for (var i = 0; i < 5; i++) {
        path.push([
          i === 0 ? 'M' : 'L',
          (Math.cos(((18 + i * 72) * Math.PI) / 180) * w) / 2 + x,
          (-Math.sin(((18 + i * 72) * Math.PI) / 180) * w) / 2 + y,
        ]);
        path.push([
          'L',
          (Math.cos(((54 + i * 72) * Math.PI) / 180) * w) / 4 + x,
          (-Math.sin(((54 + i * 72) * Math.PI) / 180) * w) / 4 + y,
        ]);
      }
      path.push(['Z']);
      return path;
    },
    outline: {
      border: 2,
      distance: 4,
      style: {
        stroke: '#FFC100',
        strokeOpacity: 0.65,
      },
    },
    wave: { length: 128 },
    theme: { styleSheet: { brandColor: '#FAAD14' } },
  };
  return <Liquid {...config} />;
};

export default DemoLiquid;
```

### 矩形水波图

```tsx
import React, { useState, useEffect } from 'react';
import { Liquid } from '@ant-design/charts';

const DemoLiquid: React.FC = () => {
  var config = {
    percent: 0.25,
    shape: 'rect',
    outline: {
      border: 2,
      distance: 4,
    },
    wave: { length: 128 },
  };
  return <Liquid {...config} />;
};

export default DemoLiquid;
```

### 样式自定义的水波图

```tsx
import React, { useState, useEffect } from 'react';
import { Liquid, measureTextWidth } from '@ant-design/charts';

const DemoLiquid: React.FC = () => {
  var [percent, setPercent] = useState(0.26);
  var ref;
  var config = {
    percent,
    radius: 0.8,
    statistic: {
      title: {
        formatter: function formatter() {
          return '盈利率';
        },
        style: function style(_ref) {
          var percent = _ref.percent;
          return { fill: percent > 0.65 ? 'white' : 'rgba(44,53,66,0.85)' };
        },
      },
      content: {
        style: function style(_ref2) {
          var percent = _ref2.percent;
          return {
            fontSize: 60,
            lineHeight: 1,
            fill: percent > 0.65 ? 'white' : 'rgba(44,53,66,0.85)',
          };
        },
        customHtml: function customHtml(container, view, _ref3) {
          var percent = _ref3.percent;
          var _container$getBoundin = container.getBoundingClientRect(),
            width = _container$getBoundin.width,
            height = _container$getBoundin.height;
          var d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
          var text = '占比 '.concat((percent * 100).toFixed(0), '%');
          var textWidth = (0, measureTextWidth)(text, { fontSize: 60 });
          var scale = Math.min(d / textWidth, 1);
          return '<div style="width:'
            .concat(d, 'px;display:flex;align-items:center;justify-content:center;font-size:')
            .concat(scale, 'em;line-height:')
            .concat(scale <= 1 ? 1 : 'inherit', '">')
            .concat(text, '</div>');
        },
      },
    },
    liquidStyle: function liquidStyle(_ref4) {
      var percent = _ref4.percent;
      return {
        fill: percent > 0.45 ? '#5B8FF9' : '#FAAD14',
        stroke: percent > 0.45 ? '#5B8FF9' : '#FAAD14',
      };
    },
    color: function color() {
      return '#5B8FF9';
    },
  };
  useEffect(() => {
    var data = 0.25;
    var interval = setInterval(function () {
      data += Math.min(Math.random() * 0.1, 0.1);
      if (data < 0.75) {
        setPercent(data);
      } else {
        clearInterval(interval);
      }
    }, 500);
  }, []);
  return <Liquid {...config} chartRef={(chartRef) => (ref = chartRef)} />;
};

export default DemoLiquid;
```
