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
    autoFit: 'view',
    data,
    labelField: (d) => d.value.title,
  };

  return <FlowGraph {...options} />;
};
