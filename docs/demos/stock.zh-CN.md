---
title: 股票图
order: 19
---

### 基础蜡烛图

```tsx
import React, { useState, useEffect } from 'react';
import { Stock } from '@ant-design/charts';

const DemoStock: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/qtQ9nYfYJe/stock-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low'],
  };
  return <Stock {...config} />;
};

export default DemoStock;
```

### 自定义颜色：绿涨红跌

```tsx
import React, { useState, useEffect } from 'react';
import { Stock } from '@ant-design/charts';

const DemoStock: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/qtQ9nYfYJe/stock-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low'],
    fallingFill: '#ef5350',
    risingFill: '#26a69a',
  };
  return <Stock {...config} />;
};

export default DemoStock;
```

### 自定义 crosshairs 指示器

```tsx
import React, { useState, useEffect } from 'react';
import { Stock } from '@ant-design/charts';

const DemoStock: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/qtQ9nYfYJe/stock-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low'],
    meta: {
      vol: { alias: '成交量' },
      open: { alias: '开盘价' },
      close: { alias: '收盘价' },
      high: { alias: '最高价' },
      low: { alias: '最低价' },
    },
    tooltip: {
      crosshairs: {
        line: {
          style: {
            lineWidth: 0.5,
            stroke: 'rgba(0,0,0,0.25)',
          },
        },
        text: function text(type, defaultContent, items) {
          var textContent;
          if (type === 'x') {
            var item = items[0];
            textContent = item ? item.title : defaultContent;
          } else {
            textContent = ''.concat(defaultContent.toFixed(2));
          }
          return {
            position: type === 'y' ? 'start' : 'end',
            content: textContent,
            style: { fill: '#dfdfdf' },
          };
        },
        textBackground: {
          padding: [4, 8],
          style: { fill: '#363636' },
        },
      },
    },
  };
  return <Stock {...config} />;
};

export default DemoStock;
```

### 自定义样式

```tsx
import React, { useState, useEffect } from 'react';
import { Stock } from '@ant-design/charts';

const DemoStock: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/qtQ9nYfYJe/stock-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low'],
    tooltip: { showContent: false },
    stockStyle: {
      stroke: '#666',
      lineWidth: 0.5,
    },
  };
  return <Stock {...config} />;
};

export default DemoStock;
```

### 自定义 Tooltip 展示字段

```tsx
import React, { useState, useEffect } from 'react';
import { Stock } from '@ant-design/charts';

const DemoStock: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/qtQ9nYfYJe/stock-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low'],
    meta: {
      vol: { alias: '成交量' },
      open: { alias: '开盘价' },
      close: { alias: '收盘价' },
      high: { alias: '最高价' },
      low: { alias: '最低价' },
    },
    tooltip: {
      fields: ['open', 'close', 'high', 'low', 'vol'],
    },
  };
  return <Stock {...config} />;
};

export default DemoStock;
```

### 超大数据量的股票图

```tsx
import React, { useState, useEffect } from 'react';
import { Stock } from '@ant-design/charts';
import DataSet from '@antv/data-set';

const DemoStock: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/qtQ9nYfYJe/stock-data.json')
      .then((response) => response.json())
      .then((csv) => {
        const dv = new DataSet.View().source(csv, {
          type: 'csv',
        });

        const d = dv.rows.map((d) => {
          const result = {};
          each(d, (v, k) => {
            result[k] = Number(v);
            if (k === 'date') {
              result[k] = new Date(Number(v)).toISOString().slice(0, 10);
            }
          });
          return result;
        });
        setData(d);
      })
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data,
    xField: 'date',
    yField: ['open', 'close', 'high', 'low'],
    slider: {
      start: 0.85,
      end: 0.86,
    },
  };
  return <Stock {...config} />;
};

export default DemoStock;
```

### 设置字段别名

```tsx
import React, { useState, useEffect } from 'react';
import { Stock } from '@ant-design/charts';

const DemoStock: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/qtQ9nYfYJe/stock-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low'],
    meta: {
      vol: { alias: '成交量' },
      open: { alias: '开盘价' },
      close: { alias: '收盘价' },
      high: { alias: '最高价' },
      low: { alias: '最低价' },
    },
  };
  return <Stock {...config} />;
};

export default DemoStock;
```

### 带缩略轴的股票图

```tsx
import React, { useState, useEffect } from 'react';
import { Stock } from '@ant-design/charts';

const DemoStock: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/qtQ9nYfYJe/stock-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    appendPadding: [0, 10, 0, 0],
    data: data,
    xField: 'trade_date',
    yField: ['open', 'close', 'high', 'low'],
    slider: {},
  };
  return <Stock {...config} />;
};

export default DemoStock;
```
