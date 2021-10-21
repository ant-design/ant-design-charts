import React, { useState, useEffect, useContext } from 'react';
import AppContext from '../../../../context';
import { FormWrapper } from '../../formWrapper';
import Input from './fields/input';
import ColorPicker from './fields/color';
import Position from './fields/position';
import Size from './fields/size';

import { prefix } from './constants';

import './style.less';

interface INodeConfig {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  label?: string;
  stroke?: string;
}

const NodeComponent = (props) => {
  const { config, plugin = {} } = props;
  const { updateNode } = plugin;
  const {
    theme: { NodeConfig },
  } = useContext(AppContext) as any;

  const [nodeConfig, setNodeConfig] = useState<INodeConfig>({
    ...NodeConfig.normal,
    ...config,
  });

  const onNodeConfigChange = (key: string, value: number | string) => {
    setNodeConfig({
      ...nodeConfig,
      [key]: value,
    });
    updateNode({
      [key]: value,
    });
  };

  useEffect(() => {
    setNodeConfig({
      ...NodeConfig.normal,
      ...config,
    });
  }, [config]);

  return (
    <div className={`${prefix}-panel-body`}>
      <Input
        label="标签"
        value={nodeConfig.label}
        onChange={(value) => {
          onNodeConfigChange('label', value);
        }}
      />
      <Position
        x={nodeConfig.x}
        y={nodeConfig.y}
        onChange={(key, value) => {
          onNodeConfigChange(key, value);
        }}
      />
      <Size
        width={nodeConfig.width}
        height={nodeConfig.height}
        onChange={(key, value) => {
          onNodeConfigChange(key, value);
        }}
      />
      <ColorPicker
        label="边框颜色"
        value={nodeConfig.stroke}
        onChange={(value: string) => {
          onNodeConfigChange('stroke', value);
        }}
      />
    </div>
  );
};

export const NodeService: React.FC<any> = (props) => {
  return (
    <FormWrapper {...props}>
      {(config, plugin) => <NodeComponent {...props} plugin={plugin} config={config} />}
    </FormWrapper>
  );
};
