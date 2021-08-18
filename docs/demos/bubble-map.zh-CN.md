---
title: 气泡地图
order: 33
---

### 映射颜色与大小

```tsx
import React, { useState, useEffect, useMemo } from 'react';
import { BubbleMap } from '@ant-design/charts';

const BubbleMapDemo: React.FC = () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/rmsportal/oVTMqfzuuRFKiDwhPSFL.json')
      .then((response) => response.json())
      .then((json) => setData(json.list))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const source = useMemo(() => {
    return {
      data: data,
      parser: {
        type: 'json',
        x: 'j',
        y: 'w',
      },
    };
  }, [data]);
  const config = useMemo(() => {
    return {
      height: 300,
      autoFit: true,
      map: {
        type: 'amap',
        center: [102.447303, 37.753574],
        zoom: 5,
        pitch: 0,
      },
      color: {
        field: 't',
        value: [
          '#03071e',
          '#370617',
          '#6a040f',
          '#9d0208',
          '#d00000',
          '#dc2f02',
          '#e85d04',
          '#f48c06',
          '#faa307',
          '#ffba08',
        ].reverse(),
      },
      size: {
        field: 't',
        value: [2, 8],
      },
      style: {
        opacity: 0.5,
        strokeWidth: 0,
      },
      state: { active: { color: '#10b3b0' } },
      zoom: {
        position: 'bottomright',
      },
      scale: {
        position: 'bottomright',
      },
      layerMenu: {
        position: 'topright',
      },
      tooltip: {
        items: ['s', 't'],
      },
    };
  }, []);

  return <BubbleMap {...config} source={source} />;
};

export default BubbleMapDemo;
```

### 自定义映射颜色与大小

```tsx
import React, { useState, useEffect, useMemo } from 'react';
import { BubbleMap } from '@ant-design/charts';

const BubbleMapDemo: React.FC = () => {
  const [data, setData] = useState([]);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/m5r7MFHt8U/wenchuandizhenshuju.json')
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const source = useMemo(() => {
    return {
      data: data,
      parser: {
        type: 'json',
        x: 'lng',
        y: 'lat',
      },
    };
  }, [data]);
  const config = useMemo(() => {
    return {
      height: 300,
      autoFit: true,
      map: {
        type: 'amap',
        style: 'light',
        center: [103.447303, 31.753574],
        zoom: 7,
        pitch: 0,
      },
      color: {
        field: 'mag',
        value: ({ mag }) => {
          if (mag > 7) {
            return '#82cf9c';
          } else if (mag <= 7 && mag >= 5.5) {
            return '#10b3b0';
          } else {
            return '#2033ab';
          }
        },
      },
      size: {
        field: 'mag',
        value: ({ mag }) => (mag - 4.3) * 10,
      },

      style: {
        opacity: 0.8,
        strokeWidth: 0,
      },
      state: { active: { color: '#FFF684' } },
      autoFit: true,
      zoom: {
        position: 'bottomright',
      },
      scale: {
        position: 'bottomright',
      },
      tooltip: {
        items: ['title', 'mag', 'depth'],
      },
    };
  }, []);

  return <BubbleMap {...config} source={source} />;
};

export default BubbleMapDemo;
```

### 水波动画

```tsx
import React, { useState, useEffect, useMemo } from 'react';
import { BubbleMap } from '@ant-design/charts';

const BubbleMapDemo: React.FC = () => {
  const [data, setData] = useState({ type: 'FeatureCollection', features: [] });
  const asyncFetch = () => {
    fetch(
      'https://gw.alipayobjects.com/os/antfincdn/xZqmXatMnc/quanguojiaotongshijianxiangyingzhishu.json',
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };

  useEffect(() => {
    asyncFetch();
  }, []);

  const source = useMemo(() => {
    return {
      data: data,
      parser: {
        type: 'geojson',
      },
    };
  }, [data]);
  const config = useMemo(() => {
    return {
      height: 300,
      autoFit: true,
      map: {
        type: 'amap',
        center: [102.447303, 37.753574],
        zoom: 2,
        pitch: 0,
      },
      color: '#4cfd47',
      size: 20,
      animate: true,
      state: { active: true },
      label: {
        field: 'cityName',
        style: {
          fill: '#fff',
          fontSize: 12,
          textAnchor: 'top',
          textOffset: [0, 20],
        },
      },
      zoom: {
        position: 'bottomright',
      },
      layerMenu: {
        position: 'topright',
      },
      tooltip: {
        items: [{ field: 'properties.cityName', alias: '名称' }],
      },
    };
  }, []);

  return <BubbleMap {...config} source={source} />;
};

export default BubbleMapDemo;
```
