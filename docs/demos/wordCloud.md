---
title: 词云图
order: 45
---

# 词云图

## WordCloud

### 词云图

```tsx
import React, { useState, useEffect } from 'react';
import { WordCloud } from '@ant-design/charts';

const DemoWordCloud: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/world-population.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    width: 600,
    height: 500,
    autoFit: false,
    wordField: 'x',
    weightField: 'value',
    color: '#6262ff',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [24, 80],
    },
  };
  return <WordCloud {...config} />;
};

export default DemoWordCloud;
```

### 词云图-图片遮罩

```tsx
import React, { useState, useEffect } from 'react';
import { WordCloud } from '@ant-design/charts';

const DemoWordCloud: React.FC = () => {
  const imageMask = new Image();
  imageMask.crossOrigin = '';
  imageMask.src =
    'https://gw.alipayobjects.com/mdn/rms_2274c3/afts/img/A*07tdTIOmvlYAAAAAAAAAAABkARQnAQ';
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  useEffect(() => {
    asyncFetch();
  }, []);

  const config = {
    data,
    width: 600,
    height: 400,
    autoFit: false,
    wordField: 'name',
    weightField: 'value',
    imageMask,
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [8, 32],
    },
  };
  return <WordCloud {...config} />;
};

export default DemoWordCloud;
```
