import { IndentedTree, type IndentedTreeOptions } from '@ant-design/graphs';
import React, { useState } from 'react';
import { Radio, Divider } from 'antd';

const data = {
  nodes: [
    { id: 'Modeling Methods', depth: 0, children: ['Classification', 'Consensus', 'Regression'] },
    { id: 'Classification', depth: 1 },
    { id: 'Consensus', depth: 1, children: ['Models diversity', 'Methods', 'Common'] },
    { id: 'Models diversity', depth: 2 },
    { id: 'Methods', depth: 2 },
    { id: 'Common', depth: 2 },
    { id: 'Regression', depth: 1 },
  ],
  edges: [
    { source: 'Modeling Methods', target: 'Classification' },
    { source: 'Modeling Methods', target: 'Consensus' },
    { source: 'Modeling Methods', target: 'Regression' },
    { source: 'Consensus', target: 'Models diversity' },
    { source: 'Consensus', target: 'Methods' },
    { source: 'Consensus', target: 'Common' },
  ],
};

export default () => {
  const [direction, setDirection] = useState<IndentedTreeOptions['direction']>('right');

  const options: IndentedTreeOptions = {
    containerStyle: { height: '320px' },
    direction,
    autoFit: 'view',
    data,
    animation: false,
  };

  return <>
    <Radio.Group value={direction} onChange={(e) => setDirection(e.target.value)}>
      <Radio.Button value="right">Right</Radio.Button>
      <Radio.Button value="left">Left</Radio.Button>
      <Radio.Button value="alternate">Alternate</Radio.Button>
    </Radio.Group>
    <Divider orientation="left" plain>
      Preview
    </Divider>
    <IndentedTree {...options} />
  </>;
};
