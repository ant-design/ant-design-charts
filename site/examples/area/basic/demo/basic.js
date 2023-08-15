import React from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';

const DemoArea = () => {
  const config = {
    data: {
      type: 'fetch',
      value: 'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json',
    },
    xField: 'Date',
    yField: 'scales',
    annotations: [
      {
        type: 'text',
        data: ['2014-03', 1834],
        style: {
          text: '2014-03, 受比特币影响，blockchain 1834',
          wordWrap: true,
          wordWrapWidth: 164,
          dx: -174,
          dy: 30,
          fill: '#2C3542',
          fillOpacity: 0.65,
          fontSize: 10,
          background: true,
          backgroundRadius: 2,
          connector: true,
          startMarker: true,
          startMarkerFill: '#2C3542',
          startMarkerFillOpacity: 0.65,
        },
        tooltip: false,
      },
    ],
  };

  return <Area {...config} />;
};

ReactDOM.render(<DemoArea />, document.getElementById('container'));
