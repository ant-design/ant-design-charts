import { FlowGraph } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const DemoFlowGraph = () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g6/flow-analysis.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options = {
    autoFit: 'center',
    data,
  };

  return <FlowGraph {...options} />;
};

ReactDOM.render(<DemoFlowGraph />, document.getElementById('container'));
