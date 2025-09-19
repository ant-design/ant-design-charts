import { FlowGraph } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

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

createRoot(document.getElementById('container')).render(<DemoFlowGraph />);
