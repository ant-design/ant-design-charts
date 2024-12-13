import { type FlowDirectionGraphOptions, FlowGraph } from '@ant-design/graphs';
import React, { useEffect, useState } from 'react';

const CustomNode = ({ text }: { text: string }) => {
  return (
    <div
      style={{
        height: 'inherit',
        width: 'inherit',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        borderRadius: '16px',
        backgroundColor: '#FFF6E3',
        color: '#8B5DFF',
        border: '2px solid #8B5DFF',
        fontFamily: 'Futura',
      }}
    >
      📈 {text}
    </div>
  );
};

export default () => {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    fetch('https://assets.antv.antgroup.com/g6/flow-analysis.json')
      .then((res) => res.json())
      .then(setData);
  }, []);

  const options: FlowDirectionGraphOptions = {
    autoFit: 'view',
    data,
    node: {
      style: {
        component: (d) => <CustomNode text={d.value.title} />,
        size: [120, 40],
      },
    },
    edge: {
      style: {
        stroke: '#8B5DFF',
      },
    },
    layout: {
      type: 'dagre',
      rankSep: 130,
      nodeSep: 60,
    },
  };

  return <FlowGraph {...options} />;
};
