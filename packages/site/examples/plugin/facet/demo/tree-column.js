import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Facet } from '@ant-design/charts';

import { DataView } from '@antv/data-set';

const DemoFacet = () => {
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
  const config = {
    appendPadding: [0, 18, -50, 32],
    data,
    type: 'tree',
    fields: ['clarity'],
    meta: {
      cut: {
        sync: true,
        // 手动进行排序，保证颜色映射正确
        values: ['Ideal', 'Good', 'Premium', 'Very-Good', 'Fair'],
      },
      mean: {
        sync: true,
        tickCount: 5,
        formatter: (v) => `${Math.ceil(v)}`,
      },
    },
    // tree-facet 连接线样式和是否平滑
    line: {
      style: {
        stroke: '#dedede',
      },
      smooth: true,
    },
    axes: {},
    tooltip: {
      showMarkers: false,
    },
    eachView: (view, facet) => {
      const { rowIndex } = facet || {};
      const dv = new DataView();
      dv.source(facet.data).transform({
        type: 'aggregate',
        fields: ['price'],
        operations: ['mean'],
        as: ['mean'],
        groupBy: ['cut'],
      });

      if (rowIndex === 0) {
        return {
          type: 'pie',
          options: {
            data: dv.rows,
            meta: {
              mean: {
                // 关闭饼图 'mean'字段的 scale 同步
                sync: false,
              },
            },
            angleField: 'mean',
            colorField: 'cut',
            radius: 1,
            pieStyle: {
              stroke: null,
            },
            // 添加动画
            animation: {},
            // 添加交互
            interactions: [
              {
                type: 'element-active',
              },
            ],
          },
        };
      }

      return {
        type: 'column',
        options: {
          data: dv.rows,
          meta: {
            mean: {
              // 关闭饼图 'mean'字段的 scale 同步
              sync: rowIndex === 0 ? false : true,
            },
          },
          xField: 'cut',
          yField: 'mean',
          seriesField: 'cut',
          columnStyle: {
            fillOpacity: 0.85,
          },
          // 添加动画
          animation: {},
          // 添加交互
          interactions: [
            {
              type: 'element-active',
            },
            {
              type: 'active-region',
            },
          ],
        },
      };
    },
  };

  return <Facet {...config} />;
};

ReactDOM.render(<DemoFacet />, document.getElementById('container'));
