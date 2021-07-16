---
title: Typical cases
order: 3
nav:
  title: Docs
  order: 1
---

### Download chart

#### Function

toDataURL([type, encoderOptions])

#### Params

- type(string): A DOMString indicating the image format. The default format type is image/png.
- encoderOptions(number): A Number between 0 and 1 indicating the image quality.

#### Function

downloadImage(name, [type,encoderOptions])

#### Params

- name(name): A name of image, eg: `a.png`
- type(string): A DOMString indicating the image format. The default format type is image/png.
- encoderOptions(number): A Number between 0 and 1 indicating the image quality.

```tsx
import React, { useRef } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
  ];

  const config = {
    data,
    height: 300,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#2593fc',
        lineWidth: 2,
      },
    },
  };
  const ref = useRef();

  // export image
  const downloadImage = () => {
    ref.current?.downloadImage();
  };

  // get base64 data
  const toDataURL = () => {
    console.log(ref.current?.toDataURL());
  };

  return (
    <div>
      <button type="button" onClick={downloadImage} style={{ marginRight: 24 }}>
        Export image
      </button>
      <button type="button" onClick={toDataURL}>
        Get base64
      </button>
      <Line {...config} chartRef={ref} />
    </div>
  );
};

export default DemoLine;
```

### Custom Tooltip

```tsx
import React, { useState, useEffect, useRef } from 'react';
import { Line } from '@ant-design/charts';

const DemoLine: React.FC = () => {
  const data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 13,
    },
  ];

  const config = {
    data,
    yField: 'value',
    xField: 'year',
    tooltip: {
      customContent: (title, items) => {
        return (
          <>
            <h5 style={{ marginTop: 16 }}>{title}</h5>
            <ul style={{ paddingLeft: 0 }}>
              {items?.map((item, index) => {
                const { name, value, color } = item;
                return (
                  <li
                    key={item.year}
                    className="g2-tooltip-list-item"
                    data-index={index}
                    style={{ marginBottom: 4, display: 'flex', alignItems: 'center' }}
                  >
                    <span className="g2-tooltip-marker" style={{ backgroundColor: color }}></span>
                    <span
                      style={{ display: 'inline-flex', flex: 1, justifyContent: 'space-between' }}
                    >
                      <span style={{ margiRight: 16 }}>{name}:</span>
                      <span className="g2-tooltip-list-item-value">{value}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </>
        );
      },
    },
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#2593fc',
        lineWidth: 2,
      },
    },
  };

  return <Line {...config} />;
};

export default DemoLine;
```

### Bind events

Please open the console and click on the chart area.

```tsx
import React from 'react';
import { Column } from '@ant-design/charts';

const DemoColumn: React.FC = () => {
  const data = [
    {
      type: 'Furniture appliances',
      sales: 38,
    },
    {
      type: 'Cereals, Oils and Non-staple food',
      sales: 52,
    },
    {
      type: 'Fresh fruits',
      sales: 0,
    },
    {
      type: 'Beauty care',
      sales: 145,
    },
    {
      type: 'Baby products',
      sales: 48,
    },
    {
      type: 'Imported food',
      sales: 38,
    },
    {
      type: 'Food and drink',
      sales: 38,
    },
    {
      type: 'Home cleaning',
      sales: 38,
    },
  ];

  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    meta: {
      type: { alias: 'Category' },
      sales: { alias: 'Sales' },
    },
  };

  return (
    <Column
      {...config}
      onReady={(plot) => {
        plot.on('plot:click', (evt) => {
          const { x, y } = evt;
          const { xField } = plot.options;
          const tooltipData = plot.chart.getTooltipItems({ x, y });
          console.log(tooltipData);
        });
      }}
    />
  );
};

export default DemoColumn;
```

### Get Chart instance

Plan 1: onReady callback

```typescript
import React from 'react';
import { Line } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [];
  const config = {};
  return <Line {...config} onReady={(chart) => console.log(chart)} />;
};

export default Page;
```

Plan 2: chartRef callback

```typescript
import React from 'react';
import { Line } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [];
  const config = {};
  return <Line {...config} chartRef={(chart) => console.log(chart)} />;
};

export default Page;
```

plan 3: Mount it on ref

```typescript
import React from 'react';
import { Bar } from '@ant-design/charts';

const Page: React.FC = () => {
  const data = [];
  const config = {};
  const ref = React.useRef();
  React.useEffect(() => {
    console.log(ref.current.getChart());
  }, []);

  return <Bar {...config} ref={ref} />;
};

export default Page;
```

### Custom shape

```tsx
import React, { useState, useEffect } from 'react';
import { Scatter, G2 } from '@ant-design/charts';
// Subjects of registered point | interval | polygon | line , etc., detailed reference G2: https://g2.antv.vision/
G2.registerShape('point', 'custom-shape', {
  draw(cfg, group) {
    const cx = cfg.x;
    const cy = cfg.y;
    const polygon = group.addShape('circle', {
      attrs: {
        x: cx,
        y: cy,
        ...cfg.defaultStyle,
        ...cfg.style,
        r: 6,
      },
    });
    return polygon;
  },
});
const DemoScatter: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/3e4db10a-9da1-4b44-80d8-c128f42764a8.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    appendPadding: 30,
    data: data,
    xField: 'xG conceded',
    yField: 'Shot conceded',
    shape: 'custom-shape',
    pointStyle: { fillOpacity: 1, fill: 'red', stroke: '#ff0' },
    yAxis: {
      nice: true,
      line: { style: { stroke: '#aaa' } },
    },
    tooltip: {
      showMarkers: false,
      fields: ['xG conceded', 'Shot conceded'],
    },
    xAxis: {
      grid: { line: { style: { stroke: '#eee' } } },
      line: { style: { stroke: '#aaa' } },
    },
  };
  return <Scatter {...config} />;
};

export default DemoScatter;
```

### Tooltip linkage

```tsx
import React, { useState, useEffect } from 'react';
import {
  Line,
  Area,
  Column,
  LineConfig,
  AreaConfig,
  ColumnConfig,
  Plot,
  PlotEvent,
} from '@ant-design/charts';

type Base = LineConfig | AreaConfig | ColumnConfig;

const PlotMaps: Record<string, Plot<Base>> = {};

let PreTooltipData: { date: string; value: number };

const DemoLine: React.FC = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/sp500.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'date',
    yField: 'price',
    height: 200,
  };

  const showTooltip = ({ x, y }: { x: number; y: number }) => {
    Object.keys(PlotMaps).forEach((plot) => {
      PlotMaps[plot].chart.showTooltip({ x, y });
    });
  };

  const setTooltipPosition = (evt: PlotEvent, plot: Plot<Base>) => {
    const { x, y } = evt.gEvent;
    const currentData = plot.chart.getTooltipItems({ x, y });
    if (currentData[0]?.data.date === PreTooltipData?.date) {
      return;
    }
    PreTooltipData = currentData[0]?.data;
    showTooltip({ x, y });
  };

  return (
    <div>
      <Line
        {...config}
        onReady={(plot) => {
          PlotMaps.line = plot;
          plot.on('mousemove', (evt: PlotEvent) => {
            setTooltipPosition(evt, plot);
          });
        }}
      />
      <Area
        {...config}
        onReady={(plot) => {
          PlotMaps.area = plot;
          plot.on('mousemove', (evt: PlotEvent) => {
            setTooltipPosition(evt, plot);
          });
        }}
      />
      <Column
        {...config}
        onReady={(plot) => {
          // @ts-ignore
          PlotMaps.Column = plot;
          plot.on('mousemove', (evt: PlotEvent) => {
            // @ts-ignore
            setTooltipPosition(evt, plot);
          });
        }}
      />
    </div>
  );
};

export default DemoLine;
```
