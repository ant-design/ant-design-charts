import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Treemap } from '@ant-design/charts';

const DemoTreemap = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/antfincdn/k5SYI%24mOo1/treemap.json')
      .then((response) => response.json())
      .then(({ list }) => setData(list))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data: data,
    colorField: 'name',
    legend: {
      position: 'top-left',
    },
    tooltip: {
      formatter: (v) => {
        const root = v.path[v.path.length - 1];
        return {
          name: v.name,
          value: `${v.value}(总占比${((v.value / root.value) * 100).toFixed(2)}%)`,
        };
      },
    },
    // use `drilldown: { enabled: true }` to
    // replace `interactions: [{ type: 'treemap-drill-down' }]`
    interactions: [
      {
        type: 'treemap-drill-down',
      },
    ],
    // drilldown: {
    //   enabled: true,
    //   breadCrumb: {
    //     rootText: '初始',
    //   },
    // },
    // 开启动画
    animation: {},
  };

  return <Treemap {...config} />;
};

ReactDOM.render(<DemoTreemap />, document.getElementById('container'));
