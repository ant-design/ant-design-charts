import React, { useState } from 'react';
import useMergeState from '../src';

const SingleInput = () => {
  const [value, setValue] = useMergeState('');
  return (
    <div>
      name: {value}
      <br />
      <input value={value} onChange={e => setValue(e.target.value)}></input>{' '}
    </div>
  );
};

const ControlledInput: React.FC<{ value: string; onChange: (value: string) => void }> = props => {
  const [value, setValue] = useMergeState('', props);
  return (
    <div>
      <input value={value} onChange={e => setValue(e.target.value)}></input>{' '}
    </div>
  );
};

export default () => {
  const [name, setName] = useState('');
  return (
    <>
      非受控：
      <SingleInput />
      <br />
      受控： <br />
      name: {name}
      <ControlledInput value={name} onChange={value => setName(value)} />
    </>
  );
};
