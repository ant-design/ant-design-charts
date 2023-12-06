import React from 'react';
import ReactDOM from 'react-dom';
import { Funnel } from '@ant-design/plots';

const DemoFunnel = () => {
  const data = [
    { action: '访问', visitor: 500, site: '站点1' },
    { action: '浏览', visitor: 400, site: '站点1' },
    { action: '交互', visitor: 300, site: '站点1' },
    { action: '下单', visitor: 200, site: '站点1' },
    { action: '完成', visitor: 100, site: '站点1' },
    { action: '访问', visitor: 550, site: '站点2' },
    { action: '浏览', visitor: 420, site: '站点2' },
    { action: '交互', visitor: 280, site: '站点2' },
    { action: '下单', visitor: 150, site: '站点2' },
    { action: '完成', visitor: 80, site: '站点2' },
  ];

  const uPosition = (item, values) => {
    if (item.site === '站点2') {
      return values[0];
    }
    return values[1];
  };

  const config = {
    data,
    xField: 'action',
    yField: 'visitor',
    compareField: 'site',
    style: {
      stroke: '#fff',
    },
    label: [
      {
        text: (d) => d.visitor,
        position: 'inside',
        fontSize: 16,
      },
      {
        render: ($, _, i) => {
          if (i)
            return (
              <div
                key={i}
                style={{
                  height: 1,
                  width: 30,
                  background: '#aaa',
                  marginLeft: _.site === '站点2' ? -30 : 0,
                }}
              ></div>
            );
        },
        position: (item) => uPosition(item, ['top-left', 'top-right']),
      },
      {
        text: (d, i, data) => {
          if (i) return ((d.visitor / data[i - 1].visitor) * 100).toFixed(2) + '%';
        },
        position: (item) => uPosition(item, ['top-left', 'top-right']),
        textAlign: (item) => uPosition(item, ['right', 'left']),
        textBaseline: 'middle',
        dx: (item) => uPosition(item, [-40, 40]),
      },
    ],
    legend: false,
  };
  return <Funnel {...config} />;
};

ReactDOM.render(<DemoFunnel />, document.getElementById('container'));
