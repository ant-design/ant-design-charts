---
title: 柱形图
order: 4
---

### 基础柱状图

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  var data = [
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '粮油副食',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 48,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
      sales: 38,
    },
  ];
  var config = {
    data: data,
    xField: 'type',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: { alias: '类别' },
      sales: { alias: '销售额' },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 自定义柱状图颜色

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  var data = [
    {
      type: '1-3秒',
      value: 0.16,
    },
    {
      type: '4-10秒',
      value: 0.125,
    },
    {
      type: '11-30秒',
      value: 0.24,
    },
    {
      type: '31-60秒',
      value: 0.19,
    },
    {
      type: '1-3分',
      value: 0.22,
    },
    {
      type: '3-10分',
      value: 0.05,
    },
    {
      type: '10-30分',
      value: 0.01,
    },
    {
      type: '30+分',
      value: 0.015,
    },
  ];
  var paletteSemanticRed = '#F4664A';
  var brandColor = '#5B8FF9';
  var config = {
    data: data,
    xField: 'type',
    yField: 'value',
    seriesField: '',
    color: function color(_ref) {
      var type = _ref.type;
      if (type === '10-30分' || type === '30+分') {
        return paletteSemanticRed;
      }
      return brandColor;
    },
    label: {
      content: function content(originData) {
        var val = parseFloat(originData.value);
        if (val < 0.05) {
          return (val * 100).toFixed(1) + '%';
        }
      },
      offset: 10,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 带转化率柱状图

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  var data = [
    {
      action: '浏览网站',
      pv: 50000,
    },
    {
      action: '放入购物车',
      pv: 35000,
    },
    {
      action: '生成订单',
      pv: 25000,
    },
    {
      action: '支付订单',
      pv: 15000,
    },
    {
      action: '完成交易',
      pv: 8500,
    },
  ];
  var config = {
    data: data,
    xField: 'action',
    yField: 'pv',
    conversionTag: {},
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 带辅助框标注的基础柱状图

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  var data = [
    {
      month: '1',
      value: 1078,
    },
    {
      month: '2',
      value: 1216,
    },
    {
      month: '3',
      value: 758,
    },
    {
      month: '4',
      value: 623,
    },
    {
      month: '5',
      value: 319,
    },
    {
      month: '6',
      value: 422,
    },
    {
      month: '7',
      value: -4,
    },
    {
      month: '8',
      value: -217,
    },
    {
      month: '9',
      value: -358,
    },
    {
      month: '10',
      value: 1513,
    },
    {
      month: '11',
      value: 1388,
    },
    {
      month: '12',
      value: 597,
    },
  ];
  var config = {
    data: data,
    padding: 'auto',
    xField: 'month',
    yField: 'value',
    meta: {
      value: {
        max: 2000,
        min: -1000,
      },
      month: {
        formatter: function formatter(val) {
          return ''.concat(val, ' 月');
        },
      },
    },
    annotations: [
      {
        type: 'region',
        start: function start(xScale) {
          var ratio = xScale.ticks ? 1 / xScale.ticks.length : 1;
          var x = xScale.scale('7') - ratio / 2;
          return [''.concat(x * 100, '%'), '0%'];
        },
        end: function end(xScale) {
          var ratio = xScale.ticks ? 1 / xScale.ticks.length : 1;
          var x = xScale.scale('9') + ratio / 2;
          return [''.concat(x * 100, '%'), '100%'];
        },
      },
    ],
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 带滚动条柱状图

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: '城市',
    yField: '销售额',
    xAxis: { label: { autoRotate: false } },
    scrollbar: { type: 'horizontal' },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 带缩略轴柱状图

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/be63e0a2-d2be-4c45-97fd-c00f752a66d4.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: '城市',
    yField: '销售额',
    xAxis: { label: { autoRotate: false } },
    slider: {
      start: 0.1,
      end: 0.2,
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 指定柱状图宽度比例

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  var data = [
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '粮油副食',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 48,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
      sales: 38,
    },
  ];
  var config = {
    data: data,
    xField: 'type',
    yField: 'sales',
    columnWidthRatio: 0.8,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: { alias: '类别' },
      sales: { alias: '销售额' },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 指定柱状图最小最大宽度

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  var data = [
    {
      type: '家具家电',
      sales: 38,
    },
    {
      type: '粮油副食',
      sales: 52,
    },
    {
      type: '生鲜水果',
      sales: 61,
    },
    {
      type: '美容洗护',
      sales: 145,
    },
    {
      type: '母婴用品',
      sales: 48,
    },
    {
      type: '进口食品',
      sales: 38,
    },
    {
      type: '食品饮料',
      sales: 38,
    },
    {
      type: '家庭清洁',
      sales: 38,
    },
  ];
  var config = {
    data: data,
    xField: 'type',
    yField: 'sales',
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: { alias: '类别' },
      sales: { alias: '销售额' },
    },
    minColumnWidth: 20,
    maxColumnWidth: 20,
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 分组柱状图

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  var data = [
    {
      name: 'London',
      月份: 'Jan.',
      月均降雨量: 18.9,
    },
    {
      name: 'London',
      月份: 'Feb.',
      月均降雨量: 28.8,
    },
    {
      name: 'London',
      月份: 'Mar.',
      月均降雨量: 39.3,
    },
    {
      name: 'London',
      月份: 'Apr.',
      月均降雨量: 81.4,
    },
    {
      name: 'London',
      月份: 'May',
      月均降雨量: 47,
    },
    {
      name: 'London',
      月份: 'Jun.',
      月均降雨量: 20.3,
    },
    {
      name: 'London',
      月份: 'Jul.',
      月均降雨量: 24,
    },
    {
      name: 'London',
      月份: 'Aug.',
      月均降雨量: 35.6,
    },
    {
      name: 'Berlin',
      月份: 'Jan.',
      月均降雨量: 12.4,
    },
    {
      name: 'Berlin',
      月份: 'Feb.',
      月均降雨量: 23.2,
    },
    {
      name: 'Berlin',
      月份: 'Mar.',
      月均降雨量: 34.5,
    },
    {
      name: 'Berlin',
      月份: 'Apr.',
      月均降雨量: 99.7,
    },
    {
      name: 'Berlin',
      月份: 'May',
      月均降雨量: 52.6,
    },
    {
      name: 'Berlin',
      月份: 'Jun.',
      月均降雨量: 35.5,
    },
    {
      name: 'Berlin',
      月份: 'Jul.',
      月均降雨量: 37.4,
    },
    {
      name: 'Berlin',
      月份: 'Aug.',
      月均降雨量: 42.4,
    },
  ];
  var config = {
    data: data,
    isGroup: true,
    xField: '月份',
    yField: '月均降雨量',
    seriesField: 'name',
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 圆角柱状图

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'city',
    yField: 'value',
    seriesField: 'type',
    isGroup: 'true',
    columnStyle: {
      radius: [20, 20, 0, 0],
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 分组柱状图像素级组内柱子间距

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    isGroup: true,
    xField: '月份',
    yField: '月均降雨量',
    seriesField: 'name',
    dodgePadding: 2,
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 分组柱状图像素级组间间距

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/iPY8JFnxdb/dodge-padding.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    isGroup: true,
    xField: '月份',
    yField: '月均降雨量',
    seriesField: 'name',
    dodgePadding: 2,
    intervalPadding: 20,
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 堆叠分组柱状图

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/mor%26R5yBI9/stack-group-column.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'product_type',
    yField: 'order_amt',
    isGroup: true,
    isStack: true,
    seriesField: 'product_sub_type',
    groupField: 'sex',
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 堆叠分组柱状图

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/cK%24sTxSsah/stack-group-column.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'month',
    yField: 'value',
    isGroup: true,
    isStack: true,
    seriesField: 'type',
    groupField: 'name',
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 对 Tooltip 进行 formatter

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/mor%26R5yBI9/stack-group-column.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'product_type',
    yField: 'order_amt',
    isGroup: true,
    isStack: true,
    seriesField: 'product_sub_type',
    groupField: 'sex',
    tooltip: {
      formatter: function formatter(datum) {
        return {
          name: ''
            .concat(datum.product_sub_type, ' ')
            .concat(datum.sex === '男' ? '\uD83D\uDC66' : '\uD83D\uDC67'),
          value: datum.order_amt,
        };
      },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 百分比柱状图

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  var data = [
    {
      country: 'Asia',
      year: '1750',
      value: 502,
    },
    {
      country: 'Asia',
      year: '1800',
      value: 635,
    },
    {
      country: 'Asia',
      year: '1850',
      value: 809,
    },
    {
      country: 'Asia',
      year: '1900',
      value: 947,
    },
    {
      country: 'Asia',
      year: '1950',
      value: 1402,
    },
    {
      country: 'Asia',
      year: '1999',
      value: 3634,
    },
    {
      country: 'Asia',
      year: '2050',
      value: 5268,
    },
    {
      country: 'Africa',
      year: '1750',
      value: 106,
    },
    {
      country: 'Africa',
      year: '1800',
      value: 107,
    },
    {
      country: 'Africa',
      year: '1850',
      value: 111,
    },
    {
      country: 'Africa',
      year: '1900',
      value: 133,
    },
    {
      country: 'Africa',
      year: '1950',
      value: 221,
    },
    {
      country: 'Africa',
      year: '1999',
      value: 767,
    },
    {
      country: 'Africa',
      year: '2050',
      value: 1766,
    },
    {
      country: 'Europe',
      year: '1750',
      value: 163,
    },
    {
      country: 'Europe',
      year: '1800',
      value: 203,
    },
    {
      country: 'Europe',
      year: '1850',
      value: 276,
    },
    {
      country: 'Europe',
      year: '1900',
      value: 408,
    },
    {
      country: 'Europe',
      year: '1950',
      value: 547,
    },
    {
      country: 'Europe',
      year: '1999',
      value: 729,
    },
    {
      country: 'Europe',
      year: '2050',
      value: 628,
    },
  ];
  var config = {
    data: data,
    xField: 'year',
    yField: 'value',
    seriesField: 'country',
    isPercent: true,
    isStack: true,
    label: {
      position: 'middle',
      content: function content(item) {
        return item.value.toFixed(2);
      },
      style: { fill: '#fff' },
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 带联动区域的百分比柱状图

```tsx
import React, { useState, useEffect } from 'react';
import { Column, G2 } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  G2.registerInteraction('element-link', {
    start: [
      {
        trigger: 'interval:mouseenter',
        action: 'element-link-by-color:link',
      },
    ],
    end: [
      {
        trigger: 'interval:mouseleave',
        action: 'element-link-by-color:unlink',
      },
    ],
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/jSRiL%26YNql/percent-column.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    isPercent: true,
    isStack: true,
    meta: {
      value: {
        min: 0,
        max: 1,
      },
    },
    label: {
      position: 'middle',
      content: function content(item) {
        return ''.concat((item.value * 100).toFixed(2), '%');
      },
      style: { fill: '#fff' },
    },
    tooltip: false,
    interactions: [{ type: 'element-highlight-by-color' }, { type: 'element-link' }],
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 区间柱状图

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  var data = [
    {
      type: '分类一',
      values: [76, 100],
    },
    {
      type: '分类二',
      values: [56, 108],
    },
    {
      type: '分类三',
      values: [38, 129],
    },
    {
      type: '分类四',
      values: [58, 155],
    },
    {
      type: '分类五',
      values: [45, 120],
    },
    {
      type: '分类六',
      values: [23, 99],
    },
    {
      type: '分类七',
      values: [18, 56],
    },
    {
      type: '分类八',
      values: [18, 34],
    },
  ];
  var config = {
    data: data,
    xField: 'type',
    yField: 'values',
    isRange: true,
    label: {
      position: 'middle',
      layout: [{ type: 'adjust-color' }],
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 堆叠柱状图

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    label: {
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```

### 设置柱状图背景色

```tsx
import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/8elHX%26irfq/stack-column-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    label: { position: 'middle' },
    interactions: [
      {
        type: 'active-region',
        enable: false,
      },
    ],
    columnBackground: { style: { fill: 'rgba(0,0,0,0.1)' } },
  };
  return <Column {...config} />;
};

export default DemoColumn;
```
