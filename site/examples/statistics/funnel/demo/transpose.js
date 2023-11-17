import React from 'react';
import ReactDOM from 'react-dom';
import { Funnel } from '@ant-design/plots';

const DemoFunnel = () => {
  const data = [
    { stage: '简历筛选', number: 253 },
    { stage: '初试人数', number: 151 },
    { stage: '复试人数', number: 113 },
    { stage: '录取人数', number: 87 },
    { stage: '入职人数', number: 59 },
  ];

  const config = {
    data: data,
    xField: 'stage',
    yField: 'number',
    isTransposed: false,
    label: [
      {
        text: (d) => d.number,
        position: 'inside',
        fontSize: 16,
      },
      {
        render: ($, _, i) => {
          if (i)
            return (
              <div
                style={{
                  height: 30,
                  width: 1,
                  background: '#aaa',
                  marginTop: -30,
                }}
              ></div>
            );
        },
        position: 'top-left',
      },
      {
        text: (d, i, data) => {
          if (i) return ((d.number / data[i - 1].number) * 100).toFixed(2) + '%';
        },
        position: 'top-left',
        textAlign: 'middle',
        textBaseline: 'bottom',
        dy: -30,
      },
    ],
  };

  return <Funnel {...config} />;
};

ReactDOM.render(<DemoFunnel />, document.getElementById('container'));
