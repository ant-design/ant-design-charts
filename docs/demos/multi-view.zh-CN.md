---
title: 多图层图表
order: 33
---

### 区间面积图

```tsx
import React, { useState, useEffect } from 'react';
import { Mix } from '@ant-design/charts';

const DemoMix: React.FC = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/qE48lpzwRc/range-area-data.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var config = {
    appendPadding: 8,
    syncViewPadding: true,
    tooltip: { shared: true, showMarkers: false, showCrosshairs: true, offsetY: -50 },
    views: [
      {
        data: data?.area || [],
        axes: {},
        meta: {
          time: {
            type: 'time',
            mask: 'MM-DD',
            nice: true,
            tickInterval: 24 * 3600 * 1000 * 2,
            range: [0, 1],
          },
          temperature: {
            nice: true,
            sync: true,
            alias: '温度范围',
          },
        },
        // view1: prepare a area plot, mapping position to `time*temperature`
        geometries: [
          {
            type: 'area',
            xField: 'time',
            yField: 'temperature',
            mapping: {},
          },
        ],
      },
      {
        data: data?.line || [],
        axes: false,
        meta: {
          time: {
            type: 'time',
            mask: 'MM-DD',
            nice: true,
            tickInterval: 24 * 3600 * 1000 * 2,
            range: [0, 1],
          },
          temperature: {
            sync: 'temperature',
            alias: '温度',
          },
        },
        // view2: prepare a line plot and point plot, mapping position to `time*temperature` (share data)
        geometries: [
          {
            type: 'line',
            xField: 'time',
            yField: 'temperature',
            mapping: {},
          },
          {
            type: 'point',
            xField: 'time',
            yField: 'temperature',
            mapping: {
              shape: 'circle',
              style: {
                fillOpacity: 1,
              },
            },
          },
        ],
      },
    ],
  };
  return <Mix {...config} />;
};

export default DemoMix;
```

### 刷选联动

```tsx
import React, { useState, useEffect } from 'react';
import { Mix, G2 } from '@ant-design/charts';

const DemoMix: React.FC = () => {
  G2.registerInteraction('other-visible', {
    showEnable: [
      {
        trigger: 'plot:mouseenter',
        action: 'cursor:crosshair',
      },
      {
        trigger: 'mask:mouseenter',
        action: 'cursor:move',
      },
      {
        trigger: 'plot:mouseleave',
        action: 'cursor:default',
      },
      {
        trigger: 'mask:mouseleave',
        action: 'cursor:crosshair',
      },
    ],
    start: [
      {
        trigger: 'plot:mousedown',
        isEnable: function isEnable(context) {
          return !context.isInShape('mask');
        },
        action: ['rect-mask:start', 'rect-mask:show'],
      },
      {
        trigger: 'mask:dragstart',
        action: 'rect-mask:moveStart',
      },
    ],
    processing: [
      {
        trigger: 'plot:mousemove',
        action: 'rect-mask:resize',
      },
      {
        trigger: 'mask:drag',
        isEnable: function isEnable(context) {
          return context.isInPlot();
        },
        action: 'rect-mask:move',
      },
      {
        trigger: 'mask:change',
        action: 'element-sibling-filter-record:filter',
      },
    ],
    end: [
      {
        trigger: 'plot:mouseup',
        action: 'rect-mask:end',
      },
      {
        trigger: 'mask:dragend',
        action: 'rect-mask:moveEnd',
      },
    ],
    rollback: [
      {
        trigger: 'dblclick',
        action: ['rect-mask:hide', 'element-sibling-filter-record:reset'],
      },
    ],
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
  }, []);
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/diamond.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  var subData = data.slice(0, 400);
  var config = {
    tooltip: false,
    views: [
      {
        region: {
          start: {
            x: 0,
            y: 0,
          },
          end: {
            x: 0.5,
            y: 1,
          },
        },
        padding: [10, 20, 40, 50],
        data: subData,
        meta: { price: { nice: true } },
        axes: {},
        geometries: [
          {
            type: 'point',
            xField: 'carat',
            yField: 'price',
            mapping: {},
          },
        ],
        interactions: [{ type: 'other-visible' }],
      },
      {
        region: {
          start: {
            x: 0.5,
            y: 0,
          },
          end: {
            x: 1,
            y: 1,
          },
        },
        padding: [10, 20, 40, 50],
        data: subData,
        meta: { x: { nice: true } },
        axes: {
          x: {
            min: 0,
            tickCount: 5,
          },
        },
        geometries: [
          {
            type: 'point',
            xField: 'depth',
            yField: 'x',
            mapping: { shape: 'circle' },
          },
        ],
      },
    ],
  };
  return <Mix {...config} />;
};

export default DemoMix;
```

### Drinks

```tsx
import React, { useState, useEffect } from 'react';
import { Mix } from '@ant-design/charts';
import { DataSet } from '@antv/data-set';

const DemoMix: React.FC = () => {
  var data = [
    ['Cosmopolitan', 51, 45, 6],
    ['Martini', 67, 39, 28],
    ['Mojito', 19, 11, 8],
    ['Margarita', 47, 33, 14],
    ['Mai Tai', 32, 20, 12],
    ['Beer', 70, 20, 50],
  ];
  var yearData = [
    ['2010', 60, 176, 35, 25],
    ['2011', 51, 136, 25, 26],
    ['2012', 73, 196, 35, 38],
    ['2013', 84, 315, 43, 41],
    ['2014', 79, 203, 36, 33],
    ['2015', 89, 286, 41, 48],
  ];
  var config = {
    height: 500,
    padding: 'auto',
    tooltip: { showMarkers: false },
    views: [
      {
        data: data.map(function (d) {
          return {
            type: d[0],
            value: d[1],
          };
        }),
        region: {
          start: {
            x: 0,
            y: 0,
          },
          end: {
            x: 0.5,
            y: 0.4,
          },
        },
        coordinate: {
          type: 'theta',
          cfg: { radius: 0.85 },
        },
        axes: {
          value: {
            title: { text: 'Drinks' },
            tickLine: null,
            line: false,
            ticks: false,
          },
        },
        geometries: [
          {
            type: 'interval',
            xField: '1',
            yField: 'value',
            colorField: 'type',
            mapping: {},
            adjust: { type: 'stack' },
          },
        ],
      },
      {
        data: new DataSet.DataView()
          .source(
            data.map(function (d) {
              return {
                type: d[0],
                male: d[2],
                female: d[3],
              };
            }),
          )
          .transform({
            type: 'fold',
            fields: ['male', 'female'],
            key: 'gender',
            value: 'value',
          }).rows,
        region: {
          start: {
            x: 0.5,
            y: 0,
          },
          end: {
            x: 1,
            y: 0.45,
          },
        },
        coordinate: { cfg: { isTransposed: true } },
        axes: { value: false },
        geometries: [
          {
            type: 'interval',
            xField: 'type',
            yField: 'value',
            colorField: 'gender',
            mapping: {},
            adjust: {
              type: 'dodge',
              marginRatio: 0,
            },
          },
        ],
      },
      {
        data: yearData.map(function (d) {
          return {
            year: d[0],
            ordered: d[1],
          };
        }),
        region: {
          start: {
            x: 0,
            y: 0.52,
          },
          end: {
            x: 0.48,
            y: 1,
          },
        },
        axes: { year: { title: { text: 'Drinks ordered' } } },
        meta: {
          ordered: {
            min: 40,
            max: 90,
          },
        },
        geometries: [
          {
            type: 'area',
            xField: 'year',
            yField: 'ordered',
            mapping: {},
          },
          {
            type: 'line',
            xField: 'year',
            yField: 'ordered',
            mapping: { style: { lineWidth: 0.5 } },
          },
        ],
      },
      {
        data: new DataSet.DataView()
          .source(
            yearData.map(function (d) {
              return {
                year: d[0],
                male: d[3],
                female: d[4],
              };
            }),
          )
          .transform({
            type: 'fold',
            fields: ['male', 'female'],
            key: 'gender',
            value: 'turnout',
          }).rows,
        region: {
          start: {
            x: 0.52,
            y: 0.52,
          },
          end: {
            x: 1,
            y: 1,
          },
        },
        axes: { year: { title: { text: 'Turnout by gender' } } },
        geometries: [
          {
            type: 'interval',
            xField: 'year',
            yField: 'turnout',
            colorField: 'gender',
            adjust: {
              type: 'dodge',
              marginRatio: 0,
            },
            mapping: {},
          },
        ],
      },
    ],
  };
  return <Mix {...config} />;
};

export default DemoMix;
```

### 条形图的变种

```tsx
import React, { useState, useEffect } from 'react';
import { Mix } from '@ant-design/charts';

const DemoMix: React.FC = () => {
  const [plot, setPlot] = useState(null);
  var data = [
    {
      area: 'Central',
      value: 0.218,
    },
    {
      area: 'East',
      value: 0.295,
    },
    {
      area: 'South',
      value: 0.171,
    },
    {
      area: 'West',
      value: 0.316,
    },
  ];
  var defaultGrey = '#BFBFBF';
  var config = {
    appendPadding: 8,
    tooltip: { showMarkers: false },
    views: [],
  };

  useEffect(() => {
    if (plot) {
      plot.chart.theme({ defaultColor: '#30BF78' });
      plot.update({
        views: [
          {
            region: {
              start: {
                x: 0,
                y: 0,
              },
              end: {
                x: 1 / 2,
                y: 2 / 5,
              },
            },
            data: data,
            meta: { value: { alias: '销售额(万)' } },
            axes: {
              area: { tickLine: false },
              value: false,
            },
            coordinate: { cfg: { isTransposed: true } },
            geometries: [
              {
                type: 'interval',
                xField: 'area',
                yField: 'value',
                mapping: {
                  color: function color(_ref) {
                    var area = _ref.area;
                    var value = data.find(function (d) {
                      return d.area === area;
                    }).value;
                    return value > 0.3 ? plot.chart.getTheme().defaultColor : defaultGrey;
                  },
                  style: { lineWidth: 1 },
                },
                label: {
                  position: 'left',
                  layout: { type: 'adjust-color' },
                  formatter: function formatter(_ref2) {
                    var value = _ref2.value;
                    return ''.concat((value * 100).toFixed(1), '%');
                  },
                  style: { fill: '#fff' },
                },
              },
            ],
          },
          {
            region: {
              start: {
                x: 1 / 2,
                y: 0,
              },
              end: {
                x: 1,
                y: 2 / 5,
              },
            },
            data: data,
            meta: { value: { alias: '销售额(万)' } },
            axes: {
              area: { tickLine: false },
              value: false,
            },
            coordinate: { cfg: { isTransposed: true } },
            geometries: [
              {
                type: 'interval',
                xField: 'area',
                yField: 'value',
                mapping: {
                  color: function color(_ref3) {
                    var area = _ref3.area;
                    var value = data.find(function (d) {
                      return d.area === area;
                    }).value;
                    return value > 0.3 ? plot.chart.getTheme().defaultColor : defaultGrey;
                  },
                  style: function style(_ref4) {
                    var value = _ref4.value;
                    return {
                      lineWidth: 1,
                      fillOpacity: 0,
                      stroke: value > 0.3 ? plot.chart.getTheme().defaultColor : defaultGrey,
                    };
                  },
                },
                label: {
                  position: 'left',
                  formatter: function formatter(_ref5) {
                    var value = _ref5.value;
                    return ''.concat((value * 100).toFixed(1), '%');
                  },
                },
              },
            ],
          },
          {
            region: {
              start: {
                x: 0,
                y: 1 / 2,
              },
              end: {
                x: 1 / 2,
                y: 1,
              },
            },
            data: data,
            meta: {
              value: {
                alias: '销售额(万)',
                max: 0.5,
                min: 0,
              },
            },
            axes: {
              area: { tickLine: false },
              value: false,
            },
            coordinate: { cfg: { isTransposed: true } },
            geometries: [
              {
                type: 'point',
                xField: 'area',
                yField: 'value',
                mapping: {
                  color: function color(_ref6) {
                    var area = _ref6.area;
                    var value = data.find(function (d) {
                      return d.area === area;
                    }).value;
                    return value > 0.3 ? plot.chart.getTheme().defaultColor : defaultGrey;
                  },
                  style: function style(_ref7) {
                    var value = _ref7.value;
                    return {
                      r: 4,
                      strokeOpacity: 0,
                      fill: value > 0.3 ? plot.chart.getTheme().defaultColor : defaultGrey,
                    };
                  },
                },
                label: {
                  offsetY: -12,
                  offsetX: 8,
                  style: { textAlign: 'right' },
                  position: 'top',
                  formatter: function formatter(_ref8) {
                    var value = _ref8.value;
                    return ''.concat((value * 100).toFixed(1), '%');
                  },
                },
              },
            ],
            annotations: data.map((d, idx) => {
              return {
                type: 'line',
                start: [3 - idx - 0.25, 'min'],
                end: [3 - idx - 0.25, 'max'],
                style: {
                  lineWidth: 2,
                  stroke: '#595959',
                },
              };
            }),
          },
          {
            region: {
              start: {
                x: 1 / 2,
                y: 1 / 2,
              },
              end: {
                x: 1,
                y: 1,
              },
            },
            data: data,
            meta: {
              value: {
                alias: '销售额(万)',
                min: 0,
                max: 1,
              },
            },
            axes: {
              area: {
                label: { style: { fillOpacity: 0 } },
                tickLine: false,
              },
              value: false,
            },
            coordinate: { cfg: { isTransposed: true } },
            label: {
              offsetX: -4,
              style: { fill: '#Fff' },
              formatter: function formatter(_ref9) {
                var area = _ref9.area,
                  value = _ref9.value;
                return ''.concat(area, '\n').concat((value * 100).toFixed(1), '%');
              },
            },
            geometries: [
              {
                type: 'interval',
                xField: 'area',
                yField: 'value',
                label: {
                  offsetX: -4,
                  position: 'left',
                  layout: { type: 'adjust-color' },
                  style: {
                    fill: '#fff',
                    fontSize: 12,
                  },
                  formatter: function formatter(_ref10) {
                    var area = _ref10.area,
                      value = _ref10.value;
                    return ''.concat(area, '\n').concat((value * 100).toFixed(1), '%');
                  },
                },
                mapping: {
                  color: function color(_ref11) {
                    var area = _ref11.area;
                    var value = data.find(function (d) {
                      return d.area === area;
                    }).value;
                    return value > 0.3 ? plot.chart.getTheme().defaultColor : defaultGrey;
                  },
                },
              },
            ],
            annotations: data.map(function (d, idx) {
              return {
                type: 'line',
                start: [3 - idx - 0.25, 'min'],
                end: [3 - idx - 0.25, 'max'],
                style: {
                  lineWidth: 2,
                  stroke: '#595959',
                },
              };
            }),
          },
        ],
      });
    }
  }, [plot]);

  return (
    <Mix
      {...config}
      onReady={(chart) => {
        setPlot(chart);
      }}
    />
  );
};

export default DemoMix;
```
