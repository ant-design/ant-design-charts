import { Bar } from '@ant-design/plots';
import React from 'react';
import ReactDOM from 'react-dom';

const DemoBar = () => {

  const events = [
    { name: 'event planning', startTime: 1, endTime: 4 },
    { name: 'layout logistics', startTime: 3, endTime: 13 },
    { name: 'select vendors', startTime: 5, endTime: 8 },
    { name: 'hire venue', startTime: 9, endTime: 13 },
    { name: 'hire caterer', startTime: 10, endTime: 14 },
    { name: 'hire event decorators', startTime: 12, endTime: 17 },
    { name: 'rehearsal', startTime: 14, endTime: 16 },
    { name: 'event celebration', startTime: 17, endTime: 18 },
  ];

  const config = {
    data: events,
    xField: 'name',
    yField: ['endTime', 'startTime'],
    colorField: 'name'
  };
  return <Bar {...config} />;
};

ReactDOM.render(<DemoBar />, document.getElementById('container'));