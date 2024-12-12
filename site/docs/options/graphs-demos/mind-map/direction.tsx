import { MindMap, type MindMapOptions } from '@ant-design/graphs';
import { Divider, Radio } from 'antd';
import React, { useState } from 'react';

const data = {
  id: 'Modeling Methods',
  children: [
    { id: 'Classification', children: [{ id: 'Logistic regression' }, { id: 'Linear discriminant analysis' }] },
    { id: 'Consensus', children: [{ id: 'Models diversity' }, { id: 'Methods' }, { id: 'Common' }] },
    { id: 'Regression', children: [{ id: 'Multiple linear regression' }, { id: 'Partial least squares' }] },
  ],
};

export default () => {
  const [direction, setDirection] = useState<MindMapOptions['direction']>('right');

  const options: MindMapOptions = {
    data,
    containerStyle: {
      height: '300px',
    },
    autoFit: 'view',
    padding: 8,
    type: 'linear',
    direction,
    animation: false,
  };

  return (
    <>
      <Radio.Group value={direction} onChange={(e) => setDirection(e.target.value)}>
        <Radio.Button value="right">Right</Radio.Button>
        <Radio.Button value="left">Left</Radio.Button>
        <Radio.Button value="alternate">Alternate</Radio.Button>
      </Radio.Group>
      <Divider orientation="left" plain>
        Preview
      </Divider>
      <MindMap {...options} />
    </>
  );
};
