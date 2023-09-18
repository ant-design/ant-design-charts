import React from 'react';
import ReactDOM from 'react-dom';
import { Bullet } from '@ant-design/plots';

const DemoBullet = () => {
  const config = {
    // default xField: 'title'、rangeField: 'ranges'、measureField: 'measures'、targetField: 'targets'
    data: [{
      title: '满意度',
      ranges: 100,
      measures: 80,
      targets: 85,
    }],
  };
  return <Bullet {...config}/>;
};

ReactDOM.render(<DemoBullet />, document.getElementById('container'));
