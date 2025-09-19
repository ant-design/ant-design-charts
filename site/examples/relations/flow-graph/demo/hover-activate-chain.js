import { FlowGraph, RCNode } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';

const { TextNode } = RCNode;

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
    node: {
      style: {
        component: (d) => {
          const isActive = d.states?.includes('active');
          return <TextNode text={d.id} isActive={isActive} type="outlined" />;
        },
      },
    },
    behaviors: (prev) => [...prev, 'hover-activate-chain'],
  };

  return <FlowGraph {...options} />;
};

createRoot(document.getElementById('container')).render(<DemoFlowGraph />);
