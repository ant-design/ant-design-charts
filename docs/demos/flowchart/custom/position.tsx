import { FormWrapper } from '@ant-design/charts';
import { InputNumber } from 'antd';
import React, { useState, useEffect } from 'react';

const PositionComponent: React.FC<any> = (props) => {
  const { config, plugin = {} } = props;
  const { updateNode } = plugin;

  const [x, setX] = useState<string>(config?.x);
  const [y, setY] = useState<string>(config?.y);
  useEffect(() => {
    setX(config?.x);
    setY(config?.y);
  }, [config]);

  return (
    <div>
      <label>X: </label>
      <InputNumber
        value={x}
        onChange={(value) => {
          setX(value);
          updateNode({
            x: value,
          });
        }}
        style={{
          width: 80,
        }}
      />
      <label>Y: </label>
      <InputNumber
        value={y}
        onChange={(value) => {
          setY(value);
          updateNode({
            y: value,
          });
        }}
        style={{
          width: 80,
        }}
      />
    </div>
  );
};

export const Position: React.FC = (props) => {
  return (
    <FormWrapper {...props}>
      {(config, plugin) => <PositionComponent {...props} plugin={plugin} config={config} />}
    </FormWrapper>
  );
};
