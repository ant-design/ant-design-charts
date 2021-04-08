---
title: Sankey
order: 20
---

### 支付宝流量桑基图

```tsx
import React, { useState, useEffect } from 'react';
import { Sankey } from '@ant-design/charts';

const DemoSankey: React.FC = () => {
  var DATA = [
    {
      source: '首次打开',
      target: '首页 UV',
      value: 160,
    },
    {
      source: '结果页',
      target: '首页 UV',
      value: 40,
    },
    {
      source: '验证页',
      target: '首页 UV',
      value: 10,
    },
    {
      source: '我的',
      target: '首页 UV',
      value: 10,
    },
    {
      source: '朋友',
      target: '首页 UV',
      value: 8,
    },
    {
      source: '其他来源',
      target: '首页 UV',
      value: 27,
    },
    {
      source: '首页 UV',
      target: '理财',
      value: 30,
    },
    {
      source: '首页 UV',
      target: '扫一扫',
      value: 40,
    },
    {
      source: '首页 UV',
      target: '服务',
      value: 35,
    },
    {
      source: '首页 UV',
      target: '蚂蚁森林',
      value: 25,
    },
    {
      source: '首页 UV',
      target: '跳失',
      value: 10,
    },
    {
      source: '首页 UV',
      target: '借呗',
      value: 30,
    },
    {
      source: '首页 UV',
      target: '花呗',
      value: 40,
    },
    {
      source: '首页 UV',
      target: '其他流向',
      value: 45,
    },
  ];
  var config = {
    data: DATA,
    sourceField: 'source',
    targetField: 'target',
    weightField: 'value',
    nodeWidthRatio: 0.008,
    nodePaddingRatio: 0.03,
  };
  return <Sankey {...config} />;
};

export default DemoSankey;
```

### 能量关系桑基图

```tsx
import React, { useState, useEffect } from 'react';
import { Sankey } from '@ant-design/charts';

const DemoSankey: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/fa3414cc-75ed-47b4-8306-f2ffe8c40127.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    data: data,
    sourceField: 'source',
    targetField: 'target',
    weightField: 'value',
    color: ['red', 'green', 'yellow'],
    edgeStyle: {
      fill: '#ccc',
      fillOpacity: 0.4,
    },
  };
  if (!data.length) {
    return <div>loading</div>;
  }
  return <Sankey {...config} />;
};

export default DemoSankey;
```
