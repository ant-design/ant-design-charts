import { Flowchart } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const DemoFlowchart = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch('https://site-data-pre.alipay.com/g6/flow-analysis.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options = {
    autoFit: 'center',
    data,
  };

  return <Flowchart {...options} />;
};

ReactDOM.render(<DemoFlowchart />, document.getElementById('container'));
