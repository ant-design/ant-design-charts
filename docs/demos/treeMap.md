---
title: 树图
order: 88
---

# 树图

## Treemap

###

<a href="https://antv-g2plot.gitee.io/zh/examples/treemap/rect/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Treemap } from '@ant-design/charts';
import { each } from '@antv/util';

const DemoTreemap: React.FC = () => {
  const data = {
    name: 'root',
    children: [
      {
        name: '分类 1',
        value: 560,
      },
      {
        name: '分类 2',
        value: 500,
      },
      {
        name: '分类 3',
        value: 150,
      },
      {
        name: '分类 4',
        value: 140,
      },
      {
        name: '分类 5',
        value: 115,
      },
      {
        name: '分类 6',
        value: 95,
      },
      {
        name: '分类 7',
        value: 90,
      },
      {
        name: '分类 8',
        value: 75,
      },
      {
        name: '分类 9',
        value: 98,
      },
      {
        name: '分类 10',
        value: 60,
      },
      {
        name: '分类 11',
        value: 45,
      },
      {
        name: '分类 12',
        value: 40,
      },
      {
        name: '分类 13',
        value: 40,
      },
      {
        name: '分类 14',
        value: 35,
      },
      {
        name: '分类 15',
        value: 40,
      },
      {
        name: '分类 16',
        value: 40,
      },
      {
        name: '分类 17',
        value: 40,
      },
      {
        name: '分类 18',
        value: 30,
      },
      {
        name: '分类 19',
        value: 28,
      },
      {
        name: '分类 20',
        value: 16,
      },
    ],
  };
  processData(data);
  const config = {
    data,
    colorField: 'name',
  };
  function processData(data) {
    let sumValue = 0;
    each(data.children, (d) => {
      sumValue += d.value;
    });
    data.value = sumValue;
  }
  return <Treemap {...config} />;
};

export default DemoTreemap;
```

###

<a href="https://antv-g2plot.gitee.io/zh/examples/treemap/rect/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Treemap } from '@ant-design/charts';
import { each, clone } from '@antv/util';

const DemoTreemap: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/c2589761-62d6-411d-9d51-794d6860c4a9.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const rootData = {
    name: '公司销售数据',
    value: 0,
    children: [],
  };
  each(data, (s) => {
    const children = clone(s.children);
    const childrenArray = [];
    each(children, (c) => {
      if (c.children && c.children.length > 0) {
        childrenArray.push(c);
      }
    });
    s.children = childrenArray;
    rootData.value += s.value;
    rootData.children.push(s);
  });
  const config = {
    data: rootData,
    colorField: 'name',
    interactions: [
      {
        type: 'drilldown',
        cfg: {
          mapping: {
            1: { field: 'name' },
            2: {
              field: 'name',
              values: ['#f5bc32', '#e66557', '#71c8ea', '#9362b7', '#fd984f', '#279493', '#fd9bc3'],
            },
            3: {
              field: 'value',
              values: (parent) => {
                return ['#ffffff', parent.color];
              },
            },
          },
        },
      },
    ],
  };
  return <Treemap {...config} />;
};

export default DemoTreemap;
```

###

<a href="https://antv-g2plot.gitee.io/zh/examples/treemap/rect/API" target="_blank">配置</a>

```tsx
import React, { useState, useEffect } from 'react';
import { Treemap } from '@ant-design/charts';
import { each } from '@antv/util';

const DemoTreemap: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/basement_prod/be471bfc-b37f-407e-833b-0f489bd3fdb2.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const mobileData = processData(data);
  const config = {
    data: mobileData,
    colorField: 'brand',
  };
  function processData(data) {
    let sumValue = 0;
    each(data, (d) => {
      sumValue += d.value;
    });
    return {
      name: 'root',
      value: sumValue,
      children: data,
    };
  }
  return <Treemap {...config} />;
};

export default DemoTreemap;
```
