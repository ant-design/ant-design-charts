import { FlowGraph, type FlowGraphOptions } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';

export default () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g6/flow-analysis.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options: FlowGraphOptions = {
    containerStyle: { height: '400px' },
    autoFit: 'view',
    padding: [20, 0, 0, 40],
    data,
    animation: false
  };

  return <FlowGraph {...options} />;
};
