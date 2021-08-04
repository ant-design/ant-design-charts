import React, { useState, useEffect } from 'react';

const Input: React.FC<any> = (props) => {
  const { config, plugin = {}, updateType = 'node' } = props;
  const { updateNode, updateEdge } = plugin;
  const [label, setLabel] = useState<string>(config?.label);
  const update = updateType === 'node' ? updateNode : updateEdge;
  const onLabelChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
    update({
      label: e.target.value,
    });
  };

  useEffect(() => {
    setLabel(config?.label);
  }, [config]);

  return (
    <div>
      <label>标签: </label>
      <input value={label} onChange={onLabelChange} style={{ width: '100%' }} />
    </div>
  );
};

export default Input;
