---
title: 热力地图
order: 34
---

### 映射热力半径

```tsx
import React, { useState, useEffect, useMemo } from 'react';
import { HeatMap } from '@ant-design/charts';

const HeatMapDemo: React.FC = () => {
  const [data, setData] = useState({ type: 'FeatureCollection', features: [] });
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/S2Pb%26549sG/20210723023614.json')
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
        style: 'light',
        zoom: 11.7,
        center: [120.19660949707033, 30.234747338474293],
        pitch: 0,
      },
      size: {
        field: 'count',
        value: [0, 1],
      },
      zoom: {
        position: 'bottomright',
      },
      scale: {
        position: 'bottomright',
      },
    };
  }, []);

  return <HeatMap {...config} source={source} />;
};

export default HeatMapDemo;
```

### 自定义热力色带样式

```tsx
import React, { useState, useEffect, useMemo } from 'react';
import { HeatMap } from '@ant-design/charts';

const HeatMapDemo: React.FC = () => {
  const [data, setData] = useState({ type: 'FeatureCollection', features: [] });
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/S2Pb%26549sG/20210723023614.json')
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
        style: 'light',
        zoom: 11.7,
        center: [120.19660949707033, 30.234747338474293],
        pitch: 0,
      },
      size: {
        field: 'count',
        value: [0, 1],
      },
      style: {
        intensity: 2,
        radius: 15,
        opacity: 1,
        colorsRamp: [
          { color: '#206C7C', position: 0 },
          { color: '#2EA9A1', position: 0.2 },
          { color: '#91EABC', position: 0.4 },
          { color: '#FFF598', position: 0.6 },
          { color: '#F7B74A', position: 0.8 },
          { color: '#FF4818', position: 1 },
        ],
      },
    };
  }, []);

  return <HeatMap {...config} source={source} />;
};

export default HeatMapDemo;
```

### 热力 3D 模式

```tsx
import React, { useState, useEffect, useMemo } from 'react';
import { HeatMap } from '@ant-design/charts';

const HeatMapDemo: React.FC = () => {
  const [data, setData] = useState({ type: 'FeatureCollection', features: [] });
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/OOSGL1vhp3/20200726024229.json')
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
        style: 'light',
        center: [127.5671666579043, 7.445038892195569],
        zoom: 2.632456779444394,
        pitch: 45,
      },
      shape: 'heatmap3D',
      size: {
        field: 'avg',
        value: ({ avg }) => avg / 100,
      },
    };
  }, []);

  return <HeatMap {...config} source={source} />;
};

export default HeatMapDemo;
```
