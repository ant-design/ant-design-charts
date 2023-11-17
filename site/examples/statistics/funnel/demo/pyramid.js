import React from 'react';
import ReactDOM from 'react-dom';
import { Funnel } from '@ant-design/plots';

const DemoFunnel = () => {
  const data = [
    { action: '浏览网站', pv: 50000 },
    { action: '放入购物车', pv: 35000 },
    { action: '生成订单', pv: 25000 },
    { action: '支付订单', pv: 15000 },
    { action: '完成交易', pv: 8000 },
  ];

  const config = {
    data,
    xField: 'action',
    yField: 'pv',
    shapeField: 'pyramid',
    label: [
      {
        text: (d) => d.pv,
        position: 'inside',
        fontSize: 16,
      },
      {
        render: ($, _, i) => {
          if (i)
            return (
              <div
                style={{
                  height: 1,
                  width: 30,
                  background: '#aaa',
                  margin: '0 20',
                }}
              ></div>
            );
        },
        position: 'top-right',
      },
      {
        text: (d, i, data) => {
          if (i) return ((d.pv / data[i - 1].pv) * 100).toFixed(2) + '%';
        },
        position: 'top-right',
        textAlign: 'left',
        textBaseline: 'middle',
        dx: 40,
      },
    ],
  };

  return <Funnel {...config} />;
};

ReactDOM.render(<DemoFunnel />, document.getElementById('container'));
